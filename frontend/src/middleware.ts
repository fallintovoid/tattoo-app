import { isAuthorized } from "@/lib/utils/api-utils";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ message: "User unathorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
