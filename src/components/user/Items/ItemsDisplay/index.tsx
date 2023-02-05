import Card from "@components/ui/Card";
import Spin from "@components/ui/Spin";
import Title from "@components/ui/Title";
import { Item } from "@prisma/client";
import Image from "next/image";
import { trpc } from "src/utils/trpc";

function ItemCard({ item }: { item: Item }) {
  return (
    <Card className="w-4/6 mx-auto">
      <div className="flex justify-evenly">
        <Image
          src={item.logo}
          alt="Logo del item"
          width={40}
          height={40}
          className="h-20 w-28 object-cover"
        />
        <div className="flex flex-col">
          <Title>Titulo: {item.title}</Title>
          <p>Precio: ${item.price}</p>
        </div>
      </div>
      <p>Descripcion: {item.description}</p>
    </Card>
  );
}

export default function ItemsDisplay() {
  const { data } = trpc.items.getItems.useQuery();

  if (!data) {
    return <Spin />;
  }

  return (
    <Card className="min-h-screen">
      <Title type="secondary" seo="h1" className="text-2xl">
        Items
      </Title>
      <div className="grid grid-cols-3 gap-8 p-10">
        {data.map((item, i) => (
          <ItemCard key={i} item={item} />
        ))}
      </div>
    </Card>
  );
}
