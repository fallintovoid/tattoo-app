import BaseLayout from "../components/BaseLayout";
import SearchForm from "./components/SearchForm";

interface Props {
  searchParams: Promise<{
    searchValue: string | undefined;
    tattooStyle: string | undefined;
    query: string | undefined;
  }>;
}
export default async function Offers({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <BaseLayout className="bg-base-100">
      <SearchForm
        searchValue={params.searchValue}
        query={params.query}
        tattooStyle={params.tattooStyle}
      />
    </BaseLayout>
  );
}
