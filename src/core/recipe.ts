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
