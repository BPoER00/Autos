import Select from "react-select";
import { useController } from "react-hook-form";

function InputSelect({ label, name, options, control, errors , ...rest}) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: "This field is required" }, // Puedes agregar más reglas de validación aquí si es necesario
    defaultValue: "", // Valor inicial del campo
  });

  return (
    <>
      <label className="font-semibold leading-none text-gray-300">
        {label}
      </label>
      <Select
        placeholder="Search Here..."
        className="text-black placeholder-gray-600 w-full py-2.5 mt-2 text-base   transition duration-500 2 ring-gray-400"
        options={options}
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        onBlur={onBlur}
        ref={ref}
        {...rest}
      />
      <span className="text-red-500 text-center">{errors}</span>
    </>
  );
}

export default InputSelect;
