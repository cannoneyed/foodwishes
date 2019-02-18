import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import withRoot from '../../withRoot';
import { Recipe } from '../../core/recipe';

import styles from './styles.module.css';

export interface Props extends RouteComponentProps {
  recipe: Recipe;
}

class FullRecipe extends React.Component<Props, {}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  formatDate = (date: Date) => {
    return date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  renderTitle = (title: string) => {
    return (
      <Typography variant="h6" classes={{ h6: styles.title }}>
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

  renderVideo() {
    const { recipe } = this.props;
    return (
      <div className={styles.resizableVideo}>
        <div>
          <iframe
            width="560"
            height="315"
            src={`${recipe.videoSrc}?rel=0`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  render() {
    const { recipe } = this.props;
    return (
      <Card className={styles.card}>
        <CardHeader
          className={styles.header}
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
              <ListItem className={styles.listItem} key={index}>
                <ListItemText>{direction}</ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withRouter(withRoot(FullRecipe));
