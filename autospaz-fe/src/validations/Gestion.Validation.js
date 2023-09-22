import * as yup from "yup";

export const ValidateGestiones = yup.object().shape({
  auto: yup.string().required("Ingrese un Auto"),
  descripcion: yup.string().required("Ingrese una descripcion"),

  precio: yup
    .number()
    .typeError("Unicamente Acepta Numeros")
    .required("Ingrese el precio de la gestion")
    .min(1, "El costo no puede ser negativo o cero"),
  status: yup
    .number()
    .typeError("Unicamente Acepta Numeros")
    .required("Ingrese el Status de la gestion"),
});
