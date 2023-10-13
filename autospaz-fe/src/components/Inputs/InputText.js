function InputText({ label, name, type, placeholder, register, errors }) {
  return (
    <div className="mb-4">
      <label className="font-semibold leading-none text-gray-300">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg focus:outline-none ring-offset-current ring-offset-2"
        {...register(name)}
      />
      <span className="text-red-500 text-center">{errors}</span>
    </div>
  );
}

export default InputText;
