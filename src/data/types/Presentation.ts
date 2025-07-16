export type Presentation = {
  name: string;
  title: string;
  avatar: string;
  paragraphs: (string | { label: string; href: string })[];
};
