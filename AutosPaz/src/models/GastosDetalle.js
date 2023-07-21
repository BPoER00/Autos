import { Schema, model } from "mongoose";

const gastoDetalleSchema = new Schema(
  {
    gasto: [
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
      type: Number, //1 ingresos, 2 gastos
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("GastoDetalle", gastoDetalleSchema);
