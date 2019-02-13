import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';

import PageWrapper from '../Page';

const styles = require('./styles.module.css');

export interface Props extends RouteComponentProps {}
export interface State {
  searchText: string;
}

class SearchPage extends React.Component<Props, State> {
  state = {
    searchText: '',
  };

  handleChange = (event: any) => {
    this.setState({ searchText: event.currentTarget.value });
  };

  render() {
    return (
      <PageWrapper>
        <Card className={styles.card}>
          <CardContent>
            <div className={styles.searchCard}>
              <div className={styles.inputContainer}>
                <TextField
                  label="Search"
                  className={styles.searchField}
                  value={this.state.searchText}
                  onChange={this.handleChange}
                  fullWidth
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </PageWrapper>
    );
  }
}

export default withRouter(observer(SearchPage));
