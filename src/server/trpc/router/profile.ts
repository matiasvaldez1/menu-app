import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const profileRouter = router({
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.foodShop.findUnique({ where: { id: input.id }, include: {categories: {include: {items: true}}} });
    }),
  getUserInfo: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.foodShop.findFirst({
      where: { userId: ctx.session?.user?.id },
    });
  }),
});
