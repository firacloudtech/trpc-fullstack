export type Post = {
  id?: string;
  title: string;
  content: string;
  published: boolean;
  author?: User;
  authorId?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updateAt: string;
  posts: Post[];
};
