import Title from "@components/ui/Title";
import ToggleButton from "@components/ui/ToggleButton";
import useTrigger from "@hooks/useTrigger";
import Link from "next/link";
import { useRouter } from "next/router";

export const PATHS = {
  dashboard: "/dashboard",
  items: "/items",
  profile: "/profile"
};

export default function VerticalNav({ className }: { className: string }) {
  const [darkMode, toggleDarkMode, setDarkMode] = useTrigger(false)
  const router = useRouter();

  return (
    <div className={className}>
      <div className="flex flex-col">
      <Title type="primary" className="m-3 p-2 text-2xl">TusMenus App</Title>
        <Link
          className={`m-3 cursor-pointer rounded-md p-2 font-manrope text-xl font-bold text-slate-400 ${
            PATHS.dashboard === router.pathname &&
            " bg-primary-200 text-slate-50"
          }`}
          href={"/dashboard"}
        >
          Dashboard
        </Link>
        <Link
          className={`m-3 cursor-pointer rounded-md p-2 font-manrope text-xl font-bold text-slate-400 ${
            PATHS.items === router.pathname && " bg-primary-200 text-slate-50"
          }`}
          href={"/items"}
        >
          Items
        </Link>
        <Link
          className={`m-3 cursor-pointer rounded-md p-2 font-manrope text-xl font-bold text-slate-400 ${
            PATHS.profile === router.pathname && " bg-primary-200 text-slate-50"
          }`}
          href={"/profile"}
        >
          Profile
        </Link>
          {/*Dark mode <ToggleButton show={darkMode} onClick={toggleDarkMode} /> */}
      </div>
    </div>
  );
}
