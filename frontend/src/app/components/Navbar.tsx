"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import cn from "classnames";
import { UserSession } from "@/lib/utils/session";
import NavUser from "./NavUser";

interface Props {
  session: UserSession | null;
}
const Navbar = ({ session }: Props) => {
  const pathname = usePathname();

  return (
    <nav className="navbar z-1000 shadow-md bg-base-100 fixed px-6">
      <div className="navbar-start">
        <Link href={"/"}>
          <h3 className="text-primary font-bold text-2xl">TattooApp</h3>
        </Link>
      </div>
      <div className="navbar-center text-base-content">
        <div role="tablist" className="tabs tabs-border hidden md:block">
          <Link
            href={"/"}
            role="tab"
            className={cn("tab", {
              ["tab-active"]: pathname === "/",
            })}
          >
            <h3 className=" font-bold">Home</h3>
          </Link>
          <Link
            href={"/offers"}
            role="tab"
            className={cn("tab", {
              ["tab-active"]: pathname.includes("offers"),
            })}
          >
            <h3 className="text-base-content font-bold">Offers</h3>
          </Link>
        </div>
      </div>
      <div className="navbar-end flex gap-4">
        <div className="flex gap-2 items-center">
          {session ? (
            <NavUser session={session} />
          ) : (
            <>
              <Link href={"/signup"}>
                <button className="btn btn-outline btn-primary rounded-xl p-2">
                  Sign up
                </button>
              </Link>
              <Link href={"/signin"}>
                <button className="btn btn-outline btn-secondary rounded-xl p-2">
                  Sign in
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
