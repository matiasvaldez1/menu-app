import Modal from "@components/ui/Modal";
import Spin from "@components/ui/Spin";
import CreateShopInfo from "@components/user/CreateShopInfo";
import { useEffect, useState } from "react";
import { trpc } from "src/utils/trpc";

export default function DashboardView() {
  const shop = trpc.dashboardRouter.getUserShopInfo.useQuery();
  const [showModalCreateShop, setShowModalCreateShop] = useState(false);

  useEffect(() => {
    setShowModalCreateShop(Boolean(!shop.data?.name));
  }, [shop.data]);

  return (
    <div>
      DashboardView
      <Modal
        forwardControl
        visible={showModalCreateShop}
        onVisibleChange={setShowModalCreateShop}
        closable={false}
        trigger={<div>{""}</div>}
        component={CreateShopInfo}
        componentProps={{
          showModalCreateShop: setShowModalCreateShop,
        }}
      />
    </div>
  );
}
