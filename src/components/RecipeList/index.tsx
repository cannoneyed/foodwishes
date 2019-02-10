import * as React from 'react';
import withRoot from '../../withRoot';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { Recipe } from '../../core/recipes';
import RecipeCard from '../../components/RecipeCard';

import styles from './styles.module.css';

export interface Props {
  recipes: Recipe[];
  isLoading: boolean;
  loadMore: () => {};
}

class RecipeList extends React.Component<Props, {}> {
  render() {
    const { isLoading, loadMore, recipes } = this.props;
    return (
      <div className={styles.container}>
        {recipes.map(recipe => (
          <div key={recipe.id} className={styles.recipeCardContainer}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
        {
          <div className={styles.loadMoreContainer}>
            <Fab color="primary" variant="extended" aria-label="More" onClick={() => loadMore()}>
              {isLoading ? (
                <span className={styles.loadButton}>
                  <CircularProgress style={{ color: 'white' }} size={30} thickness={4} />
                </span>
              ) : (
                <span className={styles.loadButton}>
                  <AddIcon />
                  Load More
                </span>
              )}
            </Fab>
          </div>
        }
      </div>
    );
  }
}

export default withRoot(RecipeList);
