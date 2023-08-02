import * as yup from "yup";

export const ValidateAuto = yup.object().shape({
  marca: yup.string().required("Ingrese una marca"),
  modelo: yup.string().required("Ingrese una modelo"),

  placa: yup.string().required("Ingrese la placa del auto"),
  year: yup.number().typeError('Unicamente Acepta Numeros').required("Ingrese el Año del vehiculo"),
  price: yup.number().typeError('Unicamente Acepta Numeros').required("Ingrese el Costo del vehiculo"),

});
