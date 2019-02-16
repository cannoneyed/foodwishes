import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

import { recipeStore } from '../../core/recipes';

import PageWrapper from '../Page';
import RecipeList from '../../components/RecipeList';

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

  handleSubmit = () => {
    recipeStore.loadRecipesBySearch(this.state.searchText);
  };

  render() {
    const { searchRecipesManager } = recipeStore;
    const { recipes, isLoading } = searchRecipesManager;
    const loadMore = () => recipeStore.loadRecipesBySearch(this.state.searchText);

    return (
      <PageWrapper title="Search">
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
                <Button
                  disabled={isLoading}
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  {isLoading ? (
                    <span className={styles.searchButton}>
                      <CircularProgress style={{ color: 'white' }} size={30} thickness={4} />
                    </span>
                  ) : (
                    <span className={styles.searchButton}>Search</span>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <RecipeList
          recipes={recipes}
          isLoading={isLoading}
          loadMore={loadMore}
          canLoadMore={false}
        />
      </PageWrapper>
    );
  }
}

export default withRouter(observer(SearchPage));
