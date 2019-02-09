import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Redirect, withRouter, RouteComponentProps } from 'react-router';

import withRoot from '../../withRoot';

const styles = {
  list: {
    width: 250,
  },
};

export interface Props extends WithStyles<typeof styles>, RouteComponentProps {}
export interface State {
  redirectTarget: string | null;
}

class Drawer extends React.Component<Props, State> {
  state: State = {
    redirectTarget: null,
  };

  navigateTo(redirectTarget: string) {
    return () => this.props.history.push(redirectTarget);
  }

  render() {
    if (this.state.redirectTarget !== null) {
      return <Redirect to={this.state.redirectTarget} push />;
    }

    const { classes } = this.props;
    return (
      <div className={classes.list}>
        <List>
          <ListItem button onClick={this.navigateTo('/')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Latest" />
          </ListItem>
          <ListItem button onClick={this.navigateTo('/favorites')}>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem button onClick={this.navigateTo('/categories')}>
            <ListItemIcon>
              <LocalPizzaIcon />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button onClick={this.navigateTo('/search')}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withRouter(withRoot(withStyles(styles)(Drawer)));
