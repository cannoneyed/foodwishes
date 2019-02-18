import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { Recipe } from '../../core/recipe';

import Favorite from '../Favorite';

import styles from './styles.module.css';

export interface Props extends RouteComponentProps {
  recipe: Recipe;
}

class RecipeCard extends React.Component<Props, {}> {
  navigateToRecipe() {
    const { recipe } = this.props;
    const recipeAddress = `/recipe/${recipe.id}`;
    return () => this.props.history.push(recipeAddress);
  }

  formatDate = (date: Date) => {
    return date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  getCategory = (labels: string[]) => {
    return <LocalDiningIcon />;
  };

  renderTitle = (title: string) => {
    return (
      <Typography variant="h6" classes={{ h6: styles.title }} onClick={this.navigateToRecipe()}>
        {title}
      </Typography>
    );
  };

  renderChips() {
    const { recipe } = this.props;

    return (
      <span className={styles.chips}>
        {recipe.labels.map(label => {
          const handleChipClick = (event: React.MouseEvent) => {
            event.stopPropagation();
            this.props.history.push(`/labels/${label}`);
          };
          return (
            <Chip
              onClick={handleChipClick}
              color="primary"
              className={styles.chip}
              key={label}
              label={label}
            />
          );
        })}
      </span>
    );
  }

  render() {
    const { recipe } = this.props;
    return (
      <Card className={styles.card}>
        <CardHeader
          action={<Favorite recipe={recipe} />}
          title={this.renderTitle(recipe.title)}
          subheader={this.formatDate(recipe.published)}
        />
        <CardActionArea>
          <CardMedia
            onClick={this.navigateToRecipe()}
            className={styles.media}
            image={recipe.image}
            title={recipe.title}
          >
            {this.renderChips()}
          </CardMedia>
        </CardActionArea>
      </Card>
    );
  }
}

export default withRouter(observer(RecipeCard));
