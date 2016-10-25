import { action, computed, observable, map } from 'mobx'
import { loadRecipes } from '../recipe/actions'

import Recipe from '../recipe'

class RecipeStore {
  // The main store for loaded recipes (by id)
  @observable recipeMap = map({})

  // The main page list of recipe ids
  @observable recipeList = []

  @observable nextPageToken = null
  @observable isLoading = false

  @computed get recipes() {
    return this.recipeList.map(recipe => recipe)
  }

  @observable getRecipe = (id) => {
    if (this.recipeMap.has(id)) {
      return this.recipeMap.get(id)
    } else {
      return null
    }
  }

  @action loadRecipe = (id) => {
    const recipe = new Recipe(id)
    this.recipeMap.set(id, recipe)
    recipe.load()
    return recipe
  }

  @action addRecipesToList = (recipes) => {
    recipes = recipes.map(recipe => {
      const { id } = recipe
      this.recipeMap.set(id, recipe)
      return this.recipeMap.get(id)
    })

    this.recipeList = this.recipeList.concat(recipes)
  }

  @action loadInitialData = () => {
    this.isLoading = true
    loadRecipes()
      .then(action('load recipes success', response => {
        const recipes = response.recipes.map(data => {
          const recipe = new Recipe(data.id)
          recipe.loadData(data)
          return recipe
        })

        this.addRecipesToList(recipes)
        this.nextPageToken = response.nextPageToken
        this.isLoading = false
      }))
  }
}

const recipeStore = new RecipeStore()

export default recipeStore
export { RecipeStore }
