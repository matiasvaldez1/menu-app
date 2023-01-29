import Modal from "@components/ui/Modal";
import CreateShopInfo from "@components/user/Dashboard/CreateShopInfo";
import { useEffect, useState } from "react";
import { trpc } from "src/utils/trpc";

export default function DashboardView() {
  const {data, refetch} = trpc.dashboard.getUserShopInfo.useQuery();
  const [showModalCreateShop, setShowModalCreateShop] = useState(false);

  useEffect(() => {
    if (!data?.name && typeof window !== "undefined") {
      setShowModalCreateShop(true);
    }
  }, [data]);

  return (
    <div>
      Dashboard view
      <Modal
        forwardControl
        visible={showModalCreateShop}
        onVisibleChange={setShowModalCreateShop}
        closable={false}
        trigger={<div>{""}</div>}
        component={CreateShopInfo}
        componentProps={{
          showModalCreateShop: setShowModalCreateShop,
          refetchUserInfo: refetch
        }}
      />
    </div>
  );
}
