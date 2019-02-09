import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
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
  header: {
    paddingBottom: 0,
  },
  chips: {
    marginBottom: 20,
    marginLeft: -5,
    width: '100%',
    display: 'flex' as 'flex',
    alignItems: 'center' as 'center',
    flexWrap: 'wrap' as 'wrap',
  },
  chip: {
    boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
    transform: 'scale(0.9)',
  },
  title: {
    fontSize: '1.1rem',
  },
  actions: {
    display: 'flex',
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

export interface Props extends WithStyles<typeof styles> {
  recipe: Recipe;
}

class FullRecipe extends React.Component<Props, {}> {
  formatDate = (date: Date) => {
    return date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  renderTitle = (title: string) => {
    return (
      <Typography variant="h6" classes={{ h6: this.props.classes.title }}>
        {title}
      </Typography>
    );
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

  renderVideo() {
    const { recipe } = this.props;
    return (
      <iframe
        width="560"
        height="315"
        src={`${recipe.videoSrc}?rel=0`}
        allow="autoplay; encrypted-media"
        frameBorder="0"
        allowFullScreen
      />
    );
  }

  render() {
    const { classes, recipe } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          action={
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
          }
          title={this.renderTitle(recipe.title)}
          subheader={this.formatDate(recipe.published)}
        />
        <CardContent>
          {this.renderChips()}
          {this.renderVideo()}
        </CardContent>
        <CardContent>
          {recipe.description.map((section, index) => (
            <Typography key={index} paragraph>
              {section}
            </Typography>
          ))}
          <Divider />
          <List dense>
            {recipe.directions.map((direction, index) => (
              <ListItem className={classes.listItem} key={index}>
                <ListItemText>{direction}</ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withRoot(withStyles(styles)(FullRecipe));
