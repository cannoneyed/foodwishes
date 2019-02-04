import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';

import { recipes } from '../../core/recipes';

import Toolbar from '../../components/Toolbar';
import RecipeList from '../../components/RecipeList';
import withRoot from '../../withRoot';

const styles = {
  root: {
    flexGrow: 1,
  },
};

export interface Props extends WithStyles<typeof styles> {}

class HomePage extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Toolbar />
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(HomePage));
