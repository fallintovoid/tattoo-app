"use client";

import { UserSession } from "@/lib/utils/session";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { signOut } from "../actions/sign-out";

type Props = {
  session: UserSession;
};

const NavUser = ({ session }: Props) => {
  return (
    <div className="dropdown dropdown-end cursor-pointer">
      <div
        tabIndex={0}
        role="button"
        className="px-2 py-1 rounded-md border border-secondary flex items-center gap-3"
      >
        <FaRegUserCircle size={20} />
        <h4 className="font-semibold text-sm">{session.username}</h4>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-sm w-52 p-2 shadow-sm"
      >
        <li>
          <Link
            href={`/user/profile/${session.username}`}
            className="flex gap-1"
          >
            <FaRegUserCircle size={15} />
            Profile
          </Link>
        </li>
        <li>
          <Link href={`/user/profile/settings`} className="flex gap-1">
            <IoSettingsOutline size={15} />
            Profile settings
          </Link>
        </li>
        <li className="bg-error rounded-sm">
          <a className="flex gap-1" onClick={async () => await signOut()}>
            <GoSignOut size={15} />
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavUser;
