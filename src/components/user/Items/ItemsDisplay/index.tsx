import Spin from "@components/ui/Spin";
import Title from "@components/ui/Title";
import Image from "next/image";
import { trpc } from "src/utils/trpc";

export default function ItemsDisplay() {
  const { data } = trpc.items.getItems.useQuery();

  if (!data) {
    return <Spin />;
  }

  return (
    <div>
      ItemsDisplay
      <div>
        {data.map((item) => {
          return (
            <div>
              <Image
                src={item.logo}
                alt="Logo del item"
                width={40}
                height={40}
              />
              <Title>{item.title}</Title>
              <p>{item.description}</p>
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
