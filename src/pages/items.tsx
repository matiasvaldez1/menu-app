import ItemsView from "@components/user/Items";
import UserLayout from "@components/user/UserLayout";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { GetServerSidePropsContext } from "next";
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
  await ssg.items.getCategories.prefetch();
  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
  };
}

export default function Items() {
  return (
    <UserLayout title="Items">
      <ItemsView />
    </UserLayout>
  );
}
