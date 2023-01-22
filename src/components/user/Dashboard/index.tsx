import Modal from "@components/ui/Modal";
import Spin from "@components/ui/Spin";
import CreateShopInfo from "@components/user/CreateShopInfo";
import { useEffect, useState } from "react";
import { trpc } from "src/utils/trpc";

export default function DashboardView() {
  const shop = trpc.dashboardRouter.getUserShopInfo.useQuery();
  const [createShop, setCreateShop] = useState(false);

  useEffect(() => {
    /* if(shop.data?.name) {
      setCreateShop(false)
    } else {
      setCreateShop(true)
    } */
    //setCreateShop(Boolean(!shop.data?.name));
  }, []);

  return (
    <div>
      DashboardView
      <Modal
        forwardControl
        visible={createShop}
        onVisibleChange={setCreateShop}
        closable={false}
        trigger={<div>{""}</div>}
        component={CreateShopInfo}
        componentProps={{
          isUserCreated: setCreateShop,
        }}
      />
    </div>
  );
}
