import Button from "@components/ui/Button";
import Title from "@components/ui/Title";
import Image from "next/image";
import { trpc } from "src/utils/trpc";
import { useRouter } from "next/router";

export default function ProfileView() {
  const router = useRouter();
  const { data } = trpc.profileRouter.getUserInfo.useQuery();
  return (
    <div>
      <Title seo="h1" type="category" className="mb-12 text-2xl">
        Profile
      </Title>
      <Image src={data?.logo ?? ""} alt="Shop logo" width={50} height={50} />
      <div>Nombre: {data?.name}</div>
      <div>User ID: {data?.userId}</div>
      <div>FoodShop ID {data?.id}</div>
      <Button
        htmlType="button"
        type="approve"
        className="mt-12"
        onClick={() => router.push({ pathname: `/profiles/${data?.id}` })}
      >
        Ir a mi perfil publico
      </Button>
    </div>
  );
}
