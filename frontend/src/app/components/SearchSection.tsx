import React from "react";
import Select from "../ui/Select";
import { redirect } from "next/navigation";
import generateQuery from "@/lib/utils/generate-query";

const stylesOptionsData = [
  {
    label: "Tattoo Styles",
    value: "DEFAULT",
  },
  {
    label: "Style1",
    value: "Style1",
  },
  {
    label: "Style2",
    value: "Style2",
  },
];

const SearchSection = () => {
  const processSearch = async (formData: FormData) => {
    "use server";

    const style = formData.get("tattoo_style") as string;
    const location = formData.get("location") as string;

    const queryString = generateQuery({
      style,
      location,
    });

    if (style !== "DEFAULT" && location !== "DEFAULT") {
      redirect("/offers" + queryString);
    }

    redirect("/offers");
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <h1 className="font-semibold text-2xl text-center">
        Search by style and location to discover talented artists for your next
        ink
      </h1>

      <form
        className="w-full md:w-4/5 bg-base-300 shadow-md p-5 rounded-sm gap-3 flex flex-col md:flex-row md:items-center"
        action={processSearch}
      >
        <Select
          options={stylesOptionsData}
          name="tattoo_style"
          wrapperClassName="w-full"
          defaultValue="Tattoo Styles"
        />
        <Select
          options={stylesOptionsData}
          name="location"
          wrapperClassName="w-full"
          defaultValue="Tattoo Styles"
        />
        <button type="submit" className="btn btn-secondary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchSection;
