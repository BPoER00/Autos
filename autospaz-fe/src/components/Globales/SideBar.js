"use client";
import ComponentSidebarTitle from "./ComponentSidebarTitle";
import ComponentSidebarRedirect from "./ComponentSidebarRedirect";
import {
  HomeIcon,
  PlusIcon,
  ViewfinderCircleIcon,
  CheckCircleIcon,
  UserIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import ProgresBar from "../Inputs/ProgresBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SideBar() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setLoading(false);

    const currentUrl = window.location.href;

    setUrl(currentUrl);
  }, []);

  const isDashboard = url.includes("/Dashboard");
  const isAuto = url.includes("/Auto");
  const isRevisiones = url.includes("/Revisiones");
  const isGestiones = url.includes("/Gestiones");
  const isUsuarios = url.includes("/Usuarios");
  const isConfiguraciones = url.includes("/Configuraciones");

  return (
    <>
      {loading ? (
        <ProgresBar />
      ) : (
        <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <ComponentSidebarTitle name={"Opciones"} />

              <Link href={"/Dashboard"}>
                <ComponentSidebarRedirect>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex justify-center items-center mr-1 ${
                        isDashboard ? "text-gray-600" : ""
                      } `}
                    >
                      <HomeIcon className="h-7 w-7" />
                    </span>
                    <span
                      className={`ml-2 text-sm tracking-wide truncate ${
                        isDashboard ? "text-gray-600" : ""
                      }`}
                    >
                      Dashboard
                    </span>
                  </div>
                </ComponentSidebarRedirect>
              </Link>

              <button
                type="button"
                onClick={() => {
                  router.push("/Autos");
                  setLoading(true);
                }}
                disabled={isAuto}
              >
                <ComponentSidebarRedirect>
                  <div className="flex items-center justify-between">
                    <p
                      className={`inline-flex justify-center items-center mr-1 ${
                        isAuto ? "text-gray-600" : ""
                      }`}
                    >
                      <PlusIcon className="h-7 w-7" />
                    </p>
                    <span
                      className={`ml-2 text-sm tracking-wide truncate ${
                        isAuto ? "text-gray-600" : ""
                      }`}
                    >
                      Autos
                    </span>
                  </div>
                </ComponentSidebarRedirect>
              </button>

              <button
                onClick={() => {
                  router.push("/Revisiones");
                  setLoading(true);
                }}
                disabled={isRevisiones}
              >
                <ComponentSidebarRedirect>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex justify-center items-center mr-1 ${
                        isRevisiones ? "text-gray-600" : ""
                      }`}
                    >
                      <ViewfinderCircleIcon className="h-7 w-7" />
                    </span>
                    <span
                      className={`ml-2 text-sm tracking-wide truncate ${
                        isRevisiones ? "text-gray-600" : ""
                      }`}
                    >
                      Revisiones
                    </span>
                  </div>
                </ComponentSidebarRedirect>
              </button>

              <button
                onClick={() => {
                  router.push("/Gestiones");
                  setLoading(true);
                }}
                disabled={isGestiones}
              >
                <ComponentSidebarRedirect>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex justify-center items-center mr-1 ${
                        isGestiones ? "text-gray-600" : ""
                      }`}
                    >
                      <CheckCircleIcon className="h-7 w-7" />
                    </span>
                    <span
                      className={`ml-2 text-sm tracking-wide truncate ${
                        isGestiones ? "text-gray-600" : ""
                      }`}
                    >
                      Gestiones
                    </span>
                  </div>
                </ComponentSidebarRedirect>
              </button>

              {/* <button
                onClick={() => {
                  router.push("/Usuarios");
                  setLoading(true);
                }}
                disabled={isUsuarios}
              >
                <ComponentSidebarRedirect>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex justify-center items-center mr-1 ${
                        isUsuarios ? "text-gray-600" : ""
                      }`}
                    >
                      <UserIcon className="h-7 w-7" />
                    </span>
                    <span
                      className={`ml-2 text-sm tracking-wide truncate ${
                        isUsuarios ? "text-gray-600" : ""
                      }`}
                    >
                      Usuarios
                    </span>
                  </div>
                </ComponentSidebarRedirect>
              </button> */}

              <button
                onClick={() => {
                  router.push("/Configuraciones");
                  setLoading(true);
                }}
                disabled={isConfiguraciones}
              >
                <ComponentSidebarRedirect>
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex justify-center items-center mr-1 ${
                        isConfiguraciones ? "text-gray-600" : ""
                      }`}
                    >
                      <ComputerDesktopIcon className="h-7 w-7" />
                    </span>
                    <span
                      className={`ml-2 text-sm tracking-wide truncate${
                        isConfiguraciones ? "text-gray-600" : ""
                      }`}
                    >
                      Configuracion
                    </span>
                  </div>
                </ComponentSidebarRedirect>
              </button>
            </ul>
            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
              Copyright @2021 MrKoBP
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
