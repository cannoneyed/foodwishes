import * as React from 'react';
import { match } from 'react-router-dom';
import { observer } from 'mobx-react';

import { recipeStore } from '../../core/recipes';

import PageWrapper from '../Page';
import RecipeList from '../../components/RecipeList';

interface RecipeIdParams {
  labels: string;
}
export interface Props {
  match: match<RecipeIdParams>;
}
export interface State {}

class HomePage extends React.Component<Props, State> {
  componentDidMount() {
    const { labels } = this.props.match.params;
    const recipesByLabel = recipeStore.recipesByLabel.get(labels);
    if (!recipesByLabel) {
      recipeStore.loadRecipesByLabel(labels);
    }
  }

  render() {
    const { labels } = this.props.match.params;
    const recipes = recipeStore.recipesByLabel.get(labels);

    const isLoading = !!recipeStore.isLoadingRecipesByLabel.get(labels);
    const loadMore = () => recipeStore.loadRecipesByLabel(labels);

    return (
      <PageWrapper>
        {recipes && <RecipeList recipes={recipes} isLoading={isLoading} loadMore={loadMore} />}
      </PageWrapper>
    );
  }
}

export default observer(HomePage);
