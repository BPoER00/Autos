function SideBar() {
  return (
    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Main
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4"></span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4"></span>
              <span className="ml-2 text-sm tracking-wide truncate">Board</span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">
                New
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4"></span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Messages
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4"></span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Notifications
              </span>
              <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                1.2k
              </span>
            </a>
          </li>
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Settings
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4"></span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Profile
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4"></span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Settings
              </span>
            </a>
          </li>
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Copyright @2021
        </p>
      </div>
    </div>
  );
}

export default SideBar;
