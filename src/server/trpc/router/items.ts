import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const itemsRouter = router({
  createItem: publicProcedure
    .input(
      z.object({
        title: z.string(),
        logo: z.string(),
        description: z.string(),
        price: z.number(),
        categoriesId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const foodShop = await ctx.prisma.foodShop.findFirst({
        where: { userId: ctx.session?.user?.id },
      });
      const response = await ctx.prisma.item.create({
        data: {
          ...input,
          foodShopId: foodShop!.id
        },
      });
      return response.id;
    }),
  createCategory: publicProcedure
    .input(z.object({ name: z.string(), logo: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const foodShop = await ctx.prisma.foodShop.findFirst({
        where: { userId: ctx.session?.user?.id },
      });
      const response = await ctx.prisma.categories.create({
        data: {
          title: input.name,
          logo: input.logo,
          foodShopId: foodShop!.id,
        },
      });
      return response.id;
    }),
  getCategories: publicProcedure.query(async ({ ctx }) => {
    const foodShop = await ctx.prisma.foodShop.findFirst({
      where: { userId: ctx.session?.user?.id },
    });
    return await ctx.prisma.categories.findMany({
      where: { foodShopId: foodShop!.id },
    });
  }),
  getItems: publicProcedure.query(async ({ ctx }) => {
    const foodShop = await ctx.prisma.foodShop.findFirst({
      where: { userId: ctx.session?.user?.id },
    });
    return await ctx.prisma.item.findMany({
      where: { foodShopId: foodShop?.id },
    });
  }),
});
