import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Categories from './pages/Categories';
import Favorites from './pages/Favorites';
import Labels from './pages/Labels';
import Latest from './pages/Latest';
import Recipe from './pages/Recipe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Latest} />
        <Route path="/recipe/:recipeId" component={Recipe} />
        <Route path="/labels/:labels" component={Labels} />
        <Route path="/categories" component={Categories} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
