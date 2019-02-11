import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Categories from './pages/Categories';
import Labels from './pages/Labels';
import Recipe from './pages/Recipe';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipe/:recipeId" component={Recipe} />
        <Route path="/labels/:labels" component={Labels} />
        <Route path="/categories" component={Categories} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
