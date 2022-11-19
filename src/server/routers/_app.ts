import { helloProcedure } from "../hello";
import { router } from "../trpc";

export const appRouter = router({
  hello: helloProcedure,
});

export type AppRouter = typeof appRouter;
