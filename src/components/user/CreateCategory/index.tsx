import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import Title from "@components/ui/Title";
import useWatcher from "@hooks/useWatcher";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { trpc } from "src/utils/trpc";

export default function CreateCategory({
  onCategoryCreated,
}: {
  onCategoryCreated: (bool: boolean) => void;
}) {
  const createCategoryMutation =
    trpc.dashboardRouter.createCategory.useMutation();
  const [formValues, setFormValues] = useState({ name: "", logo: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValues.name || !formValues.logo) return;
    createCategoryMutation.mutate(formValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormValues((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  useWatcher(() => {
    if (createCategoryMutation.data) {
      onCategoryCreated(false);
    }
  }, [createCategoryMutation.data]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Title type="bold">Nombre</Title>
        <Input
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
          value={formValues.name}
        />
        <Title type="bold">Logo de la categoria</Title>
        <Input
          placeholder="Logo"
          name="logo"
          onChange={handleChange}
          value={formValues.logo}
        />
        <Button htmlType="submit" type="approve">Crear</Button>
      </form>
    </div>
  );
}
