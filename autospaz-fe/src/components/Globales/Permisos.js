"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProgresBar from "../Inputs/ProgresBar";

function Permisos() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <ProgresBar />
      ) : (
        <div
          className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://c4.wallpaperflare.com/wallpaper/184/190/380/auto-minimalism-911-porsche-machine-hd-wallpaper-preview.jpg')",
          }}
        >
          <div className="py-3 sm:max-w-xl sm:mx-auto">
            <div
              className="bg-white min-w-1xl flex flex-col shadow-lg"
              style={{ backgroundColor: "#36393f" }}
            >
              <div className="px-16 py-7">
                {/* imagen */}
                <p className="text-gray-300 text-center">
                  Error no tienes permisos suficientes para realizar esta accion
                </p>
                <div className="flex m-auto">{/* Imagen */}</div>
                <Link
                  href="/Dashboard"
                  onClick={() => {
                    setLoading(true);
                  }}
                >
                  <p
                    className="text-white text-center w-full m-auto shadow-md py-2 px-2 rounded-sm mt-3"
                    style={{
                      backgroundColor:
                        "hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%)",
                    }}
                  >
                    Volver Al Dashboard
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Permisos;
