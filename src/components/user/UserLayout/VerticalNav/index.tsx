import Link from "next/link";

export default function VerticalNav({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col">
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/items"}>Items</Link>
      </div>
    </div>
  );
}
