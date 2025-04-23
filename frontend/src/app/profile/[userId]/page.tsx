import { DynamicParams } from "@/lib/types/dynamic-params";
import BaseLayout from "../../components/BaseLayout";

interface PageParams {
  userId: string;
}

export default async function UserProfile({
  params,
}: DynamicParams<PageParams>) {
  const { userId } = await params;

  return (
    <BaseLayout>
      <h1>{userId}</h1>
    </BaseLayout>
  );
}
