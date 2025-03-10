export interface POSTPROPS {
  allPosts: AllPosts;
}

export interface AllPosts {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  category: Category[];
  content: Content;
  description: string;
  id: string;
  slug: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
}

export interface Category {
  id: string;
  title: string;
}

export interface Content {
  json: Json;
}

export interface Json {
  content: Content2[];
  type: string;
}

export interface Content2 {
  attrs: Attrs;
  content: Content3[];
  type: string;
}

export interface Attrs {
  id: string;
  textAlign: string;
}

export interface Content3 {
  text?: string;
  type: string;
  marks?: Mark[];
}

export interface Mark {
  type: string;
}

export interface Thumbnail {
  src: string;
  title: string;
  width: number;
}
