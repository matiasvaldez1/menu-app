import UserLayout from "@components/user/UserLayout";
import DashboardView from "@components/user/Dashboard";
import { trpc } from "src/utils/trpc";


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
