import * as React from 'react';
import withRoot from '../../withRoot';
import { getRecipes } from '../../core/api';

import { Recipe } from '../../core/recipe';
import RecipeCard from '../../components/RecipeCard';

import styles from './styles.module.css';

export interface Props {
  recipes: Recipe[];
}

class RecipeList extends React.Component<Props, {}> {
  componentDidMount() {
    getRecipes().then(recipes => console.log('🌶', recipes));
  }

  render() {
    const { recipes } = this.props;
    return (
      <div className={styles.container}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default withRoot(RecipeList);
