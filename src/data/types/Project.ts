import type { TechIconKey } from "@components/shared/icons/techs/TechIcons";

export type Project = {
  id: string;
  title: string;
  githubUrl: string;
  description: string;
  techs?: string;
  icon: TechIconKey;
};
