/**
 * Represents a career entry, including role, companies, dates, and related app.
 * @property {string} role - The role or position held.
 * @property {Company[]} companies - The list of companies associated with this career entry.
 * @property {string} startDate - The start date of the career period (ISO format).
 * @property {string} endDate - The end date of the career period (ISO format).
 * @property {boolean} current - Indicates if this is the current position.
 * @property {App} app - The application or project related to this career entry.
 */
export type Career = {
  role: string;
  companies: Company[];
  startDate: string;
  endDate: string;
  current: boolean;
  app: App;
};

/**
 * Represents a company with a name and a website link.
 *
 * @property name - The name of the company.
 * @property link - The URL to the company's website.
 */
export type Company = {
  name: string;
  link: string;
};

/**
 * Represents an application or project related to a career entry.
 *
 * @property name - The name of the application or project.
 * @property link - The URL to the application's website or repository.
 * @property description - A brief description of the application or project.
 * @property img - The URL to an image representing the application or project.
 */
export type App = {
  name: string;
  link: string;
  description: string;
  img: string;
};
