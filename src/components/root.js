import React from 'react'
import { Provider } from 'mobx-react'
import { Route, Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'

import store from 'src/core'
const history = useRouterHistory(createHistory)({basename: '/'})

import App from './App'
import Recipes from './Recipes'

// Initialize application data
store.recipeStore.loadInitialData()

export function Root() {
  return (
    <Provider { ...store }>
      <Router history={history}>
        <Route component={App} path="/">
          <Route component={Recipes} path="/recipes" />
        </Route>
      </Router>
    </Provider>
  )
}
