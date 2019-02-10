import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../../withRoot';

import styles from './styles.module.css';

export interface Props {
  onMenuClick: () => void;
}

class ToolbarComponent extends React.Component<Props, {}> {
  render() {
    const { onMenuClick } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <span className={styles.left}>
            <img src="/foodwishes_logo.png" width="90" />
          </span>
          <IconButton
            className={styles.menuButton}
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

export default withRoot(ToolbarComponent);
