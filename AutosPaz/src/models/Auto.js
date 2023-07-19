import { Schema, model } from "mongoose";

const autoSchema = new Schema(
  {
    marca: [
      {
        ref: "Marca",
        type: Schema.Types.ObjectId,
      },
    ],
    modelo: [
      {
        ref: "Modelo",
        type: Schema.Types.ObjectId,
      },
    ],
    placa: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    status_buy: {
      type: Boolean,
      default: false,
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

export default model("Auto", autoSchema);
