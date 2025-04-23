import { HTTP_METHOD } from "next/dist/server/web/http";
import { NextRequest } from "next/server";

export function isAuthorized(req: NextRequest): boolean {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || authHeader !== `Bearer ${process.env.API_SECRET}`) {
    return false;
  }

  return true;
}

export async function sendRequestWithoutPayload<T>(
  url: string,
  method: HTTP_METHOD = "GET",
  cacheType?: RequestCache
): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    cache: cacheType,
  });

  return (await response.json()) as T;
}

export async function sendRequestWithPayload<T>(
  url: string,
  body: BodyInit,
  method: HTTP_METHOD = "POST",
  cacheType?: RequestCache
): Promise<T> {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
    cache: cacheType,
  });

  return (await response.json()) as T;
}
