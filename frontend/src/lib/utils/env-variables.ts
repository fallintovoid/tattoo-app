const MONGODB_URI = process.env.MONGODB_URI as string;
const WEBSITE_URL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000";

export { MONGODB_URI, WEBSITE_URL };
