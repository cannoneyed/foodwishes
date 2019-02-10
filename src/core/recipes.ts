import { getRecipes } from './api';
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
  isLoadingLatestRecipes = false;
  latestRecipes: Recipe[] = [];
  latestRecipesNextPageToken: string | undefined;

  loadLatestRecipes = async () => {
    if (this.isLoadingLatestRecipes) return;
    this.isLoadingLatestRecipes = true;

    try {
      const params = { pageToken: this.latestRecipesNextPageToken };
      const { recipes, nextPageToken } = await getRecipes(params);
      this.latestRecipesNextPageToken = nextPageToken;
      this.latestRecipes.push(...recipes);
    } catch (err) {}

    this.isLoadingLatestRecipes = false;
  };
}

decorate(RecipeStore, {
  isLoadingLatestRecipes: observable,
  latestRecipes: observable,
});

export const recipeStore = new RecipeStore();

export const recipes = [];
