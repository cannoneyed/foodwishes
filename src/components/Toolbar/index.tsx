import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  },
  left: {
    alignItems: 'center',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 0,
  },
};

export interface Props extends WithStyles<typeof styles> {
  onMenuClick: () => void;
}

class ToolbarComponent extends React.Component<Props, {}> {
  render() {
    const { classes, onMenuClick } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <span className={classes.left}>
            <img src="/foodwishes_logo.png" width="90" />
          </span>
          <IconButton
            className={classes.menuButton}
            onClick={onMenuClick}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRoot(withStyles(styles)(ToolbarComponent));
