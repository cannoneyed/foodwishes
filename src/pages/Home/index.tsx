import * as React from 'react';
import { observer } from 'mobx-react';
import { recipeStore } from '../../core/recipes';

import PageWrapper from '../Page';
import RecipeList from '../../components/RecipeList';

export interface Props {}
export interface State {}

class HomePage extends React.Component<Props, State> {
  componentDidMount() {
    if (recipeStore.latestRecipes.length === 0) {
      recipeStore.loadLatestRecipes();
    }
  }

  render() {
    const { latestRecipes, isLoadingLatestRecipes, loadLatestRecipes } = recipeStore;
    const loadMore = () => loadLatestRecipes();

    return (
      <PageWrapper>
        <RecipeList
          recipes={latestRecipes}
          isLoading={isLoadingLatestRecipes}
          loadMore={loadMore}
        />
      </PageWrapper>
    );
  }
}

export default observer(HomePage);
