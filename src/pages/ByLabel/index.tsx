import * as React from 'react';
import { match } from 'react-router-dom';
import { observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';

import { recipeStore } from '../../core/recipes';

import PageWrapper from '../Page';
import RecipeList from '../../components/RecipeList';

const styles = require('./styles.module.css');

interface RecipeIdParams {
  labels: string;
}
export interface Props {
  match: match<RecipeIdParams>;
}
export interface State {}

class ByLabelPage extends React.Component<Props, State> {
  componentDidMount() {
    const { labels } = this.props.match.params;
    this.maybeLoadRecipesByLabels(labels);
  }

  componentWillReceiveProps(nextProps: Props) {
    const { labels } = nextProps.match.params;
    this.maybeLoadRecipesByLabels(labels);
  }

  maybeLoadRecipesByLabels(labels: string) {
    const recipesManager = recipeStore.recipesManagersByLabel.get(labels);
    const recipesExist = recipesManager && recipesManager.recipes.length > 0;
    if (!recipesExist) {
      recipeStore.loadRecipesByLabel(labels);
    }
  }

  render() {
    const { labels } = this.props.match.params;
    const recipesManager = recipeStore.recipesManagersByLabel.get(labels);
    const recipes = recipeStore.getRecipesByLabel(labels);

    const isLoading = recipesManager ? recipesManager.isLoading : false;
    const canLoadMore = recipesManager ? recipesManager.canLoadMore : false;
    const loadMore = () => recipeStore.loadRecipesByLabel(labels);

    const pageTitle = `${labels}`;

    return (
      <PageWrapper title={pageTitle}>
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

export default observer(ByLabelPage);
