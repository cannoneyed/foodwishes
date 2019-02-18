import * as React from 'react';
import { observer } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Recipe } from '../../core/recipe';
import { recipeStore } from '../../core/recipes';

export interface Props {
  recipe: Recipe;
}

class Favorite extends React.Component<Props, {}> {
  render() {
    const { recipe } = this.props;
    const { isFavorited, toggleFavorite } = recipeStore;
    const handleFavoriteClick = () => toggleFavorite(recipe);

    return (
      <IconButton aria-label="Add to favorites" onClick={handleFavoriteClick}>
        <FavoriteIcon color={isFavorited(recipe) ? 'primary' : 'disabled'} />
      </IconButton>
    );
  }
}

export default observer(Favorite);
