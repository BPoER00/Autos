import * as yup from "yup";

export const ValidateAuto = yup.object().shape({
  marca: yup.string().required("Ingrese una marca"),
  modelo: yup.string().required("Ingrese una modelo"),
  tipoPlaca: yup.string().required("Ingrese un tipo de placa"),
  
  placa: yup
    .string()
    .matches(
      /^[0-9]{3}[A-Z]{3}$/,
      "La placa debe tener 3 números seguidos de 3 letras mayúsculas"
    )
    .required("Ingrese la placa del auto"),
  year: yup
    .number()
    .typeError("Unicamente Acepta Numeros")
    .required("Ingrese el Año del vehiculo")
    .min(1886, "El año debe ser mayor a 1886")
    .max(2023, "El año debe ser menor a 2023"),
  price: yup
    .number()
    .typeError("Unicamente Acepta Numeros")
    .required("Ingrese el Costo del vehiculo")
    .min(1, "El costo no puede ser negativo o cero"),
});

export const ValidateVentaAuto = yup.object().shape({
  id: yup.string().required("Ingrese un Auto"),

  precio: yup
    .number()
    .typeError("Unicamente Acepta Numeros")
    .required("Ingrese el precio para la venta")
    .min(1, "El costo no puede ser negativo o cero"),
});
