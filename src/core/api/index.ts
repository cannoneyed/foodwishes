import apisauce from 'apisauce';
import { API_KEY, BLOG_ID } from '../config';
import { processPosts, Recipe } from './process';
import { Post, GetPostsResponse } from './definitions';
export * from './definitions';

const baseURL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}`;
const api = apisauce.create({
  baseURL,
});

api.addRequestTransform(request => {
  request.params.key = API_KEY;
});

export interface LoadRecipesParameters {
  pageToken?: string;
}

export interface LoadRecipesByLabelsParameters {
  pageToken?: string;
  labels: string;
}

export interface LoadRecipesBySearchParameters {
  pageToken?: string;
  q: string;
}

export interface LoadRecipesResponse {
  recipes: Recipe[];
  nextPageToken?: string;
}

export async function loadRecipes(
  parameters?: LoadRecipesParameters
): Promise<LoadRecipesResponse> {
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

export async function loadRecipeById(id: string): Promise<Recipe | undefined> {
  const res = await api.get<Post>(`posts/${id}`, { fetchImages: true });

  const post = res.data;
  if (post) {
    const recipes = processPosts([post]);
    return recipes[0];
  }
}

export async function loadRecipesByLabels(
  parameters: LoadRecipesByLabelsParameters
): Promise<LoadRecipesResponse> {
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

export async function loadRecipesBySearch(
  parameters: LoadRecipesBySearchParameters
): Promise<LoadRecipesResponse> {
  const apiParameters = { ...parameters, maxResults: 20, fetchImages: true };
  const res = await api.get<GetPostsResponse>('posts/search', apiParameters);

  const posts = res.data ? res.data.items : [];
  const recipes = processPosts(posts);
  const nextPageToken = res.data ? res.data.nextPageToken : undefined;

  return {
    recipes,
    nextPageToken,
  };
}
