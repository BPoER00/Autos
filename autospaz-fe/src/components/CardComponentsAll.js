function CardComponentsAll({ children }) {
  return (
    <div className="mt-4 mx-4">
      <div className="p-10 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md max-h-[75vh]">
        {children}
      </div>
    </div>
  );
}

export default CardComponentsAll;
