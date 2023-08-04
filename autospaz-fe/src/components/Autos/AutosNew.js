"use client";
import { useForm, Controller, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidateAuto } from "@/validations/Auto.Validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuto } from "@/context/AutoContext";
import InputText from "../Inputs/InputText";
import InputSelect from "../Inputs/InputSelect";

function page() {
  const { marca, modelo, insert, changePage } = useAuto();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(ValidateAuto),
  });

  const onSubmit = async (e) => {
    const res = await insert(e);
    if (res.status === 204) {
      toast.success("Auto Guardado Correctamente");
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
                "url('https://grandluxorhotels.com/wp-content/uploads/2017/04/IMAGEN_evento_autom%C3%B3vil-1024x683.jpg')",
            }}
          ></div>
          <div className="w-full lg:w-7/12 dark:bg-gray-800 p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Ingreso De Autos!</h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 dark:bg-gray-900 rounded"
            >
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <InputText
                    label={"Placa"}
                    name={"placa"}
                    type={"text"}
                    placeholder={"Ingrese Placa..."}
                    register={register}
                    errors={errors.placa?.message}
                  />
                </div>
                <div className="md:ml-2">
                  <InputText
                    label={"Año"}
                    name={"year"}
                    type={"number"}
                    placeholder={"Ingrese Año..."}
                    register={register}
                    errors={errors.year?.message}
                  />
                </div>
              </div>
              <div className="mb-4">
                <InputSelect
                  label={"Marca"}
                  name={"marca"}
                  options={marca}
                  control={control}
                  placeholder={"Ingrese Marca..."}
                  errors={errors.marca?.message}
                />
              </div>
              <div className="mb-4">
                <InputSelect
                  label={"Modelo"}
                  name={"modelo"}
                  options={modelo}
                  control={control}
                  placeholder={"Ingrese Modelo..."}
                  errors={errors.modelo?.message}
                />
              </div>
              <div className="mb-4">
                <InputText
                  label={"Costo"}
                  name={"price"}
                  type={"number"}
                  placeholder={"Ingrese Costo..."}
                  register={register}
                  errors={errors.costo?.message}
                />
              </div>
              {/* <div className="mb-4">
                <InputText
                  label={"Imagen"}
                  name={"imagen"}
                  type={"file"}
                  placeholder={"Ingrese Imagen..."}
                  register={register}
                  errors={errors.imagen?.message}
                />
              </div> */}
              <div className="mb-6 text-center">
                <button
                  className="w-full mt-3 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Registrar Auto
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

export default page;
