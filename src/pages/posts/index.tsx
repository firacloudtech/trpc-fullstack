import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";

export default function Posts({ posts }) {
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
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
  });

  console.timeLog("props", posts);
  return {
    props: { posts },
  };
};
