import { Schema, model } from "mongoose";

const marcaSchema = new Schema(
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

export default model("Marca", marcaSchema);
