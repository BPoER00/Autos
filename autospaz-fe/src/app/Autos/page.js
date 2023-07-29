"use client";
import { useState, useEffect } from "react";
import DefaultComponent from "@/components/DefaultComponent";
import AutoProvider from "@/context/AutoContext";
import { useRouter } from "next/navigation";

function Content({ children }) {
  const [status, setStatus] = useState();
  const router = useRouter();

  useEffect(() => {
    setStatus("List");
  }, []);

  const handleList = () => {
    setStatus("List");
    router.push("/Autos/List");
  };

  const handleNew = () => {
    setStatus("New");
    router.push("/Autos/New");
  };

  return (
    <>
      <DefaultComponent>
        <AutoProvider>
          <div className="mx-8 shadow rounded border h-10 mt-4 flex p-1 relative items-center dark:bg-gray-800">
            <div className="w-full flex justify-center">
              <span
                className={`${
                  status === "List" ? "bg-white" : ""
                } shadow text-gray-800 flex items-center justify-center w-1/2 rounded-full h-8 top-[4px] absolute left-1`}
              >
                <button onClick={handleList}>Lista De Autos</button>
              </span>
            </div>
            <div className="w-full flex justify-center">
              <span
                className={` ${
                  status === "New" ? "bg-white" : ""
                } shadow text-gray-800 flex items-center justify-center w-1/2 rounded-full h-8 top-[4px] absolute right-1`}
              >
                <button onClick={handleNew}>Lista De Autos</button>
              </span>
            </div>
          </div>
          {children}
        </AutoProvider>
      </DefaultComponent>
    </>
  );
}

export default Content;
