import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const dashboardRouter = router({
  createShopUser: publicProcedure
    .input(z.object({ name: z.string(), logo: z.string() }))
    .mutation(async (req) => {
      const userInfo = req.input;
      //create qr
      const response = await req.ctx.prisma.foodShop.create({
        data: {
          name: userInfo.name,
          logo: userInfo.logo,
          qr: "",
          userId: req.ctx.session?.user?.id as string,
        },
      });
      return response.id;
    }),
  getUserShopInfo: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.foodShop.findFirst({
      where: { userId: ctx.session?.user?.id },
    });
  }),
});
