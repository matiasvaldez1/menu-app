import Button from "@components/ui/Button";
import Modal from "@components/ui/Modal";
import useTrigger from "@hooks/useTrigger";
import React from "react";
import CreateCategory from "../CreateCategory";

export default function ItemsView() {
  const [showModal, openModal, setShowModal] = useTrigger(false);

  return (
    <div>
      ItemsView
      <Modal
        closable={false}
        onVisibleChange={setShowModal}
        visible={showModal}
        trigger={
          <Button type="approve" className="h-fit">
            Create category
          </Button>
        }
        component={CreateCategory}
        componentProps={{
          onCategoryCreated: setShowModal,
        }}
      />
    </div>
  );
}
