import UserLayout from "@components/user/UserLayout";
import DashboardView from "@components/user/Dashboard";
import { GetServerSidePropsContext } from "next";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { createContext } from "src/server/trpc/context";
import { appRouter } from "src/server/trpc/router/_app";
import superjson from "superjson";

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ profile: string }>
) {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: await createContext({
      req: context.req as any,
      res: context.res as any,
    }),
    transformer: superjson,
  });
  await ssg.dashboard.getUserShopInfo.prefetch();
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
}


export default function Dashboard() {
  //const session = trpc.auth.getSession.useQuery()
  return (
    <>
      <UserLayout title="Dashboard">
        <DashboardView />
      </UserLayout>
    </>
  );
}
