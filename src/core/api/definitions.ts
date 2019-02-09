export interface Image {
  url: string;
}

export interface Author {
  displayName: string;
  id: string;
  image: Image;
  url: string;
}

export interface Blog {
  id: string;
}

export interface Replies {
  totalItems: string;
  selfLink: string;
}

export interface Post {
  author: Author;
  blog: Blog;
  content: string;
  etag: string;
  id: string;
  images: Image[];
  kind: string;
  labels: string[];
  published: string;
  replies: Replies;
  selfLink: string;
  title: string;
  updated: string;
  url: string;
}

export interface GetPostsResponse {
  items: Post[];
  nextPageToken: string;
}
