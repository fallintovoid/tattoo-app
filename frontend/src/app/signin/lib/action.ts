"use server";

import { getUserWithCredentials } from "@/lib/user-database/utils";
import { SignInFormSchema } from "./validation-schema";
import { createSession } from "@/lib/utils/session";
import { redirect } from "next/navigation";
import { User } from "@/lib/models/user";

interface FormErrors {
  username?: string[];
  password?: string[];
  response?: string;
}

export interface SignInState {
  errors: FormErrors;
}

export const signin = async (
  _state: SignInState,
  formData: FormData
): Promise<SignInState> => {
  const data = {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  const result = SignInFormSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  try {
    const user = await getUserWithCredentials(data.username, data.password);

    const userData: Omit<User, "password"> = {
      username: user.username,
      email: user.email,
      phone_number: user.phone_number,
      social_media: user.social_media,
      profile_picture_url: user.profile_picture_url,
      user_type: user.user_type,
      is_verified: user.is_verified,
      is_email_verified: user.is_email_verified,
      location: user.location,
    };

    await createSession(userData);
  } catch (e) {
    if (e instanceof Error) {
      return {
        errors: {
          response: e.message,
        },
      };
    }
  }

  redirect("/");
};
