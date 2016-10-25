import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import classnames from 'classnames'

import styles from './styles.scss'

import Label from '../Label'

const placeholder = require('src/img/placeholder.gif')

class RecipeThumnbnail extends Component {
  static propTypes = {
    recipe: PropTypes.object,
    selectRecipe: PropTypes.func.isRequired,
    selected: PropTypes.bool,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  onClick = () => {
    const { selected, selectRecipe } = this.props
    const { id } = this.props.recipe
    const { router } = this.context

    if (selected) {
      router.push(`/recipe/${id}`)
    } else {
      selectRecipe(id)
    }
  }

  renderBackgroundImage = () => {
    const { image } = this.props.recipe
    // Define the background image for the thumbnail container
    const backgroundImageStyle = {
      backgroundImage: `url('${image}'), url('${placeholder}')`,
    }

    const className = classnames(styles.backgroundImage, {
      [styles.isSelected]: this.props.selected,
    })

    return (
      <div style={backgroundImageStyle} className={className} />
    )
  }

  renderDate = () => {
    const { published } = this.props.recipe

    const publishedDate = new Date(published)
    let date = moment(publishedDate).format('MMM Do')
    // Only display the year if not the current year
    if (publishedDate.getYear() !== new Date().getYear()) {
      date += ', ' + moment(publishedDate).format('YYYY')
    }

    return date
  }

  render() {
    const { labels, title } = this.props.recipe

    return (
      <div className={styles.thumbnailContainer} onClick={this.onClick} >
        { this.renderBackgroundImage() }
        <div className={styles.thumbnailContent}>
          <div className={styles.labelOverlay}>
            { labels.map((label, index) => (
              <Label key={index} label={label} />
            )) }
          </div>
          <div className={styles.titleOverlay}>
            { title }
          </div>
          <div className={styles.dateOverlay}>
            { this.renderDate() }
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeThumnbnail
