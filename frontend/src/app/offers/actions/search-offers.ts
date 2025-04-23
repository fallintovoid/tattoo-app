"use server";

import generateQuery from "@/lib/utils/generate-query";
import { filters } from "../components/SearchForm";
import { redirect } from "next/navigation";

export async function searchOffers(formData: FormData) {
  const searchValue = formData.get("searchValue") as string;
  const tattooStyle = formData.get("tattooStyles") as string;

  const filterData: string[] = [];

  for (const filter of filters) {
    const value = formData.get(filter.name) as string | null;
    if (value) {
      filterData.push(value);
    }
  }

  const queryString = generateQuery({
    searchValue,
    tattooStyle,
    query: filterData.join(";"),
  });

  console.log({
    searchValue,
    tattooStyle,
    query: filterData.join(";"),
  });

  redirect(`/offers${queryString}`);
}
