import apisauce from 'apisauce'
import cheerio from 'cheerio'
import _ from 'lodash'

import json from './dummy'
import config from 'src/config'
const { apiKey, blogId } = config

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${blogId}`
const api = apisauce.create({
  baseURL,
})

api.addRequestTransform(request => {
  request.params.key = apiKey
  request.params.maxResults = 100
  request.params.fetchImages = true
})

export default function getPosts() {
  return Promise.resolve(json)
    .then(res => {
      return { data: res }
    })
  // return api.get('posts')
    .then(res => {
      return {
        recipes: processPosts(res.data.items.slice(0, 20)),
        nextPageToken: res.data.nextPageToken,
      }
    })
}

function processPosts(posts) {
  return posts
    .filter(post => {
      const hasLabels = post.labels
      const notBlogNews = !_.includes(post.labels, 'Blog News')
      const hasImages = post.images

      // Filter out all posts without labels, with blog news labels, or next up posts
      return _.every([
        hasImages,
        hasLabels,
        notBlogNews,
      ])
    })
    .map(post => {
      const content = processContent(post)

      // Subsequently filter out all posts that have been marked "shouldFilter" in processContent
      if (!content) {
        return undefined
      }

      return {
        rawContent: post.content,
        ...content,
        id: post.id,
        image: content.images[0],
        imageLow: content.imagesLow[0],
        labels: post.labels,
        published: new Date(post.published),
        replies: post.replies.totalItems,
        title: post.title,
        updated: new Date(post.updated),
      }
    })
    .filter(post => { // Filter out all posts that have been marked as toFilter above
      return post
    })
}

function processContent(post) {
  let { content } = post
  const $ = cheerio.load(post.content)

  // Select the images embedded in the content, then store the HD version of the image
  const imagesLow = $('img').map((i, e) => e.attribs.src).get()
  const images = imagesLow.map(src => src.replace('/s320', '/s1600'))

  // Select the link to the complete recipe
  const links = $('a').map((i, e) => e.attribs.href).get()
  const completeRecipeLink = links.find(link => {
    return link.indexOf('allrecipes.com') !== -1
  })

  // Find the embedded youtube video
  const $videoElement = $('iframe')

  const videoSrc = $videoElement.attr('src')

  // Split the text into two component parts, one above the embedded video and one below
  content = content.replace('<iframe', '___PLACEHOLDER___<iframe')

  // Split the text into before / after video parts
  const text = getText(content)
  const pieces = text.split('___PLACEHOLDER___')

  // If there's nothing before / after the video, return undefined (for filtering out later)
  if (isEmpty(pieces[0]) || isEmpty(pieces[1])) {
    return undefined
  }

  // Process the first piece of text (paragraphs about the recipe) - We want to join all newline-separated blocks of text together into separate paragrpahs.
  const beforeVideo = pieces[0]
  const description = processParagraphs(beforeVideo)

  // First we'll attempt to split the second half (directions) on the phrase 'View the complete recipe',
  // which shouldn't (along with subsequent content) be included in the directions list
  const split = /[vV]iew [tT]he [cC]omplete [rR]ecipe/
  const beforeCompleteRecipe = pieces[1].split(split)[0]

  // Now process the second half of the post, typically a list of ingredients / instructions.
  const directions = processParagraphs(beforeCompleteRecipe)

  return {
    completeRecipeLink,
    description,
    directions,
    images,
    imagesLow,
    videoSrc,
  }
}

function isEmpty(text) {
  return text === undefined || text.length === 0 || text.replace(/\s/g, '').length === 0
}

function getText(html) {
  // Add in a phantom newline for each </div> closing tag, since many individual
  // lines are formatted by creating separate divs
  html = html.replace(/<\/\s*?div\s*?>/gm, '\n\n')
  // Split out all <br /> tags with double newlines, for subsequent splitting into lines
  html = html.replace(/<br\s*\/?>/gm, '\n\n')
  // Remove all html tags
  return html.replace(/<(?:.|\n)*?>/gm, '')
}

function processParagraphs(lines) {
  if (!lines) {
    return []
  }

  return lines
    .replace(/&nbsp;/g, ' ')
    .split('\n')
    .reduce((mem, line) => {
      // Don't add text to the current line if we're
      if (line === '') {
        mem.inTextBlock = false
        return mem
      }

      // Otherwise, we have either have a new text block beginning
      if (!mem.inTextBlock) {
        mem.lines.push(line)
        mem.inTextBlock = true
      } else { // Or a continuation of the previous line
        const n = mem.lines.length === 0 ? 0 : mem.lines.length - 1
        mem.lines[n] = (mem.lines[n] || '') + ' ' + line
      }
      return mem
    }, { lines: [], inTextBlock: true }).lines
}
