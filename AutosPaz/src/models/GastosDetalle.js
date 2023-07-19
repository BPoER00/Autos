import { Schema, model } from "mongoose";

const gastoDetalleSchema = new Schema(
  {
    auto: [
      {
        ref: "Gasto",
        type: Schema.Types.ObjectId,
      },
    ],
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      default: false,
    },
    status: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("GastoDetalle", gastoDetalleSchema);
