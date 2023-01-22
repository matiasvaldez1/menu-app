import { AppContext, type AppType } from "next/app";
import { type Session } from "next-auth";
import { getSession, SessionProvider } from "next-auth/react";
import { supportedRoots, redirect, publicRoutes, publicRoots } from "../utils/lib";
import { NextPageContext, NextComponentType } from "next";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

MyApp.getInitialProps = async function (context: Exclude<AppContext, Session>) {
  const { ctx, router } = context;
  const user = await getSession(ctx);
  const isPrivateRoute = supportedRoots.some((root) =>
    router.pathname.startsWith(root)
  );
  const isPublicRoute = publicRoots.some((root) =>
    router.pathname.startsWith(root)
  );
  const userExists = Boolean(user?.user?.id);

  if(isPublicRoute) return context
  if (userExists && !isPrivateRoute && !isPublicRoute) return redirect(context, "/dashboard");
  if (!userExists && isPrivateRoute && !isPublicRoute) return redirect(context, "/");

  return context;
};

export default trpc.withTRPC(MyApp);
