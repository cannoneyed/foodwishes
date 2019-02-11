import * as api from './api';
import { observable, decorate, computed } from 'mobx';
import { RecipesLoadManager } from './load-manager';
import { Recipe } from './recipe';

export class RecipeStore {
  latestRecipesMgr = new RecipesLoadManager();

  recipesManagersByLabel = new Map<string, RecipesLoadManager>();

  isLoadingRecipeById = new Map<string, boolean>();
  recipesById = new Map<string, Recipe>();

  getLatestRecipes() {
    return this.latestRecipesMgr.recipes;
  }

  getRecipesByLabel(label: string) {
    const recipeManager = this.recipesManagersByLabel.get(label);
    if (recipeManager) {
      return recipeManager.recipes;
    }
    return [];
  }

  loadLatestRecipes = async () => {
    if (this.latestRecipesMgr.isLoading) return;
    this.latestRecipesMgr.isLoading = true;

    try {
      const params = { pageToken: this.latestRecipesMgr.nextPageToken };
      const { recipes, nextPageToken } = await api.loadRecipes(params);
      this.latestRecipesMgr.nextPageToken = nextPageToken;
      this.latestRecipesMgr.recipes.push(...recipes);
      recipes.forEach(recipe => this.recipesById.set(recipe.id, recipe));
    } catch (err) {}

    this.latestRecipesMgr.isLoading = false;
  };

  loadRecipesByLabel = async (labels: string) => {
    if (!this.recipesManagersByLabel.has(labels)) {
      this.recipesManagersByLabel.set(labels, new RecipesLoadManager());
    }
    const recipesManager = this.recipesManagersByLabel.get(labels)!;
    if (recipesManager.isLoading) return;
    recipesManager.isLoading = true;

    try {
      const pageToken = recipesManager.nextPageToken;
      const params = { labels, pageToken };
      const { recipes, nextPageToken } = await api.loadRecipesByLabels(params);
      if (nextPageToken) {
        recipesManager.nextPageToken = nextPageToken;
      }
      recipesManager.recipes.push(...recipes);
      recipes.forEach(recipe => this.recipesById.set(recipe.id, recipe));
    } catch (err) {}

    recipesManager.isLoading = false;
  };

  loadRecipeById = async (id: string) => {
    if (this.isLoadingRecipeById.get(id) || this.recipesById.get(id)) return;
    this.isLoadingRecipeById.set(id, true);

    try {
      const recipe = await api.loadRecipeById(id);
      if (recipe) {
        this.recipesById.set(recipe.id, recipe);
      }
    } catch (err) {}

    this.isLoadingRecipeById.set(id, false);
  };
}

decorate(RecipeStore, {
  // Latest recipes
  latestRecipesMgr: observable,
  // Recipes by label
  recipesManagersByLabel: observable,
  isLoadingRecipeById: observable,
  recipesById: observable,
});

export const recipeStore = new RecipeStore();

export const recipes = [];
