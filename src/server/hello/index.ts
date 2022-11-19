import { z } from "zod";
import { procedure } from "../trpc";

export const helloProcedure = procedure
  .input(
    z.object({
      text: z.string(),
    })
  )
  .query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  });
