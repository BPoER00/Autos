"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProgresBar from "./ProgresBar";
function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <ProgresBar />
      ) : (
        <section
          className="h-screen bg-cover"
          style={{
            backgroundImage:
              "url('https://wallpapers.com/images/featured/car-4k-background-yduvczxgolxxu1nk.jpg')",
          }}
        >
          <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
            <div className="max-w-2xl text-center rounded-xl bg-green-100 p-2 opacity-80">
              <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-black lg:text-7xl">
                Ingreso de Autos
              </h1>

              <p className="mt-6 lg:text-lg text-black">
                Pulse para ir al ingreso
              </p>

              <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                <Link href={"/Login"}>
                  <button
                    className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2 animate-bounce"
                    onClick={() => setLoading(true)}
                  >
                    Click Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default LandingPage;
