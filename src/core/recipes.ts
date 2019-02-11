import * as api from './api';
import { observable, decorate } from 'mobx';
import Recipe from '../components/Recipe';
import { string } from 'prop-types';

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
  isLoadingRecipesByLabel = new Map<string, boolean>();
  recipesByLabel = new Map<string, Recipe[]>();
  recipesByLabelNextPageTokens = new Map<string, string>();

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

  loadRecipesByLabel = async (labels: string) => {
    if (this.isLoadingRecipesByLabel.get(labels)) return;
    this.isLoadingRecipesByLabel.set(labels, true);

    try {
      const pageToken = this.recipesByLabelNextPageTokens.get(labels) || undefined;
      const params = { labels, pageToken };
      const { recipes, nextPageToken } = await api.loadRecipesByLabels(params);
      if (nextPageToken) {
        this.recipesByLabelNextPageTokens.set(labels, nextPageToken);
      }
      const recipesByLabel = this.recipesByLabel.get(labels) || [];
      recipesByLabel.push(...recipes);
      this.recipesByLabel.set(labels, recipesByLabel);
      recipes.forEach(recipe => this.recipesById.set(recipe.id, recipe));
    } catch (err) {}

    this.isLoadingRecipesByLabel.set(labels, false);
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
  isLoadingRecipesByLabel: observable,
  recipesByLabel: observable,
  isLoadingLatestRecipes: observable,
  latestRecipes: observable,
  recipesById: observable,
});

export const recipeStore = new RecipeStore();

export const recipes = [];
