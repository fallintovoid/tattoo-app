interface QueryObj {
  [key: string]: string | number;
}

export default function generateQuery(obj: QueryObj): string {
  const queryArr = [];

  for (const [key, value] of Object.entries(obj)) {
    queryArr.push(`${key}=${value}`);
  }

  return "?" + queryArr.join("&");
}
