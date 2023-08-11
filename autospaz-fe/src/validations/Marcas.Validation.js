import * as yup from "yup";

export const ValidateMarcas = yup.object().shape({
  name: yup.string().required("Ingrese un nombre"),
});
