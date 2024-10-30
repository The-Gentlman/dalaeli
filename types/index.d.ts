import { Icon } from "@heroicons/react";

type ProjectItemTechStack = {
  title: string;
  stacks: string[];
};

export type ProjectItemType = {
  title: string;
  iconUrl: string;
  iconDescription: string;
  screenShotUrl: string;
  screenShotDescription: string;
  type: string;
  techStacks: ProjectItemTechStack[];
  keywords: string[];
};

export type AboutPageContent = {
  title: string;
  description: string;
};

export type AboutPageType = {
  title: string;
  description: string;
  profileImageUrl: string;
  profileImageDescription: string;
  profileImageCaption: string;
  date: string;
  content: AboutPageContent[];
};
export type ContactPageType = {

  content: AboutPageContent[];
};

export type MenuType = {
  title: string;
  url: string;
  idx: number;
  icon: Icon;
};

export type FooterType = {
  // socials: SocialType[];
  copyright: string;
};

export type SocialType = {
  name: string;
  href: string;
  icon: Icon;
};

export type MetaType = {
  title: string;
  ogTitle: string;
  author: { name: string; };
  description: string;
  tags: Array<string>;
};

export type Services = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: string[];
};

export type PostType = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  imageUrl: string;
  imageDescription: string;
  category: string;
  tags: Array<string>;
  content: Services[];
};

export type HomePostType = {
  title?: string;
  body?: string;
};
