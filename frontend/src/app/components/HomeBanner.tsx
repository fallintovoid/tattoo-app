import React from "react";
import Banner from "../ui/Banner";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <Banner>
      <div className="flex flex-col gap-4 text-primary-content">
        <h2 className="font-bold text-4xl">First time booking?</h2>
        <h4 className="font-semibold text-md">
          Get €10 OFF your first tattoo appointment when you book through
          TattooApp!
        </h4>
        <Link href={"/offers"}>
          <button className="btn btn-soft btn-primary md:w-35">
            Book now <FaArrowRight size={15} />
          </button>
        </Link>
      </div>
    </Banner>
  );
};

export default HomeBanner;
