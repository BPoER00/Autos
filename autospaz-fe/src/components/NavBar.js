import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

function NavBar() {
  return (
    <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
      <div className="flex justify-end items-center w-full h-14 bg-blue-800 dark:bg-gray-800 header-right">
        <Link href={"/Login"}>
          <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 ">
            <span className="inline-flex justify-center items-center ml-4"></span>
            <span className="ml-2 text-sm tracking-wide truncate">
              <div className="flex items-end ">
                <ArrowLeftCircleIcon className="h-6 w-6 mr-2" />
                <span>Logout</span>
              </div>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
