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
import withRoot from '../../withRoot';

const styles = {
  list: {
    width: 250,
  },
};

export interface Props extends WithStyles<typeof styles> {}

class Drawer extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Latest" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalPizzaIcon />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
          <ListItem button>
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

export default withRoot(withStyles(styles)(Drawer));
