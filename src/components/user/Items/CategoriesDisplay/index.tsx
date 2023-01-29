import Spin from "@components/ui/Spin";
import Title from "@components/ui/Title";
import Image from "next/image";
import { trpc } from "src/utils/trpc";

export default function CategoriesDisplay() {
  const { data } = trpc.items.getCategories.useQuery();

  if (!data) {
    return <Spin />;
  }
  return (
    <div>
      CategoriesDisplay
      <div>
        {data.map((category) => {
          return (
            <div>
              <Title type="primary">{category.title}</Title>
              <Image
                src={category.logo}
                alt="Imagen de la categoria"
                width={40}
                height={40}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
