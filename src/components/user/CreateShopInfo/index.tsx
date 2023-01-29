import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import useWatcher from "@hooks/useWatcher";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { trpc } from "src/utils/trpc";

export default function CreateShopInfo({
  showModalCreateShop,
  refetchUserInfo
}: {
  showModalCreateShop: (bool: boolean) => void;
  refetchUserInfo: () => void
}) {
  const createShopInfoMutation =
    trpc.dashboard.createShopUser.useMutation();
  const [formValues, setFormValues] = useState({ name: "", logo: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValues.name || !formValues.logo) return;
    const result = await createShopInfoMutation.mutateAsync(formValues);
    if(Boolean(result)){
    showModalCreateShop(false)
    refetchUserInfo()
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormValues((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  }; 

  return (
    <div className="w-96 rounded-xl">
      <form onSubmit={handleSubmit}>
        Form para crear shop user
        <Input
          placeholder="Nombre"
          name="name"
          onChange={handleChange}
          value={formValues.name}
        />
        <Input
          placeholder="Logo"
          name="logo"
          onChange={handleChange}
          value={formValues.logo}
        />
        <Button htmlType="submit" type="approve">
          Guardar
        </Button>
      </form>
    </div>
  );
}
