import BaseLayout from "./components/BaseLayout";
import HomeBanner from "./components/HomeBanner";
import SearchSection from "./components/SearchSection";

export default async function Home() {
  return (
    <BaseLayout className="bg-base-100">
      <div className="flex flex-col gap-15">
        <HomeBanner />
        <SearchSection />
      </div>
    </BaseLayout>
  );
}
