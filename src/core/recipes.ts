import recipesData from '../data/recipes.json';
import { Recipe } from './recipe';

const parsedRecipes: Recipe[] = recipesData.recipes.map(recipe => {
  (recipe as any).published = new Date(recipe.published);
  (recipe as any).updated = new Date(recipe.updated);
  return (recipe as any) as Recipe;
});

export const recipes = parsedRecipes;
