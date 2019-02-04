import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import withRoot from '../../withRoot';
import { Recipe } from '../../core/recipe';

const styles = {
  card: {
    maxWidth: 600,
    width: '100%',
    marginTop: 10,
  },
  chips: {
    position: 'absolute' as 'absolute',
    marginTop: -240,
    width: '100%',
    display: 'flex' as 'flex',
    alignItems: 'center' as 'center',
    justifyContent: 'flex-end' as 'flex-end',
    flexWrap: 'wrap' as 'wrap',
  },
  chip: {
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    transform: 'scale(0.9)',
  },
  title: {
    fontSize: '1.2rem',
  },
  media: {
    height: 0,
    paddingTop: 250,
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
};

export interface Props extends WithStyles<typeof styles> {
  recipe: Recipe;
}

class RecipeCard extends React.Component<Props, {}> {
  formatDate = (date: Date) => {
    return date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  getCategory = (labels: string[]) => {
    return <LocalDiningIcon />;
  };

  renderChips() {
    const { classes, recipe } = this.props;
    return (
      <span className={classes.chips}>
        {recipe.labels.map(label => {
          return <Chip color="primary" className={classes.chip} key={label} label={label} />;
        })}
      </span>
    );
  }

  render() {
    const { classes, recipe } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          }
          title={recipe.title}
          titleTypographyProps={{
            classes: {
              h5: classes.title,
            },
          }}
          subheader={this.formatDate(recipe.published)}
        />
        <CardActionArea>
          <CardMedia
            onClick={() => console.log('FUCK YOU')}
            className={classes.media}
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

export default withRoot(withStyles(styles)(RecipeCard));
