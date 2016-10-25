import React, { PropTypes } from 'react'

import Header from '../Header'

const App = ({ children }) => {
  return (
    <div>
      <Header />
      { children }
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node,
}

export default App
