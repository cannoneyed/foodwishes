import React, { Component, PropTypes } from 'react'
import moment from 'moment'

import styles from './styles.scss'
import processLabel from './processLabel'

const placeholder = require('src/img/placeholder.gif')

class RecipeThumnbnail extends Component {
  static propTypes = {
    recipe: PropTypes.object,
  }

  renderLabel = (label) => {
    const { text } = processLabel(label)

    const labelStyle = {
      color: '#FFF',
      // borderColor: '#FFF',
    }

    return (
      <span key={text} style={labelStyle} className={styles.label}>{text}</span>
    )
  }

  render() {
    const { image, labels, published, title } = this.props.recipe

    const publishedDate = new Date(published)
    let date = moment(publishedDate).format('MMM Do')
    // Only display the year if not the current year
    if (publishedDate.getYear() !== new Date().getYear()) {
      date += ', ' + moment(publishedDate).format('YYYY')
    }

    // Define the background image for the thumbnail container
    const backgroundImageStyle = {
      backgroundImage: `url('${image}'), url('${placeholder}')`,
    }

    return (
      <div className={styles.thumbnailContainer}>
        <div style={backgroundImageStyle} className={styles.backgroundImage} />
        <div className={styles.thumbnailContent}>
          <div className={styles.labelOverlay}>
            { labels.map(label => this.renderLabel(label))}
          </div>
          <div className={styles.titleOverlay}>
            { title }
          </div>
          <div className={styles.dateOverlay}>
            { date }
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeThumnbnail
