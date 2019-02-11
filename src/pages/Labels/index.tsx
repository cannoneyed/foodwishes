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

class LabelsPage extends React.Component<Props, State> {
  componentDidMount() {
    const { labels } = this.props.match.params;
    this.maybeLoadRecipesByLabels(labels);
  }

  componentWillReceiveProps(nextProps: Props) {
    const { labels } = nextProps.match.params;
    this.maybeLoadRecipesByLabels(labels);
  }

  maybeLoadRecipesByLabels(labels: string) {
    const recipesByLabel = recipeStore.recipesByLabel.get(labels);
    if (!recipesByLabel) {
      recipeStore.loadRecipesByLabel(labels);
    }
  }

  render() {
    const { labels } = this.props.match.params;
    const recipes = recipeStore.recipesByLabel.get(labels) || [];

    const isLoading = !!recipeStore.isLoadingRecipesByLabel.get(labels);
    const loadMore = () => recipeStore.loadRecipesByLabel(labels);

    return (
      <PageWrapper>
        <RecipeList recipes={recipes} isLoading={isLoading} loadMore={loadMore} />
      </PageWrapper>
    );
  }
}

export default observer(LabelsPage);
