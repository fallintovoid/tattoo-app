import mongoose, { Document, Model } from "mongoose";

export interface PortfolioPicture {
  url: string;
  user_id: string;
}

export interface PortfolioPictureDocument extends PortfolioPicture, Document {
  createdAt: Date;
  updatedAt: Date;
}

const portoflioPictureSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const PortfolioPictureModel: Model<PortfolioPictureDocument> =
  mongoose.models.PortfolioPicture ||
  mongoose.model("PortfolioPicture", portoflioPictureSchema);

export default PortfolioPictureModel;
