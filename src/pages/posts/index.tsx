import { trpc } from "@/utils/trpc";
import { Post } from "@/utils/types/post.type";

type Props = {
  posts: Post[];
};

export default function Posts() {
  const utils = trpc.useContext();

  const { data: posts, isLoading } = trpc.post.list.useQuery({
    limit: 15,
  });

  const addPost = trpc.post.add.useMutation({
    onSuccess(input) {
      utils.post.list.invalidate();
    },
  });

  async function onSubmit() {
    addPost.mutate({
      title: "Hello2",
      content: "New post",
      published: true,
    });
  }

  if (isLoading) return <div>Loading</div>;
  return (
    <div className="px-10 min-h-screen py-10">
      <h1 className="mb-4">Post</h1>
      {posts &&
        posts?.map((post) => (
          <div
            key={post.id}
            className="bg-white text-black rounded-md w-40 p-4 font-light leading-4"
          >
            <div className="text-xl font-medium">{post.title}</div>
            <p>{post.content}</p>
          </div>
        ))}

      <button className="btn btn-primary" onClick={() => onSubmit()}>
        Hello
      </button>
    </div>
  );
}
