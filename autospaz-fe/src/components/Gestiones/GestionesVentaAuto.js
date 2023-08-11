import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidateVentaAuto } from "@/validations/Auto.Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useGestiones } from "@/context/GestionesContext";
import InputText from "../Inputs/InputText";
import InputSelect from "../Inputs/InputSelect";

function GestionesVentaAuto() {
  const { auto, update, changePage } = useGestiones();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(ValidateVentaAuto),
  });

  const onSubmit = async (e) => {
    const res = await update(e.id, e);
    if (res.status === 204) {
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
                "url('https://www.lifeder.com/wp-content/uploads/2018/06/gestion-lupa-dinero-negocio-1024x660.jpg')",
            }}
          ></div>
          <div className="w-full lg:w-7/12 dark:bg-gray-800 p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Gestiones!</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 dark:bg-gray-900 rounded"
            >
              <div className="mb-4">
                <InputSelect
                  label={"Auto"}
                  name={"id"}
                  options={auto}
                  control={control}
                  placeholder={"Ingrese auto..."}
                  errors={errors.id?.message}
                />
              </div>
              <div className="mb-4">
                <InputText
                  label={"Precio"}
                  name={"precio"}
                  type={"number"}
                  placeholder={"Ingrese precio..."}
                  register={register}
                  errors={errors.precio?.message}
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full mt-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registrar Gestion
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

export default GestionesVentaAuto;
