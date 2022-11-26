import { helloRouter } from "@/server/routers/hello";
import { userRouter } from "@/server/routers/users";
import { router } from "../trpc";

export const appRouter = router({
  hello: helloRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
