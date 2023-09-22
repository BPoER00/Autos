import * as yup from "yup";

export const ValidateRevision = yup.object().shape({
  auto: yup.string().required("Ingrese un Auto"),
  componente: yup.string().required("Ingrese un Componente"),

  descripcion: yup.string().required("Ingrese la descripcion"),
  status: yup
    .number()
    .typeError("Unicamente Acepta Numeros")
    .required("Ingrese el Status del componente")
    .min(0, "El número debe ser igual o mayor que 0")
    .max(10, "El número debe ser igual o menor que 10"),
});
