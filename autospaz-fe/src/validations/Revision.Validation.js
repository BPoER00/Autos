import * as yup from "yup";

export const ValidateRevision = yup.object().shape({
  auto: yup.string().required("Ingrese un Auto"),
  componente: yup.string().required("Ingrese un Componente"),

  descripcion: yup.string().required("Ingrese la descripcion"),
  status: yup
    .number()
    .typeError("Unicamente Acepta Numeros")
    .required("Ingrese el Status del componente"),
});
