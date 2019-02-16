import * as React from 'react';
import { match } from 'react-router-dom';
import { observer } from 'mobx-react';

import { recipeStore } from '../../core/recipes';

import PageWrapper from '../Page';
import Recipe from '../../components/Recipe';

interface RecipeIdParams {
  recipeId: string;
}
export interface Props {
  match: match<RecipeIdParams>;
}
export interface State {}

class HomePage extends React.Component<Props, State> {
  componentDidMount() {
    const { recipeId } = this.props.match.params;
    recipeStore.loadRecipeById(recipeId);
  }

  render() {
    const { recipeId } = this.props.match.params;
    const recipe = recipeStore.recipesById.get(recipeId);
    return <PageWrapper title="">{recipe && <Recipe recipe={recipe} />}</PageWrapper>;
  }
}

export default observer(HomePage);
