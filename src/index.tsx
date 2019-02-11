import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Categories from './pages/Categories';
import Recipe from './pages/Recipe';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipe/:recipeId" component={Recipe} />
        <Route path="/categories/:labels" component={Categories} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
