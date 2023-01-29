import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";
import Title from "@components/ui/Title";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { trpc } from "src/utils/trpc";

export default function CreateItem({
  onItemCreated,
}: {
  onItemCreated: (bool: boolean) => void;
}) {
  const createItemMutation = trpc.items.createItem.useMutation();
  const { data } = trpc.items.getCategories.useQuery();
  const categoriesOptions = useMemo(() => {
    if (data && data?.length > 0) {
      return data?.map((data) => ({ value: data.id, label: data.title }));
    } else {
      return [];
    }
  }, [data]);
  const [formValues, setFormValues] = useState({
    title: "",
    logo: "",
    description: "",
    price: 0,
    categoriesId: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValues.title || !formValues.logo) return;
    const result = createItemMutation.mutateAsync(formValues);
    if (Boolean(result)) {
      onItemCreated(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues((prevForm) => ({
      ...prevForm,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Title type="bold">Titulo</Title>
        <Input
          placeholder="Titulo"
          name="title"
          onChange={handleChange}
          value={formValues.title}
        />
        <Title type="bold">Logo del item</Title>
        <Input
          placeholder="Logo"
          name="logo"
          onChange={handleChange}
          value={formValues.logo}
        />
        <Title type="bold">Descripcion </Title>
        <Input
          placeholder="Descripcion"
          name="description"
          onChange={handleChange}
          value={formValues.description}
        />
        <Title type="bold">Precio</Title>
        <Input
          placeholder="Precio"
          name="price"
          onChange={handleChange}
          value={formValues.price}
        />
        <Title type="bold">Categoria del item</Title>
        <Select
          name="categoriesId"
          options={categoriesOptions}
          onChange={handleChange}
          value={formValues.categoriesId}
        />
        <Button htmlType="submit" type="approve">
          Crear
        </Button>
      </form>
    </div>
  );
}
