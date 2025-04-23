import mongoose, { Document, Model } from "mongoose";
import { PortfolioPicture } from "./portfolio-picture";

export interface User {
  username: string;
  email: string;
  phone_number?: number;
  password: string;
  social_media?: {
    instagram_url: string;
    facebook_url: string;
    pinterest_url: string;
  };
  profile_picture_url?: string;
  user_type?: UserType;
  is_verified: boolean;
  is_email_verified: boolean;
  location?: {
    street: string;
    street_number: string;
    postal_code: number;
    city: string;
  };
  portfolio_pictures?: PortfolioPicture[];
}

export type UserType = "studio" | "self-employed";

export interface UserDocument extends User, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: false,
    },
    social_media: {
      instagram_url: {
        type: String,
        required: false,
      },
      facebook_url: {
        type: String,
        required: false,
      },
      pinterest_url: {
        type: String,
        required: false,
      },
    },
    profile_picture_url: {
      type: String,
      required: false,
    },
    user_type: {
      type: String,
    },
    is_verified: {
      type: Boolean,
      required: true,
    },
    is_email_verified: {
      type: Boolean,
      required: true,
    },
    location: {
      street: {
        type: String,
        required: false,
      },
      street_number: {
        type: String,
        required: false,
      },
      postal_code: {
        type: Number,
        required: false,
      },
      city: {
        type: Number,
        required: false,
      },
    },
    portfolio_pictures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PortfolioPicture",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel: Model<UserDocument> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;
