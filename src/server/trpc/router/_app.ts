import { router } from "../trpc";
import { authRouter } from "./auth";
import { dashboardRouter } from "./dashboard";

export const appRouter = router({
  dashboardRouter: dashboardRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
