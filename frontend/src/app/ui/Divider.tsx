import React from "react";
import cn from "classnames";

type Props = {
  direction: "horizontal" | "vertical";
  className?: string;
};

const Divider = ({ direction, className = "vertical" }: Props) => {
  return (
    <div
      className={cn("divider", className, {
        ["divider-horizontal"]: direction === "horizontal",
      })}
    ></div>
  );
};

export default Divider;
