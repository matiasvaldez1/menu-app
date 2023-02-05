import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import { CommonHead } from "@components/ui/Seo";
import { ReactElement } from "react";
import Card from "@components/ui/Card";

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
      <div className="grid grid-cols-10">
        <Card className="col-span-2 p-4">
          <VerticalNav className="h-screen" />
        </Card>
        <div className="col-span-8">
          <HorizontalNav />
          <div className="flex h-full w-full bg-whithey">{children}</div>
        </div>
      </div>
    </>
  );
}
