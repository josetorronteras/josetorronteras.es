/**
 * Represents a project.
 * @property {string} title - The title of the project.
 * @property {string} slug - The unique slug for the project URL.
 * @property {string} description - A brief description of the project.
 * @property {string[]} [techs] - (Optional) An array of technologies used in the project.
 */
export type Project = {
  title: string;
  slug: string;
  description: string;
  techs?: string[];
};
