import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

import { Recipe } from '../../core/recipe';
import RecipeCard from '../../components/RecipeCard';

const styles = {
  container: {
    alignItems: 'center' as 'center',
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
  },
};

export interface Props extends WithStyles<typeof styles> {
  recipes: Recipe[];
}

class RecipeList extends React.Component<Props, {}> {
  render() {
    const { recipes, classes } = this.props;
    return (
      <div className={classes.container}>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(RecipeList));
