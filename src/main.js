import React from 'react'
import ReactDOM from 'react-dom'
import { enableLogging } from 'mobx-logger'
import { useStrict } from 'mobx'

import '!style!css!resolve-url!postcss-loader!sass!./styles/styles.scss'

import { Root } from './components/root'

enableLogging()
useStrict(true)

ReactDOM.render(<Root />, document.querySelector('.app-root'))
