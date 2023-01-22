import { router } from "../trpc";
import { authRouter } from "./auth";
import { dashboardRouter } from "./dashboard";
import { profileRouter } from "./profile";

export const appRouter = router({
  dashboardRouter: dashboardRouter,
  profileRouter: profileRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
