export const API_KEY = process.env.REACT_APP_API_KEY as string;
export const BLOG_ID = process.env.REACT_APP_BLOG_ID as string;

// We need to be able to serve the static assets correctly from localhost,
// foodwishes.app, or cannoneyed.com/foodwishes.
export const BASENAME = window.location.origin.includes('cannoneyed') ? 'foodwishes' : '';
