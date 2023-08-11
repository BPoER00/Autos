"use client";
import { useGestiones } from "@/context/GestionesContext";
import { useState, useEffect } from "react";

function Steps() {
  const { changePage, paginate } = useGestiones();
  const [status, setStatus] = useState();

  useEffect(() => {
    if (paginate[0].status === "this") setStatus("List");
    if (paginate[1].status === "this") setStatus("New");
    if (paginate[2].status === "this") setStatus("Buy");
  }, [paginate]);

  return (
    <div className="mx-8 shadow rounded border h-10 mt-4 flex p-1 relative items-center dark:bg-gray-800">
      <div className="flex justify-center w-1/3">
        <span
          className={`${
            status === "List" ? "bg-white text-gray-800" : "text-white"
          } shadow flex items-center justify-center w-1/3 rounded-full h-8 top-[4px] absolute`}
        >
          <button onClick={() => changePage(1)}>Lista de gestiones</button>
        </span>
      </div>
      <div className="flex justify-center w-1/3">
        <span
          className={` ${
            status === "New" ? "bg-white text-gray-800" : "text-white"
          } shadow flex items-center justify-center w-1/3 rounded-full h-8 top-[4px] absolute`}
        >
          <button onClick={() => changePage(2)}>Gestiones</button>
        </span>
      </div>
      <div className="flex justify-center w-1/3">
        <span
          className={` ${
            status === "Buy" ? "bg-white text-gray-800" : "text-white"
          } shadow flex items-center justify-center w-1/3 rounded-full h-8 top-[4px] absolute`}
        >
          <button onClick={() => changePage(3)}>Venta del vehiculo</button>
        </span>
      </div>
    </div>
  );
}

export default Steps;
