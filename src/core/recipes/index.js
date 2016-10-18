import { action, computed, observable, map, toJS } from 'mobx'
import { getPosts } from './actions'

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

  @action addRecipesToList = (recipes) => {
    recipes = recipes.map(recipe => {
      const { id } = recipe
      this.recipeMap[id] = recipe
      return this.recipeMap[id]
    })

    this.recipeList = this.recipeList.concat(recipes)
  }

  @action loadInitialData = () => {
    this.isLoading = true
    getPosts()
      .then((response) => {
        this.addRecipesToList(response.recipes)
        this.nextPageToken = response.nextPageToken
        this.isLoading = false
        console.log(this.recipeList.map(toJS))
      })
  }
}

const recipeStore = new RecipeStore()

export default recipeStore
export { RecipeStore }
