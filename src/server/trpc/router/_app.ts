import { router } from "../trpc";
import { authRouter } from "./auth";
import { dashboardRouter } from "./dashboard";
import { itemsRouter } from "./items";
import { profileRouter } from "./profile";

export const appRouter = router({
  dashboard: dashboardRouter,
  items: itemsRouter,
  profileRouter: profileRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
