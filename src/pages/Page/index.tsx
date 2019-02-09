import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';

import DrawerContents from '../../components/Drawer';
import Toolbar from '../../components/Toolbar';
import withRoot from '../../withRoot';

import styles from './styles.module.css';

export interface Props {
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
    const { children } = this.props;
    return (
      <div className={styles.root}>
        <Toolbar onMenuClick={() => this.toggleDrawer(true)} />
        <div className={styles.container}>{children}</div>
        <Drawer
          anchor="right"
          open={this.state.drawerOpen}
          onClose={() => {
            console.log('close');
            this.toggleDrawer(false);
          }}
        >
          <DrawerContents />
        </Drawer>
      </div>
    );
  }
}

export default withRoot(PageWrapper);
