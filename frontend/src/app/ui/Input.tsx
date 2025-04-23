import React, { InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string;
  wrapperClassName?: string;
  legendClassName?: string;
  labelClassName?: string;
  icon?: ReactNode;
  errors?: string[];
}

const Input = ({
  inputLabel,
  className,
  wrapperClassName,
  legendClassName,
  labelClassName,
  icon,
  errors,
  ...props
}: Props) => {
  return (
    <fieldset className={cn("fieldset", wrapperClassName)}>
      {inputLabel && (
        <legend className={cn("fieldset-legend", legendClassName)}>
          {inputLabel}
        </legend>
      )}
      <label
        className={cn(
          "input w-full focus-within:outline-0 border border-secondary focus-within:border-primary",
          labelClassName
        )}
      >
        {icon}
        <input className={cn("grow w-full ", className)} {...props} />
      </label>
      {errors && errors.length > 0 && (
        <div className="flex flex-col gap-0.5">
          {errors?.map((err) => (
            <p key={err} className="text-error">
              {err}
            </p>
          ))}
        </div>
      )}
    </fieldset>
  );
};

export default Input;
