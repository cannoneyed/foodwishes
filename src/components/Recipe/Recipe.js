import React, { Component, PropTypes } from 'react'
import mobx from 'mobx'
import moment from 'moment'

import Icon from '../Icon'

import styles from './styles.scss'

const placeholder = require('src/img/placeholder.gif')

class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object,
  }

  renderBackgroundImage = () => {
    const { image } = this.props.recipe
    // Define the background image for the thumbnail container
    const backgroundImageStyle = {
      backgroundImage: `url('${image}'), url('${placeholder}')`,
    }

    return (
      <div style={backgroundImageStyle} className={styles.headerImage} />
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

  renderDescription = () => {
    const { description } = this.props.recipe
    return (
      <div className={styles.recipeDescription}>
        { description.map((line, index) => (
          <p key={index}>{ line }</p>
        )) }
      </div>
    )
  }

  renderAlternateImage = () => {
    const { images } = this.props.recipe

    // Only render the alternate image if the images array contains more than one
    if (images.length <= 1) {
      return null
    }

    const alternateImage = images[1]

    // Define the background image for the thumbnail container
    const imageStyle = {
      backgroundImage: `url('${alternateImage}'), url('${placeholder}')`,
    }
    return (
      <div style={imageStyle} className={styles.alternateImage} >
        <div className={styles.playButtonOverlay}>
          <Icon type="play" size={100} style={{ fillOpacity: 0.7 }} />
        </div>
      </div>
    )
  }

  renderDivider = () => {
    return (
      <div className={styles.divider} />
    )
  }

  renderDirections = () => {
    const { directions } = this.props.recipe

    return (
      <div className={styles.recipeDirections}>
        <ul>
          { directions.map((line, index) => (
            <li key={index}>{ line }</li>
          )) }
        </ul>
      </div>
    )
  }

  renderLabels = () => {

  }

  render() {
    const { recipe } = this.props
    const { title } = recipe

    console.log(mobx.toJS(recipe).title)

    return (
      <div className={styles.recipeContainer}>
        <div className={styles.recipeHeader}>
          { this.renderBackgroundImage() }
          <div className={styles.titleOverlay}>
            { title }
          </div>
          <div className={styles.dateOverlay}>
            { this.renderDate() }
          </div>
          <div className={styles.playButtonOverlay}>
            <Icon type="play" size={100} style={{ fillOpacity: 0.5 }} />
          </div>
        </div>
        { this.renderLabels() }
        { this.renderDescription() }
        { this.renderAlternateImage() }
        { this.renderDivider() }
        { this.renderDirections() }
        <div className={styles.bottom} />
      </div>
    )
  }
}

export default Recipe
