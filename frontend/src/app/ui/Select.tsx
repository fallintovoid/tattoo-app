import React, { SelectHTMLAttributes } from "react";
import cn from "classnames";

interface SelectOption {
  value: string;
  label: string;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  defaultValue?: string;
  className?: string;
  legendClassName?: string;
  labelClassName?: string;
  selectLabel?: string;
  wrapperClassName?: string;
  prefixLabel?: string;
}

const Select = ({
  defaultValue,
  options,
  className,
  wrapperClassName,
  selectLabel,
  labelClassName,
  prefixLabel,
  legendClassName,
  ...props
}: Props) => {
  return (
    <fieldset className={cn("fieldset", wrapperClassName)}>
      {selectLabel && (
        <legend className={cn("fieldset-legend", legendClassName)}>
          {selectLabel}
        </legend>
      )}
      <label
        className={cn(
          "select w-full border border-secondary focus-within:border-primary focus-within:outline-0",
          labelClassName
        )}
      >
        {prefixLabel && <span className="label">{prefixLabel}</span>}
        <select
          defaultValue={
            defaultValue && !props.value ? options[0].label : undefined
          }
          className={cn("w-full", className)}
          {...props}
        >
          {options.map((item) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
    </fieldset>
  );
};

export default Select;
