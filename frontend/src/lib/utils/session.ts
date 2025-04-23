import "server-only";

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { AUTH_SECRET } from "./env";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "../models/user";

interface SessionCookie {
  name: string;
  options: {
    httpOnly: boolean;
    sameSite: "lax" | boolean;
    secure: boolean;
    path: string;
  };
  duration: number;
}

export interface UserSession extends User {
  exp: number;
  iat: number;
}

const key = new TextEncoder().encode(AUTH_SECRET);

const sessionCookie: SessionCookie = {
  name: "session",
  options: {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
  },
  duration: 60 * 60 * 24 * 1000,
};

export async function encrypt(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(token: string): Promise<UserSession | null> {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });

    return payload as unknown as UserSession;
  } catch {
    return null;
  }
}

export async function createSession(
  userData: Omit<User, "password">
): Promise<string> {
  const expires = new Date(Date.now() + sessionCookie.duration);
  const session = await encrypt({
    ...userData,
    exp: expires.getTime(),
  });

  (await cookies()).set(sessionCookie.name, session, {
    ...sessionCookie.options,
    expires,
  });

  return session;
}

export async function getSession(): Promise<UserSession | null> {
  const session = (await cookies()).get(sessionCookie.name)?.value;

  if (!session) {
    return null;
  }

  return await decrypt(session);
}

export async function deleteSession() {
  (await cookies()).delete(sessionCookie.name);
  redirect("/signin");
}
