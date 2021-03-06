import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';

import DrawerContents from '../../components/DrawerContents';
import Toolbar from '../../components/Toolbar';
import withRoot from '../../withRoot';

import styles from './styles.module.css';

export interface Props {
  children: React.ReactNode;
  title: string;
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
    const { children, title } = this.props;
    return (
      <div className={styles.root}>
        <Toolbar title={title} onMenuClick={() => this.toggleDrawer(true)} />
        <div className={styles.container}>{children}</div>
        <Drawer
          anchor="right"
          open={this.state.drawerOpen}
          onClose={() => {
            this.toggleDrawer(false);
          }}
        >
          <DrawerContents closeDrawer={() => this.toggleDrawer(false)} />
        </Drawer>
      </div>
    );
  }
}

export default withRoot(PageWrapper);
