import { processPosts } from './process'

import api from 'src/core/api'

api.addRequestTransform(request => {
  request.params.maxResults = 20
  request.params.fetchImages = true
})

export default function getRecipes() {
  return api.get('posts')
    .then(res => {
      return {
        recipes: processPosts(res.data.items),
        nextPageToken: res.data.nextPageToken,
      }
    })
}
