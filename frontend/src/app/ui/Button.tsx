import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}
const Button = ({
  isLoading,
  disabled,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={cn("btn", className, {
        "btn-disabled": isLoading || disabled,
      })}
      {...props}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        props.children
      )}
    </button>
  );
};

export default Button;
