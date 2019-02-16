import * as api from './api';
import { observable, decorate, computed } from 'mobx';
import { RecipesLoadManager } from './load-manager';
import { Recipe } from './recipe';
import { deserializeRecipe } from './api/process';

export interface FavoriteEntry {
  recipe: Recipe;
  timestamp: number;
}

export class RecipeStore {
  latestRecipesManager = new RecipesLoadManager();
  recipesManagersByLabel = new Map<string, RecipesLoadManager>();
  searchRecipesManager = new RecipesLoadManager();

  isLoadingRecipeById = new Map<string, boolean>();
  recipesById = new Map<string, Recipe>();

  favorites = new Map<string, FavoriteEntry>();

  constructor() {
    this.deserializeFavorites();
  }

  getLatestRecipes() {
    return this.latestRecipesManager.recipes;
  }

  getSearchRecipes() {
    return this.searchRecipesManager.recipes;
  }

  getRecipesByLabel(label: string) {
    const recipeManager = this.recipesManagersByLabel.get(label);
    if (recipeManager) {
      return recipeManager.recipes;
    }
    return [];
  }

  toggleFavorite = (recipe: Recipe) => {
    if (this.isFavorited(recipe)) {
      this.removeFromFavorites(recipe);
    } else {
      this.addToFavorites(recipe);
    }
  };

  private addToFavorites = (recipe: Recipe) => {
    this.favorites.set(recipe.id, { recipe, timestamp: Date.now() });
    this.serializeFavorites();
  };

  private removeFromFavorites = (recipe: Recipe) => {
    this.favorites.delete(recipe.id);
    this.serializeFavorites();
  };

  isFavorited = (recipe: Recipe) => {
    return this.favorites.has(recipe.id);
  };

  private deserializeFavorites() {
    try {
      const serialized = window.localStorage.getItem('favorites');
      const entries: any[] = serialized ? JSON.parse(serialized) : [];
      entries.forEach(entry => {
        const recipe = deserializeRecipe(entry.recipe);
        this.favorites.set(recipe.id, { recipe, timestamp: entry.timestamp });
      });
    } catch (err) {
      console.error(err);
      window.localStorage.clear();
    }
  }

  private serializeFavorites() {
    const favoriteEntries = [...this.favorites.values()];
    const favorites = JSON.stringify(favoriteEntries);
    window.localStorage.setItem('favorites', favorites);
  }

  getFavorites(): Recipe[] {
    const favorites = [...this.favorites.values()];
    return favorites
      .sort((a, b) => {
        return a.timestamp - b.timestamp;
      })
      .map(entry => entry.recipe);
  }

  loadLatestRecipes = async () => {
    if (this.latestRecipesManager.isLoading) return;
    this.latestRecipesManager.isLoading = true;

    try {
      const params = { pageToken: this.latestRecipesManager.nextPageToken };
      const { recipes, nextPageToken } = await api.loadRecipes(params);
      this.latestRecipesManager.nextPageToken = nextPageToken;
      this.latestRecipesManager.recipes.push(...recipes);
      recipes.forEach(recipe => this.recipesById.set(recipe.id, recipe));
    } catch (err) {}

    this.latestRecipesManager.isLoading = false;
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

  loadRecipesBySearch = async (search: string) => {
    if (this.searchRecipesManager.isLoading) return;
    this.searchRecipesManager.isLoading = true;

    try {
      const pageToken = this.searchRecipesManager.nextPageToken;
      const params = { q: search, pageToken };
      const { recipes, nextPageToken } = await api.loadRecipesBySearch(params);
      this.searchRecipesManager.nextPageToken = nextPageToken;
      this.searchRecipesManager.recipes.push(...recipes);
      recipes.forEach(recipe => this.recipesById.set(recipe.id, recipe));
    } catch (err) {}

    this.searchRecipesManager.isLoading = false;
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
  latestRecipesManager: observable,
  // Recipes by label
  recipesManagersByLabel: observable,
  // Favorites
  favorites: observable,
  // Recipes by id
  isLoadingRecipeById: observable,
  recipesById: observable,
});

export const recipeStore = new RecipeStore();

export const recipes = [];
