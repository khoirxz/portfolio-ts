export type Data = {
  allPosts: AllPosts;
};

interface AllPosts {
  edges: Edge[];
}

interface Edge {
  node: Node;
}

interface Node {
  category: Category[];
  description: string;
  id: string;
  title: string;
  url: string;
}

interface Category {
  id: string;
  title: string;
}
