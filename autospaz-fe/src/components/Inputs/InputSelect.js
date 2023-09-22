import Select from "react-select";
import { useController } from "react-hook-form";

function InputSelect({ label, name, options, control, errors, ...rest }) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { required: "This field is required" },
    defaultValue: "",
  });

  const selectedOption =
    options && options.length > 0
      ? options.find((option) => option.value === value)
      : null;

  return (
    <div className="mb-4">
      <label className="font-semibold leading-none text-gray-300">
        {label}
      </label>
      <Select
        placeholder="Search Here..."
        className="text-black placeholder-gray-600 w-full py-2.5 mt-2 text-base transition duration-500 2 ring-gray-400"
        options={options}
        value={selectedOption}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        onBlur={onBlur}
        ref={ref}
        {...rest}
      />
      <span className="text-red-500 text-center">{errors}</span>
    </div>
  );
}

export default InputSelect;
