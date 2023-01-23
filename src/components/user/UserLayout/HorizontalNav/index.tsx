import Button from "@components/ui/Button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Modal from "@components/ui/Modal";
import CreateCategory from "@components/user/CreateCategory";
import useTrigger from "@hooks/useTrigger";

export default function HorizontalNav() {
  const [showModal, openModal, setShowModal] = useTrigger(false)
  const { data } = useSession();
  return (
    <div className="flex justify-between bg-gray-600 px-8 text-sm">
      <div>TusMenus App</div>
      <div className="flex align-middle">
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
            onCategoryCreated: setShowModal
          }}
        />
        <div className="flex flex-col justify-center">
          <Image
            className="mx-auto rounded-full"
            src={data?.user?.image as string}
            alt="User profile picture"
            width={30}
            height={30}
          />
          <p>{data?.user?.name}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut({ callbackUrl: "/" });
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
