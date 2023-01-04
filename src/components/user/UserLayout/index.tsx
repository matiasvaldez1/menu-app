import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";

export default function UserLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex flex-col">
      <HorizontalNav />
      <div className="grid grid-cols-10">
        <VerticalNav className="col-span-1" />
        <div className="col-auto flex">{children}</div>
      </div>
    </div>
  );
}
