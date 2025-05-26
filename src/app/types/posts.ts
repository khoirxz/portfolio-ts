export type Data = {
  allPosts: AllPosts;
};

interface AllPosts {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  category: Category[];
  description: string;
  id: string;
  thumbnail: Thumbnail;
  title: string;
  url: string;
  slug: string;
}

interface Category {
  id: string;
  title: string;
}

interface Thumbnail {
  src: string;
  title: string;
}
