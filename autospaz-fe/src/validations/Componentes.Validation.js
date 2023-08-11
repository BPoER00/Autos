import * as yup from "yup";

export const ValidateComponentes = yup.object().shape({
  name: yup.string().required("Ingrese un nombre"),
  description: yup.string().required("Ingrese una descripcion"),

});
