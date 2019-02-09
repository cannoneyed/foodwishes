import * as React from 'react';

import { recipes } from '../../core/recipes';

import PageWrapper from '../Page';
import Recipe from '../../components/Recipe';

export interface Props {}
export interface State {}

class HomePage extends React.Component<Props, State> {
  render() {
    return (
      <PageWrapper>
        <Recipe recipe={recipes[2]} />
      </PageWrapper>
    );
  }
}

export default HomePage;
