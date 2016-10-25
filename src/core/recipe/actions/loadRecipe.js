import { processPosts } from './process'

import api from 'src/core/api'

api.addRequestTransform(request => {
  request.params.fetchImages = true
})

export default function getRecipe(id) {
  return api.get(`posts/${id}`)
    .then(res => {
      const processed = processPosts([ res.data ])
      return processed[0]
    })
}
