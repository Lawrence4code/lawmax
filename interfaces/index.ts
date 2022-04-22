// separate this into different files if 100 lines crossed
export type BlogProps = {
  title: String;
  summary: String;
  slug: String;
};

export type NavItemProps = {
  href: String | any;
  text: String;
};

export type ContainerProps = {
  children: React.ReactNode;
};


export type ProjectCardProps = {
  project: Project;
};

export type Project = {
  title: String;
  description: String;
  image: CloudinaryImageType;
  tags: [Tag];
};

export type CloudinaryImageType = {
  width: string;
  height: string;
  url: string;
};

export type Tag = {
  name: String;
  color: String;
  image?: String;
  key?: String | any;
};


export type ProductCardProps = {
  title: String;
  description: String;
  tags: [Tag];
  githubLink: string;
  link: string;
  isFeatured: Boolean;
};


export type TagProps = {
  tag: Tag;
};
