import React, { Component, PropTypes } from 'react'
import { inject, observer } from 'mobx-react'

import Loading from '../Loading'
import Recipe from './Recipe'

@inject('recipeStore') @observer
class RecipeContainer extends Component { // eslint-disable-line
  static propTypes = {
    params: PropTypes.object,
    recipeStore: PropTypes.object,
  }

  componentWillMount() {
    const { recipeStore, params: { id } } = this.props

    // Check to see if the recipe exists, if not, load the recipe
    const recipe = recipeStore.getRecipe(id)
    if (!recipe) {
      recipeStore.loadRecipe(id)
    }
  }

  render() {
    const { recipeStore, params: { id } } = this.props
    const recipe = recipeStore.getRecipe(id)

    const { isLoaded } = recipe

    if (isLoaded) {
      return <Recipe recipe={recipe} />
    } else {
      return <Loading />
    }
  }
}

export default RecipeContainer
