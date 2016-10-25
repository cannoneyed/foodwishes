import apisauce from 'apisauce'
import config from 'src/config'
const { apiKey, blogId } = config

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogId}`
const api = apisauce.create({
  baseURL,
})

api.addRequestTransform(request => {
  request.params.key = apiKey
})

export default api
