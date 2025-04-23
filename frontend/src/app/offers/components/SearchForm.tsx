import Button from "@/app/ui/Button";
import Divider from "@/app/ui/Divider";
import Input from "@/app/ui/Input";
import Select from "@/app/ui/Select";
import React from "react";
import { CiSearch } from "react-icons/ci";
import FilterItem from "./FilterItem";
import { searchOffers } from "../actions/search-offers";

interface Props {
  searchValue: string | undefined;
  query: string | undefined;
  tattooStyle: string | undefined;
}

const options = [
  {
    label: "Item 1",
    value: "Item1",
  },
  {
    label: "Item 2",
    value: "Item2",
  },
];

export const filters = [
  {
    name: "Filter 1",
    icon: <CiSearch size={15} />,
    isChecked: false,
    value: "filter1",
  },
  {
    name: "Filter 2",
    icon: <CiSearch size={15} />,
    isChecked: false,
    value: "filter2",
  },
];
const SearchForm = ({ searchValue, query, tattooStyle }: Props) => {
  const generateFilterItems = (queryList: string[] | undefined) => {
    return filters.map((filter) => {
      const isFilterInQuery = queryList?.includes(filter.value);

      return (
        <FilterItem
          isChecked={isFilterInQuery || false}
          value={filter.value}
          key={filter.value}
          name={filter.name}
          icon={filter.icon}
          label={filter.name}
        />
      );
    });
  };

  return (
    <form className="w-full flex flex-col items-start" action={searchOffers}>
      <div className="join w-full flex items-center">
        <Input
          labelClassName="rounded-s-full input-lg z-0"
          icon={<CiSearch size={30} />}
          placeholder="Search for the artists, studios or style"
          wrapperClassName="w-full"
          name="searchValue"
          defaultValue={searchValue}
        />
        <Button
          type="submit"
          className="join-item btn-lg border border-primary"
        >
          Search
        </Button>
      </div>
      <div className="flex flex-col w-full md:flex-row gap-2 items-center">
        <Select
          labelClassName="rounded-full"
          wrapperClassName="w-full md:w-fit"
          options={options}
          prefixLabel="Tattoo styles"
          name="tattooStyles"
          defaultValue={tattooStyle}
        />
        <Divider className="py-3 m-0 hidden md:flex" direction="horizontal" />
        <ul className="flex gap-2 items-center carousel">
          {generateFilterItems(query?.split(";"))}
        </ul>
      </div>
    </form>
  );
};

export default SearchForm;
