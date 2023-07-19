import { Schema, model } from "mongoose";

const ventaSchema = new Schema(
  {
    auto: [
      {
        ref: "Auto",
        type: Schema.Types.ObjectId,
      },
    ],
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
    },
    gastos: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Venta", ventaSchema);
