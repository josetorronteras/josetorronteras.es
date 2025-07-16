/**
 * Represents a blog post.
 * @property {string} title - The title of the post.
 * @property {string} slug - The unique slug for the post URL.
 * @property {string} excerpt - A short summary of the post.
 * @property {string} image - (Optional) The main image URL for the post.
 * @property {string} imageAlt - (Optional) Alt text for the image.
 */
export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};
