function CardInfoComponentDashboard({ name, value, moneda }) {
  return (
    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12"></div>
      <div className="text-right">
        <p
          className={`text-2xl ${
            value >= 0 ? "text-green-600" : "text-red-500"
          }`}
        >
          {moneda}{value}
        </p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CardInfoComponentDashboard;
