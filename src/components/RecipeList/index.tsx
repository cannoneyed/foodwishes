import * as React from 'react';
import withRoot from '../../withRoot';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { Recipe } from '../../core/recipe';
import RecipeCard from '../../components/RecipeCard';

import styles from './styles.module.css';

export interface Props {
  recipes: Recipe[];
  isLoading?: boolean;
  loadMore?: () => void;
  canLoadMore?: boolean;
}

class RecipeList extends React.Component<Props, {}> {
  static defaultProps = {
    isLoading: false,
    loadMore: () => {},
    canLoadMore: false,
  };

  render() {
    const { canLoadMore, isLoading, loadMore, recipes } = this.props;
    return (
      <div className={styles.container}>
        {recipes.map(recipe => (
          <div key={recipe.id} className={styles.recipeCardContainer}>
            <RecipeCard recipe={recipe} />
          </div>
        ))}
        {canLoadMore && (
          <div className={styles.loadMoreContainer}>
            <Fab color="primary" variant="extended" aria-label="More" onClick={() => loadMore!()}>
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
        )}
      </div>
    );
  }
}

export default withRoot(RecipeList);
