import { computed, observable, decorate } from 'mobx';
import { Recipe } from './recipe';
import { recipes } from './recipes';

export class RecipesLoadManager {
  isLoading = false;
  recipes: Recipe[] = [];
  nextPageToken: string | undefined;

  get canLoadMore(): boolean {
    return !!(this.recipes.length === 0 || this.nextPageToken);
  }
}

decorate(RecipesLoadManager, {
  isLoading: observable,
  recipes: observable,
  canLoadMore: computed,
});
