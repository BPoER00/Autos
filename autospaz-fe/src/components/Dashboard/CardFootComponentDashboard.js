function CardFootComponentDashboard() {
  return (
    <div className="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold">
        Bryan Emanuel Paz Ramirez - 1190-19-3929
      </h4>
      <ul>
        <li className="mt-3">
          <a
            className="flex items-center text-blue-700 dark:text-gray-100"
            href="https://github.com/BPoER00/Autos"
            target="_blank"
          >
            <span className="inline-flex pl-2">Repositorio Del Proyecto</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CardFootComponentDashboard;
