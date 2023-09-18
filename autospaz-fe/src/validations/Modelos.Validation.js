import * as yup from "yup";

export const ValidateModelos = yup.object().shape({
  name: yup.string().required("Ingrese un nombre"),
  marca: yup.string().required("Ingrese una marca"),
});
