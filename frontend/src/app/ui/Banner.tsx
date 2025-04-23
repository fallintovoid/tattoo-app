import React, { PropsWithChildren } from "react";

const Banner = (props: PropsWithChildren) => {
  return (
    <div className="px-6 py-10 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-sm text-primary-content">
      {props.children}
    </div>
  );
};

export default Banner;
