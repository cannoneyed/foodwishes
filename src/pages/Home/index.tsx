import * as React from 'react';

import { recipes } from '../../core/recipes';

import PageWrapper from '../Page';
import RecipeList from '../../components/RecipeList';

export interface Props {}
export interface State {}

class HomePage extends React.Component<Props, State> {
  render() {
    return (
      <PageWrapper>
        <RecipeList recipes={recipes} />
      </PageWrapper>
    );
  }
}

export default HomePage;
