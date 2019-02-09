import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import DrawerContents from '../../components/Drawer';
import Toolbar from '../../components/Toolbar';
import withRoot from '../../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    alignItems: 'center' as 'center',
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
  },
};

export interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode;
}
export interface State {
  drawerOpen: boolean;
}

class PageWrapper extends React.Component<Props, State> {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = (drawerOpen: boolean) => {
    this.setState({ drawerOpen });
  };

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar onMenuClick={() => this.toggleDrawer(true)} />
        <div className={classes.container}>{children}</div>
        <Drawer
          anchor="right"
          open={this.state.drawerOpen}
          onClose={() => this.toggleDrawer(false)}
        >
          <DrawerContents />
        </Drawer>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(PageWrapper));
