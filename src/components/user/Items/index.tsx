import Button from "@components/ui/Button";
import Modal from "@components/ui/Modal";
import useTrigger from "@hooks/useTrigger";
import CategoriesDisplay from "./CategoriesDisplay";
import CreateCategory from "./CreateCategory";
import CreateItem from "./CreateItem";
import ItemsDisplay from "./ItemsDisplay";
import { motion } from "framer-motion";
import ToggleButton from "@components/ui/ToggleButton";

export default function ItemsView() {
  const [showCategoryModal, openCategoryModal, setCategoryodal] =
    useTrigger(false);
  const [showItemModal, openItemModal, setItemModal] = useTrigger(false);
  const [show, toggleShow, setShow] = useTrigger(false);

  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <div className="flex space-x-4">
          <Modal
            closable
            onVisibleChange={setCategoryodal}
            visible={showCategoryModal}
            trigger={
              <Button type="approve" className="h-fit">
                Crear categoria
              </Button>
            }
            component={CreateCategory}
            componentProps={{
              onCategoryCreated: setCategoryodal,
            }}
          />
          <Modal
            closable
            onVisibleChange={setItemModal}
            visible={showItemModal}
            trigger={
              <Button type="approve" className="h-fit">
                Crear item
              </Button>
            }
            component={CreateItem}
            componentProps={{
              onItemCreated: setItemModal,
            }}
          />
        </div>
        <ToggleButton show={show} onClick={toggleShow} />
      </div>
      {show ? <ItemsDisplay /> : <CategoriesDisplay />}
    </div>
  );
}
