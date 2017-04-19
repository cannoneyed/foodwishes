import React from 'react'
import ReactDOM from 'react-dom'
import { enableLogging } from 'mobx-logger'
import { useStrict } from 'mobx'
import map from 'lodash.map'

import '!style!css!resolve-url!postcss-loader!sass!./styles/styles.scss'

import { Root } from './components/root'

enableLogging()
useStrict(true)

const rootSelector = '.app-root'
const appRoot = document.querySelector(rootSelector)
ReactDOM.render(<Root />, appRoot)

function selectReact (selector) {
  const elem = document.querySelector(selector)
  return window.findReact(elem)
}

function findReact (dom) {
  for (let key in dom) {
    if (key.startsWith('__reactInternalInstance$')) {
      const compInternals = dom[key]._currentElement

      // Get the source code file and line numbers from the internals
      const { _source } = compInternals

      const compWrapper = compInternals._owner
      const comp = compWrapper._instance

      // Attach the source code file and line numbers to the instance
      comp._source = _source
      return comp
    }
  }
  return null
}

window.selectReact = selectReact
window.findReact = findReact
window.traverseReactDOM = function() {
  const rootElement = document.querySelector(rootSelector)
  const all = rootElement.getElementsByTagName('*')

  const instances = new WeakMap()
  const components = {}

  // Traverse over each element, selecting the React component instance for the element and
  // processing it into a map of react components
  map(all, element => {
    const component = findReact(element)
    const name = component.constructor.name
    const { props, _source } = component
    const { fileName } = _source

    if (instances.has(component)) {
      return
    }
    instances.set(component, true)

    components[fileName] = components[fileName] || []
    components[fileName].push({
      name,
      element,
      props,
      _source
    })
  })

  console.log('🐸', components)
}
