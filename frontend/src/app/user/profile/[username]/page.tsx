import BaseLayout from "@/app/components/BaseLayout";
import { getSession } from "@/lib/utils/session";

interface Props {
  params: {
    username: string;
  };
}

export default async function Profile({ params }: Props) {
  const session = await getSession();

  const isOwnProfile = session?.username === params.username;

  return (
    <BaseLayout className="bg-base-100">
      <h1>{isOwnProfile ? "Own" : params.username}</h1>
    </BaseLayout>
  );
}
