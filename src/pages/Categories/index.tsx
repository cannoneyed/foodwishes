import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import { categories } from '../../core/categories';

import PageWrapper from '../Page';

const styles = require('./styles.module.css');

export interface Props extends RouteComponentProps {}
export interface State {}

class CategoriesPage extends React.Component<Props, State> {
  render() {
    return (
      <PageWrapper>
        <Card className={styles.card}>
          <CardHeader title="Categories" />
          <CardContent>
            {categories.map(category => {
              const handleChipClick = (event: React.MouseEvent) => {
                event.stopPropagation();
                this.props.history.push(`/labels/${category}`);
              };
              return (
                <Chip
                  onClick={handleChipClick}
                  color="default"
                  className={styles.chip}
                  key={category}
                  label={category}
                />
              );
            })}
          </CardContent>
        </Card>
      </PageWrapper>
    );
  }
}

export default withRouter(observer(CategoriesPage));
