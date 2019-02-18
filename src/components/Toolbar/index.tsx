import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../../withRoot';
import { BASENAME } from '../../core/config';

import styles from './styles.module.css';

export interface Props {
  onMenuClick: () => void;
  title: string;
}

class ToolbarComponent extends React.Component<Props, {}> {
  render() {
    const { onMenuClick, title } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar className={styles.toolbar}>
          <span className={styles.left}>
            <img src={`${BASENAME}/foodwishes_logo.png`} width="90" />
          </span>
          <span className={styles.center}>
            <Typography variant="h6" style={{ color: 'white' }}>
              {title}
            </Typography>
          </span>
          <span className={styles.right}>
            <IconButton
              className={styles.menuButton}
              onClick={onMenuClick}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </span>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRoot(ToolbarComponent);
