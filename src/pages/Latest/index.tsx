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
    const { latestRecipesMgr } = recipeStore;
    const { recipes, isLoading, canLoadMore } = latestRecipesMgr;
    const loadMore = () => recipeStore.loadLatestRecipes();

    return (
      <PageWrapper>
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
