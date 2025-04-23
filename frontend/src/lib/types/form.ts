export type FormErrors<T> = {
  [K in keyof T]: string;
};

export type FormEntries = Record<string, string | number | undefined>;
