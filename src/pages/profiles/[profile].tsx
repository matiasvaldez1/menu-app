import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { createContext } from "src/server/trpc/context";
import { appRouter } from "src/server/trpc/router/_app";
import superjson from "superjson";
import { trpc } from "src/utils/trpc";

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
  const id = context.params?.profile as string;
  await ssg.profileRouter.byId.prefetch({ id });
  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
  };
}
export default function Profile(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const {data} = trpc.profileRouter.byId.useQuery({id: props.id})
  return <div>Profile</div>;
}
