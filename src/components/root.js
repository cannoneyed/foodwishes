import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'

// Components
import App from './app/app'
import SignIn from './sign-in/sign-in'
import Email from './sign-in/email'
import Connect from './connect/connect'
import Listen from './listen/listen'
import Intro from './about/intro'
import About from './about/about'

export function Root({history, onEnter, store}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={App} onEnter={onEnter} path="/">
          <Route component={SignIn} onEnter={onEnter} path={'/sign-in'} />
          <Route component={Email} path={'/email'} />
          <Route component={Connect} onEnter={onEnter} path={'/connect'} />
          <Route component={Listen} path={'/listen'} />
          <Route component={Intro} path={'/intro'} />
          <Route component={About} path={'/about'} />
        </Route>
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  onEnter: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
}
