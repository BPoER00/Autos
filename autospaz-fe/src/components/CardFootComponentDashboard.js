function CardFootComponentDashboard() {
  return (
    <div className="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold">
        Have taken ideas & reused components from the following resources:
      </h4>
      <ul>
        <li className="mt-3">
          <a
            className="flex items-center text-blue-700 dark:text-gray-100"
            href="https://tailwindcomponents.com/component/sidebar-navigation-1"
            target="_blank"
          >
            <span className="inline-flex pl-2">Sidebar Navigation</span>
          </a>
        </li>
        <li className="mt-2">
          <a
            className="flex items-center text-blue-700 dark:text-gray-100"
            href="https://tailwindcomponents.com/component/contact-form-1"
            target="_blank"
          >
            <span className="inline-flex pl-2">Contact Form</span>
          </a>
        </li>
        <li className="mt-2">
          <a
            className="flex items-center text-blue-700 dark:text-gray-100"
            href="https://tailwindcomponents.com/component/trello-panel-clone"
            target="_blank"
          >
            <span className="inline-flex pl-2">Section: Task Summaries</span>
          </a>
        </li>
        <li className="mt-2">
          <a
            className="flex items-center text-blue-700 dark:text-gray-100"
            href="https://windmill-dashboard.vercel.app/"
            target="_blank"
          >
            <span className="inline-flex pl-2">Section: Client Table</span>
          </a>
        </li>
        <li className="mt-2">
          <a
            className="flex items-center text-blue-700 dark:text-gray-100"
            href="https://demos.creative-tim.com/notus-js/pages/admin/dashboard.html"
            target="_blank"
          >
            <span className="inline-flex pl-2">Section: Social Traffic</span>
          </a>
        </li>
        <li className="mt-2">
          <a
            className="flex items-center text-blue-700 dark:text-gray-100"
            href="https://mosaic.cruip.com"
            target="_blank"
          >
            <span className="inline-flex pl-2">Section: Recent Activities</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CardFootComponentDashboard;
