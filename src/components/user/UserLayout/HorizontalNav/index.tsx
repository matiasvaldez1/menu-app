import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Card from "@components/ui/Card";

export default function HorizontalNav() {
  const { data } = useSession();
  return (
    <Card>

    <div className="flex justify-between px-8 text-sm">
      <div>TusMenus App</div>
      <div className="flex align-middle">
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
    </Card>
  );
}
