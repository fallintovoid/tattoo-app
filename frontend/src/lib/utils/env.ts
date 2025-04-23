const AUTH_SECRET = process.env.AUTH_SECRET as string;

if (!AUTH_SECRET) {
  throw new Error("AUTH_SECRET is not defined");
}

export { AUTH_SECRET };
