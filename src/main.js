import '!style!css!resolve-url!postcss-loader!sass!./styles/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from './components/root'

ReactDOM.render(<Root />, document.querySelector('.app-root'))
