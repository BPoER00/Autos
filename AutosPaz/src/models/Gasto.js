import { Schema, model } from "mongoose";

const gastoSchema = new Schema(
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
    total: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Gasto", gastoSchema);
