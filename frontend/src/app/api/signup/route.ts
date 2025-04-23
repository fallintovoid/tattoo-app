import { User } from "@/lib/models/user";
import { createUser, isUserExists } from "@/lib/user-database/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, email, password } = await req.json();

  try {
    if (await isUserExists(username, email)) {
      return NextResponse.json(
        {
          error: "User already exists",
        },
        { status: 400 }
      );
    }

    const user = await createUser({ username, email, password });

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

    return NextResponse.json({ user: userData }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Some error occured while signing up" },
      { status: 500 }
    );
  }
}
