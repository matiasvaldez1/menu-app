import Link from "next/link";
import { useRouter } from "next/router";

export const PATHS = {
  dashboard: "/dashboard",
  items: "/items",
};


export default function VerticalNav({ className }: { className: string }) {
  const router = useRouter();

  return (
    <div className={className}>
      <div className="flex flex-col">
        <Link
          className={`cursor-pointer m-3 rounded-md p-2 font-manrope text-xl font-bold text-slate-400 ${PATHS.dashboard === router.pathname && ' bg-primary-200 text-slate-50'}`}
          href={"/dashboard"}
        >
          Dashboard
        </Link>
        <Link
          className={`cursor-pointer m-3 rounded-md p-2 font-manrope text-xl font-bold text-slate-400 ${PATHS.items === router.pathname && ' bg-primary-200 text-slate-50'}`}
          href={"/items"}
        >
          Items
        </Link>
      </div>
    </div>
  );
}
