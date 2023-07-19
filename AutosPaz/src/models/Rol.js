import { Schema, model } from "mongoose";

const rolSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Rol", rolSchema);
