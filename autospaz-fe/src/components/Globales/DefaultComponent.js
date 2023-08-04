import React from "react";

//components
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function DefaultComponent({ children }) {
  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <NavBar />
        <SideBar />
        <main className="h-full ml-14 mt-14 mb-10 md:ml-64">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DefaultComponent;
