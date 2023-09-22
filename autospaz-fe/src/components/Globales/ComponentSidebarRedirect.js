function ComponentSidebarRedirect({ children }) {
  return (
    <>
      <li>
        <div className="relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 hover:animate-pulse text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
          <span className="inline-flex justify-center items-center ml-4"></span>
          <span className="ml-2 text-sm tracking-wide truncate">{children}</span>
        </div>
      </li>
    </>
  );
}

export default ComponentSidebarRedirect;
