export interface IProject {
  id?: string;
  stack: string[];
  livePageLink?: string;
  githubLink: string;
  frontend: boolean;
  backend: boolean;
  practice: boolean;
  theBest: boolean;
  role?: string;
  team?: boolean;
  imageUrl: string;
}
