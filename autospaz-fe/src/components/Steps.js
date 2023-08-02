"use client";
import { useAuto } from "@/context/AutoContext";
import { useState, useEffect } from "react";

function Steps() {
  const { changePage, paginate } = useAuto();
  const [status, setStatus] = useState();

  useEffect(() => {
    console.log(paginate);
    if (paginate[0].status === "this") setStatus("List");
    if (paginate[1].status === "this") setStatus("New");
  }, [paginate]);

  const handleList = () => {
    setStatus("List");
    changePage(1);
  };

  const handleNew = () => {
    setStatus("New");
    changePage(2);
  };

  return (
    <div className="mx-8 shadow rounded border h-10 mt-4 flex p-1 relative items-center dark:bg-gray-800">
      <div className="w-full flex justify-center">
        <span
          className={`${
            status === "List" ? "bg-white text-gray-800" : "text-white"
          } shadow flex items-center justify-center w-1/2 rounded-full h-8 top-[4px] absolute left-1`}
        >
          <button onClick={handleList}>Lista De Autos</button>
        </span>
      </div>
      <div className="w-full flex justify-center">
        <span
          className={` ${
            status === "New" ? "bg-white text-gray-800" : "text-white"
          } shadow flex items-center justify-center w-1/2 rounded-full h-8 top-[4px] absolute right-1`}
        >
          <button onClick={handleNew}>Agregar Autos</button>
        </span>
      </div>
    </div>
  );
}

export default Steps;
