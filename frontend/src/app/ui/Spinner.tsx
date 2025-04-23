import React from "react";
import cn from "classnames";

type Props = {
  className?: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
};

const Spinner = ({ className, size }: Props) => {
  return (
    <span
      className={cn(`loading loading-spinner loading-${size}`, className)}
    ></span>
  );
};

export default Spinner;
