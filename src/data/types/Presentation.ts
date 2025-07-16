/**
 * Represents a user's presentation data.
 * @property {string} name - The user's name.
 * @property {string} title - The user's job title or role.
 * @property {string} avatar - The URL of the user's avatar image.
 * @property {Array<string>} paragraphs - An array of paragraphs describing the user.
 */
export type Presentation = {
  name: string;
  title: string;
  avatar: string;
  paragraphs: string[];
};
