import { Schema, model } from "mongoose";

const revisionSchema = new Schema(
  {
    auto: [
      {
        ref: "Auto",
        type: Schema.Types.ObjectId,
      },
    ],
    componente: [
      {
        ref: "Componente",
        type: Schema.Types.ObjectId,
      },
    ],
    descripcion: {
      type: String,
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

export default model("Revision", revisionSchema);
