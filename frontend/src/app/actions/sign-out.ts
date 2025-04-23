"use server";

import { deleteSession } from "@/lib/utils/session";
import { redirect } from "next/navigation";

export async function signOut() {
  await deleteSession();

  redirect("/signin");
}
