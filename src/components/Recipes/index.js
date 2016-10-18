import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'

import RecipeThumnbnail from '../RecipeThumbnail'
import styles from './styles.scss'

@inject('recipeStore') @observer
class Recipes extends Component {
  static propTypes = {
    recipeStore: PropTypes.object,
  }

  render() {
    const { recipeStore } = this.props
    const { recipes } = recipeStore

    return (
      <div className={styles.recipesContainer}>
        { recipes.map(recipe => {
          return <RecipeThumnbnail key={recipe.id} recipe={recipe} />
        })}
      </div>
    )
  }
}

export default Recipes
