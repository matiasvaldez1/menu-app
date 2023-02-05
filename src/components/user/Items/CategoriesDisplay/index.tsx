import Card from "@components/ui/Card";
import Spin from "@components/ui/Spin";
import Title from "@components/ui/Title";
import { Categories } from "@prisma/client";
import Image from "next/image";
import { trpc } from "src/utils/trpc";

function CategoryCard({ category }: { category: Categories }) {
  return (
    <Card className="mx-auto w-4/6">
      <div className="flex justify-between">
        <Image
          src={category.logo}
          alt="Imagen de la categoria"
          width={40}
          height={40}
          className="h-20 w-28 object-cover"
        />
        <Title type="primary">{category.title}</Title>
      </div>
    </Card>
  );
}

export default function CategoriesDisplay() {
  const { data } = trpc.items.getCategories.useQuery();

  if (!data) {
    return <Spin />;
  }
  return (
    <Card className="min-h-screen">
      <Title type="secondary" seo="h1" className="text-2xl">
        Categorias
      </Title>
      <div className="grid grid-cols-3 gap-8 p-10">
        {data.map((category, i) => (
          <CategoryCard key={i} category={category} />
        ))}
      </div>
    </Card>
  );
}
