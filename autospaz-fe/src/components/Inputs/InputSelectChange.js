import Select from "react-select";
import { useController } from "react-hook-form";

function InputSelectChange({
  label,
  name,
  options,
  control,
  errors,
  setId,
  ...rest
}) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: "This field is required" },
    defaultValue: "",
  });

  // Llama a setId cuando cambia el valor del campo
  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption.value;
    onChange(selectedValue); // Actualiza el valor del campo
    setId(selectedValue); // Llama a setId con el nuevo valor
  };

  return (
    <>
      <label className="font-semibold leading-none text-gray-300">
        {label}
      </label>
      <Select
        placeholder="Search Here..."
        className="text-black placeholder-gray-600 w-full py-2.5 mt-2 text-base transition duration-500 2 ring-gray-400"
        options={options}
        value={
          options ? options.find((option) => option.value === value) : null
        }
        onChange={handleChange}
        onBlur={onBlur}
        ref={ref}
        {...rest}
      />
      <span className="text-red-500 text-center">{errors}</span>
    </>
  );
}

export default InputSelectChange;
