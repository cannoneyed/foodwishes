import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ByLabel from './pages/ByLabel';
import Categories from './pages/Categories';
import Latest from './pages/Latest';
import Recipe from './pages/Recipe';
import Search from './pages/Search';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Latest} />
        <Route path="/recipe/:recipeId" component={Recipe} />
        <Route path="/labels/:labels" component={ByLabel} />
        <Route path="/categories" component={Categories} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
