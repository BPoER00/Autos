"use client";
import React from "react";
import {
  HomeIcon,
  CurrencyDollarIcon,
  PencilIcon,
  ArrowLongLeftIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import CardPages from "./CardPages";

function NavBar({ children }) {
  const router = useRouter();

  return (
    <div className="h-screen w-full bg-white relative flex overflow-hidden">
      <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
        <button className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <HomeIcon />
        </button>

        <button
          className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
          onClick={() => router.push("/Car")}
        >
          <PencilIcon />
        </button>

        <button
          className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
          onClick={() => router.push("/Car")}
        >
          <CurrencyDollarIcon />
        </button>

        <button className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <ArchiveBoxIcon />
        </button>

        <button className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
          <ArrowLongLeftIcon />
        </button>
      </aside>

      <div className="w-full h-full flex flex-col justify-between">
        <CardPages>{children}</CardPages>
      </div>
    </div>
  );
}

export default NavBar;
