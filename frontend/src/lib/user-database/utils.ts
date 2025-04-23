import bcrypt from "bcrypt";
import UserModel, { User, UserDocument } from "../models/user";

type CreatableUser = Omit<
  User,
  "user_type" | "is_verified" | "is_email_verified"
>;

export async function createUser(
  userData: CreatableUser
): Promise<UserDocument> {
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const newUser = await UserModel.create({
    ...userData,
    password: hashedPassword,
    is_email_verified: false,
    is_verified: false,
  });

  return newUser;
}

export async function getUserWithCredentials(
  username: string,
  password: string
): Promise<UserDocument> {
  const user = await UserModel.findOne({ username });

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw new Error("Incorrect password");
  }

  return user;
}

export async function isUserExists(
  username: string,
  email: string
): Promise<boolean> {
  const user = await UserModel.findOne({
    $or: [{ username }, { email }],
  });

  return !!user;
}
