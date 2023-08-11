import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidateModelos } from "@/validations/Modelos.Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useModelos } from "@/context/ModelosContext";
import InputText from "../../Inputs/InputText";

function ModelosNew() {
  const { insert, changePage } = useModelos();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidateModelos),
  });

  const onSubmit = async (e) => {
    const res = await insert(e);
    if (res.status === 201) {
      toast.success("Revision Realizada Correctamente");
      await sleep(3000);
      changePage(1);
    } else if (res.status === 400 || res.status === 401) {
      toast.warning(`Error ${res.data.message}`);
    }
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-4/4 lg:w-11/12 flex">
          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
            style={{
              backgroundImage:
                "url('https://noticias.coches.com/wp-content/uploads/2016/02/logos-marcas-coches.jpg')",
            }}
          ></div>
          <div className="w-full lg:w-7/12 dark:bg-gray-800 p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Modelos!</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 dark:bg-gray-900 rounded"
            >
              <div className="mb-4">
                <InputText
                  label={"Nombre"}
                  name={"name"}
                  type={"text"}
                  placeholder={"Ingrese nombre..."}
                  register={register}
                  errors={errors.name?.message}
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full mt-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registrar Marca
                </button>
              </div>
              <hr className="mb-6 border-t" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelosNew