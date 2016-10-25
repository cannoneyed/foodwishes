import {
  action,
  extendObservable,
  observable,
  runInAction,
} from 'mobx'
import { loadRecipe } from './actions'

class Recipe {
  @observable isLoading = false
  @observable isLoaded = false
  @observable fetchedAt = null
  @observable error = null

  constructor(id, data) {
    this.id = id
    if (data) {
      extendObservable(this, data)
    }
  }

  @action beginLoading = () => {
    this.isLoading = true
    this.error = null
  }

  @action loadSuccess = () => {
    this.isLoading = false
    this.isLoaded = true
    this.error = null
    this.fetchedAt = new Date()
  }

  @action loadError = (err) => {
    this.error = err
    this.isLoading = false
    this.isLoaded = false
  }

  @action loadData = (data) => {
    extendObservable(this, data)
    this.isLoaded = true
    this.isLoading = false
    this.fetchedAt = new Date()
  }

  @action load() {
    this.beginLoading()

    return loadRecipe(this.id)
      .then(action('load recipe success', recipe => {
        this.loadSuccess()
        extendObservable(this, recipe)
      }))
      .catch(action('load recipe error', err => {
        this.loadError(err)
        throw err
      }))
  }
}

export default Recipe
