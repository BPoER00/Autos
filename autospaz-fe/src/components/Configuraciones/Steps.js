"use client";
import { useConfiguraciones } from "@/context/ConfiguracionesContext";
import { useState, useEffect } from "react";

function Steps() {
  const { changePage, paginate } = useConfiguraciones();
  const [status, setStatus] = useState();

  useEffect(() => {
    if (paginate[0].status === "this") setStatus("Marca");
    if (paginate[1].status === "this") setStatus("Modelo");
    if (paginate[2].status === "this") setStatus("Componente");
  }, [paginate]);

  return (
    <div className="mx-8 shadow rounded border h-10 mt-4 flex p-1 relative items-center dark:bg-gray-800">
      <div className="flex justify-center w-1/3">
        <span
          className={`${
            status === "Marca" ? "bg-white text-gray-800" : "text-white"
          } shadow flex items-center justify-center w-1/3 rounded-full h-8 top-[4px] absolute`}
        >
          <button onClick={() => changePage(1)}>Marcas</button>
        </span>
      </div>
      <div className="flex justify-center w-1/3">
        <span
          className={` ${
            status === "Modelo" ? "bg-white text-gray-800" : "text-white"
          } shadow flex items-center justify-center w-1/3 rounded-full h-8 top-[4px] absolute`}
        >
          <button onClick={() => changePage(2)}>Modelos</button>
        </span>
      </div>
      <div className="flex justify-center w-1/3">
        <span
          className={` ${
            status === "Componente" ? "bg-white text-gray-800" : "text-white"
          } shadow flex items-center justify-center w-1/3 rounded-full h-8 top-[4px] absolute`}
        >
          <button onClick={() => changePage(3)}>Componentes</button>
        </span>
      </div>
    </div>
  );
}

export default Steps;
