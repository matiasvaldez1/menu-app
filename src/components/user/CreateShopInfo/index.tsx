import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import useWatcher from "@hooks/useWatcher";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { trpc } from "src/utils/trpc";

export default function CreateShopInfo({
  showModalCreateShop,
}: {
  showModalCreateShop: (bool: boolean) => void;
}) {
  const createShopInfoMutation =
    trpc.dashboardRouter.createShopUser.useMutation();
  const [formValues, setFormValues] = useState({ name: "", logo: "" });
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValues.name || !formValues.logo) return;
    createShopInfoMutation.mutate(formValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormValues((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  useWatcher(() => {
    if (createShopInfoMutation.data) {
      showModalCreateShop(false);
    }
  }, [createShopInfoMutation.data]);
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
