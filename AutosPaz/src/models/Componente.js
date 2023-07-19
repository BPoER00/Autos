import { Schema, model } from "mongoose";

const componenteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Componente", componenteSchema);
