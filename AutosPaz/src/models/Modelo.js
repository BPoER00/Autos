import { Schema, model } from "mongoose";

const modeloSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Modelo", modeloSchema);
