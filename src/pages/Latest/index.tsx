import * as React from 'react';
import { observer } from 'mobx-react';
import { recipeStore } from '../../core/recipes';

import PageWrapper from '../Page';
import RecipeList from '../../components/RecipeList';

export interface Props {}
export interface State {}

class LatestPage extends React.Component<Props, State> {
  componentDidMount() {
    if (recipeStore.getLatestRecipes().length === 0) {
      recipeStore.loadLatestRecipes();
    }
  }

  render() {
    const { latestRecipesManager } = recipeStore;
    const { recipes, isLoading, canLoadMore } = latestRecipesManager;
    const loadMore = () => recipeStore.loadLatestRecipes();

    return (
      <PageWrapper title="Latest">
        <RecipeList
          recipes={recipes}
          isLoading={isLoading}
          loadMore={loadMore}
          canLoadMore={canLoadMore}
        />
      </PageWrapper>
    );
  }
}

export default observer(LatestPage);
