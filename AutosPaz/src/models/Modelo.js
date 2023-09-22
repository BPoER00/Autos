import { Schema, model } from "mongoose";

const modeloSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    marca: [
      {
        ref: "Marca",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    versionKey: false,
  }
);

export default model("Modelo", modeloSchema);
