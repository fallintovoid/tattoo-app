import React from "react";
import cn from "classnames";

interface Props {
  name: string; // Name of the field (e.g., "filters[]")
  value: string; // The filter value
  label: string; // Display label (e.g., "Filter 1")
  icon?: React.ReactNode; // Optional icon
  isChecked: boolean; // Whether this value is currently selected
}

const FilterItem = ({ name, value, label, icon, isChecked }: Props) => {
  const id = `${name}-${value}`;

  return (
    <div>
      <input
        type="checkbox"
        name={name}
        value={value}
        id={id}
        defaultChecked={isChecked}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm cursor-pointer transition",
          "peer-checked:bg-primary peer-checked:text-primary-content peer-checked:border-primary",
          "bg-base-200 text-base-content border-black hover:bg-primary hover:text-primary-content"
        )}
      >
        {icon}
        {label}
      </label>
    </div>
  );
};

export default FilterItem;
