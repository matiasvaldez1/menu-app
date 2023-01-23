import Modal from "@components/ui/Modal";
import CreateShopInfo from "@components/user/CreateShopInfo";
import { useState } from "react";
import { trpc } from "src/utils/trpc";

export default function DashboardView() {
  const shop = trpc.dashboardRouter.getUserShopInfo.useQuery();
  const [showModalCreateShop, setShowModalCreateShop] = useState(Boolean(!shop.data?.name));

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
