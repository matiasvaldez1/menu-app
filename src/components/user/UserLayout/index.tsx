import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import { CommonHead } from "@components/ui/Seo";
import { ReactElement } from "react";

export default function UserLayout({
  children,
  title,
}: {
  children: ReactElement;
  title: string;
}) {
  return (
    <>
      <CommonHead title={title} />
      <div className="flex flex-col">
        <HorizontalNav />
        <div className="grid grid-cols-10">
          <VerticalNav className="col-span-1 bg-gray-600 h-screen" />
          <div className="col-auto flex">{children}</div>
        </div>
      </div>
    </>
  );
}
