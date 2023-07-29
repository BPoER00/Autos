function ComponentSidebarTitle({ name }) {
  return (
    <>
      <li className="px-5 hidden md:block">
        <div className="flex flex-row items-center h-8">
          <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
            {name}
          </div>
        </div>
      </li>
    </>
  );
}

export default ComponentSidebarTitle;
