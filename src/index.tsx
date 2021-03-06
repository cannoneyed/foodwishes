import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { BASENAME } from './core/config';

import ByLabel from './pages/ByLabel';
import Categories from './pages/Categories';
import Favorites from './pages/Favorites';
import Latest from './pages/Latest';
import Recipe from './pages/Recipe';
import Search from './pages/Search';

const App = () => {
  return (
    <Router basename={`${BASENAME}/`}>
      <Switch>
        <Route exact path="/" component={Latest} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/labels/:labels" component={ByLabel} />
        <Route path="/recipe/:recipeId" component={Recipe} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
