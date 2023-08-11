import { Schema, model } from "mongoose";

const gastoDetalleSchema = new Schema(
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
      default: false,
    },
    status: {
      type: Number, //1 ingresos, 2 gastos, 3 Venta, 4 Compra
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("GastoDetalle", gastoDetalleSchema);
