/**
 * Represents a project.
 * @property {string} id - Unique identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string} githubUrl - The URL of the project's GitHub repository.
 * @property {string} description - A brief description of the project.
 * @property {string} techs - (Optional) A comma-separated list of technologies used in the project.
 * @property {string} icon - The URL or path to the project's image.
 */
export type Project = {
  id: string;
  title: string;
  githubUrl: string;
  description: string;
  techs?: string;
  icon: string;
};
