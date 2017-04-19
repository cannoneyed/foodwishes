import React from 'react'
import { Provider } from 'mobx-react'
import { IndexRedirect, Route, Router, hashHistory } from 'react-router'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'

import store from 'src/core'

const routingStore = new RouterStore()
const history = syncHistoryWithStore(hashHistory, routingStore)

import App from './App'
import Recipes from './Recipes'
import Recipe from './Recipe'

// Initialize application data
store.recipeStore.loadInitialData()


export function Root() {
  return (
    <Provider { ...store } routingStore={routingStore}>
      <Router history={history} >
        <Route component={App} path="/">
          <IndexRedirect to="/recipes" />
          <Route component={Recipes} path="/recipes" />
          <Route component={Recipe} path="/recipe/:id" />
        </Route>
      </Router>
    </Provider>
  )
}
