import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter, RouteComponentProps } from 'react-router';

import styles from './styles.module.css';

export interface Props extends RouteComponentProps {
  closeDrawer: () => void;
}

class DrawerContents extends React.Component<Props, {}> {
  navigateTo(redirectTarget: string) {
    return () => {
      this.props.closeDrawer();
      this.props.history.push(redirectTarget);
    };
  }

  render() {
    return (
      <div className={styles.list}>
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

export default withRouter(DrawerContents);
