import Modal from "@components/ui/Modal";
import CreateShopInfo from "@components/user/CreateShopInfo";
import { useEffect, useState } from "react";

export default function DashboardView() {
  const [createShop, setCreateShop] = useState(false);
  useEffect(() => {
    setCreateShop(true);
  }, []);
  return (
    <div>
      DashboardView
      <div>
        <Modal
          forwardControl
          visible={createShop}
          onVisibleChange={setCreateShop}
          trigger={<div>{""}</div>}
          component={CreateShopInfo}
        />
      </div>
    </div>
  );
}
