import { router } from "@/server/trpc";
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import prisma from "../../lib/prisma";
const t = initTRPC.create();

export const postRouter = router({
  list: t.procedure
    .input(
      z.object({
        limit: z.number().min(1).max(20).nullish(),
        cursor: z.string().nullish(),
      })
    )
    .query(async ({ input }) => {
      const limit = input.limit ?? 50;
      const cursor = input.cursor;

      const posts = await prisma.post.findMany({
        take: limit + 1,
        where: {},
        cursor: cursor ? { id: cursor } : undefined,
      });

      return posts.reverse();
    }),
  add: t.procedure
    .input(
      z.object({
        title: z.string().min(1).max(32),
        content: z.string().min(1),
        published: z.boolean(),
      })
    )
    .mutation(async ({ input }) => {
      const post = await prisma.post.create({
        data: input,
      });
    }),
});
