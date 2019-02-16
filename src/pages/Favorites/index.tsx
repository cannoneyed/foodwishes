import * as React from 'react';
import { observer } from 'mobx-react';
import { recipeStore } from '../../core/recipes';

import PageWrapper from '../Page';
import RecipeList from '../../components/RecipeList';

export interface Props {}
export interface State {}

class FavoritesPage extends React.Component<Props, State> {
  render() {
    const recipes = recipeStore.getFavorites();

    return (
      <PageWrapper>
        <RecipeList recipes={recipes} />
      </PageWrapper>
    );
  }
}

export default observer(FavoritesPage);
