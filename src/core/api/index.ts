import apisauce from 'apisauce';
import { API_KEY, BLOG_ID } from '../config';
import { processPosts, Recipe } from './process';
import { GetPostsResponse } from './definitions';
export * from './definitions';

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}`;
const api = apisauce.create({
  baseURL,
});

api.addRequestTransform(request => {
  request.params.key = API_KEY;
});

export interface GetRecipesParameters {
  pageToken?: string;
}

export interface GetRecipesResponse {
  recipes: Recipe[];
  nextPageToken?: string;
}

export async function getRecipes(parameters?: GetRecipesParameters): Promise<GetRecipesResponse> {
  const apiParameters = { ...parameters, maxResults: 20, fetchImages: true };
  const res = await api.get<GetPostsResponse>('posts', apiParameters);

  const posts = res.data ? res.data.items : [];
  const recipes = processPosts(posts);
  const nextPageToken = res.data ? res.data.nextPageToken : undefined;

  return {
    recipes,
    nextPageToken,
  };
}
