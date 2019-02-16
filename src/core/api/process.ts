import { every, includes, unescape } from 'lodash';
import * as cheerio from 'cheerio';
import { Post } from '../api';

export interface Recipe {
  completeRecipeLink?: string;
  description: string[];
  directions: string[];
  images: string[];
  imagesLow: string[];
  videoSrc: string;
  rawContent: string;
  id: string;
  image: string;
  imageLow: string;
  labels: string[];
  published: Date;
  replies: number;
  title: string;
  updated: Date;
}

export function deserializeRecipe(parsed: any): Recipe {
  return {
    completeRecipeLink: parsed.completeRecipeLink,
    description: parsed.description,
    directions: parsed.directions,
    images: parsed.images,
    imagesLow: parsed.imagesLow,
    videoSrc: parsed.videoSrc,
    rawContent: parsed.rawContent,
    id: parsed.id,
    image: parsed.image,
    imageLow: parsed.imageLow,
    labels: parsed.labels,
    published: new Date(parsed.published),
    replies: parsed.replies,
    title: parsed.title,
    updated: new Date(parsed.updated),
  };
}

export function processPosts(posts: Post[]): Recipe[] {
  const recipes: (Recipe | undefined)[] = posts
    .filter(post => {
      const hasLabels = !!post.labels;
      const notBlogNews = !includes(post.labels, 'Blog News');

      // Filter out all posts without labels, with blog news labels, or next up posts
      return every([hasLabels, notBlogNews]);
    })
    .map(post => {
      const content = processContent(post);

      // Subsequently filter out all posts that have been marked "shouldFilter" in processContent
      if (!content) {
        return undefined;
      }

      return {
        ...content,
        rawContent: post.content,
        id: post.id,
        image: content.images[0],
        imageLow: content.imagesLow[0],
        labels: post.labels,
        published: new Date(post.published),
        replies: Number(post.replies.totalItems),
        title: post.title,
        updated: new Date(post.updated),
      };
    });

  const filtered = recipes.filter(recipe => {
    // Filter out all posts that have been marked as toFilter above
    return recipe;
  }) as Recipe[];

  return filtered;
}

function processContent(post: Post) {
  let { content } = post;
  const $ = cheerio.load(post.content);

  // Select the images embedded in the content, then store the HD version of the image
  const imagesLow: string[] = $('img')
    .map((_, element) => element.attribs.src)
    .get();
  const images = imagesLow.map(src => src.replace('/s320', '/s1600'));

  // Select the link to the complete recipe
  const links: string[] = $('a')
    .map((_, element) => element.attribs.href)
    .get();
  const completeRecipeLink = links.find(link => {
    return link.indexOf('allrecipes.com') !== -1;
  });

  // Find the embedded youtube video
  const $videoElement = $('iframe');

  const videoSrc = $videoElement.attr('src');

  // Split the text into two component parts, one above the embedded video and one below
  content = content.replace('<iframe', '___PLACEHOLDER___<iframe');

  // Split the text into before / after video parts
  const text = getText(content);
  const pieces = text.split('___PLACEHOLDER___');

  // If there's nothing before / after the video, return undefined (for filtering out later)
  if (isEmpty(pieces[0]) || isEmpty(pieces[1])) {
    return undefined;
  }

  // Process the first piece of text (paragraphs about the recipe) - We want to join all newline-separated blocks of text together into separate paragrpahs.
  const beforeVideo = pieces[0];
  const description = processParagraphs(beforeVideo);

  // First we'll attempt to split the second half (directions) on the phrase 'View the complete recipe',
  // which shouldn't (along with subsequent content) be included in the directions list
  const split = /[vV]iew [tT]he [cC]omplete [rR]ecipe/;
  const beforeCompleteRecipe = pieces[1].split(split)[0];

  // Now process the second half of the post, typically a list of ingredients / instructions.
  const directions = processParagraphs(beforeCompleteRecipe);

  return {
    completeRecipeLink,
    description,
    directions,
    images,
    imagesLow,
    videoSrc,
  };
}

function isEmpty(text: string | undefined) {
  return text === undefined || text.length === 0 || text.replace(/\s/g, '').length === 0;
}

function getText(html: string) {
  // Add in a phantom newline for each </div> closing tag, since many individual
  // lines are formatted by creating separate divs
  html = html.replace(/<\/\s*?div\s*?>/gm, '\n\n');
  // Split out all <br /> tags with double newlines, for subsequent splitting into lines
  html = html.replace(/<br\s*\/?>/gm, '\n\n');
  // Remove all html tags
  return html.replace(/<(?:.|\n)*?>/gm, '');
}

function processParagraphs(lines: string) {
  if (!lines) {
    return [];
  }

  const reduced = lines
    .split('\n')
    .map(line => unescape(line))
    .reduce(
      (mem: { lines: string[]; inTextBlock: boolean }, line) => {
        // Don't add text to the current line if we're
        if (line === '') {
          mem.inTextBlock = false;
          return mem;
        }

        // Otherwise, we have either have a new text block beginning
        if (!mem.inTextBlock) {
          mem.lines.push(line);
          mem.inTextBlock = true;
        } else {
          // Or a continuation of the previous line
          const n = mem.lines.length === 0 ? 0 : mem.lines.length - 1;
          mem.lines[n] = (mem.lines[n] || '') + ' ' + line;
        }
        return mem;
      },
      { lines: [], inTextBlock: true }
    );

  return reduced.lines
    .map(line => line.trim())
    .filter(line => {
      // Remove all lines with no alphanumeric characters.
      return line.replace(/[^a-zA-Z0-9]+/, '').length > 0;
    });
}
