import { z } from "zod";
import { FormEntries } from "../types/form";

export function validate(
  formEntries: FormEntries,
  validationSchema: z.ZodType
) {
  const result = validationSchema.safeParse(formEntries);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {},
  };
}
