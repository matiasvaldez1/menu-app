import ItemsView from "@components/user/Items";
import UserLayout from "@components/user/UserLayout";

export default function Items() {
  return (
    <UserLayout title="Items">
      <ItemsView />
    </UserLayout>
  );
}
