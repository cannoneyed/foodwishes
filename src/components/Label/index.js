import React, { Component, PropTypes } from 'react'

import styles from './styles.scss'
import processLabel from './processLabel'

class RecipeThumnbnail extends Component {
  static propTypes = {
    label: PropTypes.string,
  }

  render() {
    const { label } = this.props
    const { text } = processLabel(label)

    return (
      <span key={text} className={styles.label}>{text}</span>
    )
  }
}

export default RecipeThumnbnail
