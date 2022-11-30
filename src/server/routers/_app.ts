import { helloRouter } from "@/server/routers/hello";
import { postRouter } from "@/server/routers/posts";
import { userRouter } from "@/server/routers/users";
import { router } from "../trpc";

export const appRouter = router({
  hello: helloRouter,
  user: userRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
