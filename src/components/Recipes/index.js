import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'

import RecipeThumnbnail from '../RecipeThumbnail'
import styles from './styles.scss'

@inject('recipeStore') @observer
class Recipes extends Component {
  static propTypes = {
    recipeStore: PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      selectedRecipe: null,
    }
  }

  selectRecipe = (id) => {
    this.setState({ selectedRecipe: id })
  }

  render() {
    const { selectedRecipe } = this.state
    const { recipeStore } = this.props
    const { recipes } = recipeStore

    return (
      <div className={styles.recipesContainer}>
        { recipes.map(recipe => {
          return (
            <RecipeThumnbnail
              key={recipe.id}
              selected={recipe.id === selectedRecipe}
              selectRecipe={this.selectRecipe}
              recipe={recipe}
            />
          )
        })}
      </div>
    )
  }
}

export default Recipes
