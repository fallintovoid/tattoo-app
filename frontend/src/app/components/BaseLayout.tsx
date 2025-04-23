import React, { PropsWithChildren } from "react";
import cn from "classnames";

interface Props {
  className?: string;
}
const BaseLayout = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <main className={cn("px-6 pt-24 bg-base-100", className)}>{children}</main>
  );
};

export default BaseLayout;
