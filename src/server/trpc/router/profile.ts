import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const profileRouter = router({
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.foodShop.findUnique({ where: { id: input.id } });
    }),
});
