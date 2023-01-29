import Button from "@components/ui/Button";
import Modal from "@components/ui/Modal";
import useTrigger from "@hooks/useTrigger";
import CategoriesDisplay from "./CategoriesDisplay";
import CreateCategory from "./CreateCategory";
import CreateItem from "./CreateItem";
import ItemsDisplay from "./ItemsDisplay";

export default function ItemsView() {
  const [showCategoryModal, openCategoryModal, setCategoryodal] = useTrigger(false);
  const [showItemModal, openItemModal, setItemModal] = useTrigger(false);

  return (
    <div>
      ItemsView
      <Modal
        closable
        onVisibleChange={setCategoryodal}
        visible={showCategoryModal}
        trigger={
          <Button type="approve" className="h-fit">
            Create category
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
            Create item
          </Button>
        }
        component={CreateItem}
        componentProps={{
          onItemCreated: setItemModal,
        }}
      />
      <ItemsDisplay />
      <CategoriesDisplay />
    </div>
  );
}
