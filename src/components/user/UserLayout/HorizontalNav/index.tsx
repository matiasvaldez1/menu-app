import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function HorizontalNav() {
  const { data } = useSession();
  return (
    <div className="mx-8 flex justify-between text-sm">
      <div>TusMenus App</div>
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
            signOut({callbackUrl: '/'});
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
