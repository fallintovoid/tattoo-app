"use server";

import { redirect } from "next/navigation";
import { FormSchema } from "./validation-schema";
import { sendRequestWithPayload } from "@/lib/utils/api-utils";
import { signUpRoute } from "@/lib/utils/api-routes";
import { createSession } from "@/lib/utils/session";
import { User } from "@/lib/models/user";

interface FormErrors {
  username?: string[];
  email?: string[];
  password?: string[];
  password_repeat?: string[];
  response?: string;
}
export interface SignUpState {
  errors: FormErrors;
}

interface SignUpResponse {
  user?: User;
  error?: string;
}

export const signup = async (
  _state: SignUpState,
  formData: FormData
): Promise<SignUpState> => {
  const data = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    password_repeat: formData.get("password_repeat") as string,
  };

  const result = FormSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const response = await sendRequestWithPayload<SignUpResponse>(
    signUpRoute,
    JSON.stringify(data)
  );

  if (response.user) {
    await createSession(response.user);
  }

  if (response.error) {
    return {
      errors: {
        response: response.error,
      },
    };
  }

  redirect("/");
};
