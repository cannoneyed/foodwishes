import * as api from './api';
import { observable, decorate } from 'mobx';
import Recipe from '../components/Recipe';

export interface Recipe {
  completeRecipeLink?: string;
  description: string[];
  directions: string[];
  images: string[];
  imagesLow: string[];
  videoSrc: string;
  rawContent: string;
  id: string;
  image: string;
  imageLow: string;
  labels: string[];
  published: Date;
  replies: number;
  title: string;
  updated: Date;
}

export class RecipeStore {
  isLoadingRecipeById = false;
  recipesById = new Map<string, Recipe>();

  isLoadingLatestRecipes = false;
  latestRecipes: Recipe[] = [];
  latestRecipesNextPageToken: string | undefined;

  loadLatestRecipes = async () => {
    if (this.isLoadingLatestRecipes) return;
    this.isLoadingLatestRecipes = true;

    try {
      const params = { pageToken: this.latestRecipesNextPageToken };
      const { recipes, nextPageToken } = await api.loadRecipes(params);
      this.latestRecipesNextPageToken = nextPageToken;
      this.latestRecipes.push(...recipes);
      recipes.forEach(recipe => this.recipesById.set(recipe.id, recipe));
    } catch (err) {}

    this.isLoadingLatestRecipes = false;
  };

  loadRecipeById = async (id: string) => {
    if (this.isLoadingRecipeById || this.recipesById.get(id)) return;
    this.isLoadingRecipeById = true;

    try {
      const recipe = await api.loadRecipeById(id);
      if (recipe) {
        this.recipesById.set(recipe.id, recipe);
      }
    } catch (err) {}

    this.isLoadingLatestRecipes = false;
  };
}

decorate(RecipeStore, {
  isLoadingLatestRecipes: observable,
  latestRecipes: observable,
  recipesById: observable,
});

export const recipeStore = new RecipeStore();

export const recipes = [];
