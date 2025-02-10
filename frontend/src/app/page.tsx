import { helloWorldRoute } from "@/lib/utils/api-routes";
import { sendRequestWithoutPayload } from "@/lib/utils/api-utils";

export default async function Home() {
  const response = await sendRequestWithoutPayload<{ name: string }>(
    helloWorldRoute,
    "GET",
    "no-cache"
  );

  console.log(response);

  return <h1>{response.name}</h1>;
}
