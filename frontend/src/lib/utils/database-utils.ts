import { MONGODB_URI } from "./env-variables";
import mongoose, { Connection } from "mongoose";

interface MongooseCache {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached: MongooseCache = (global as any).mongoose || {
  conn: null,
  promise: null,
};

export async function dbConnect(): Promise<Connection> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => mongoose.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).mongoose = cached;
