const GlobalFooter = () =>(
  <footer className="bg-white dark:bg-dark-secondary mt-auto py-6 border-t border-gray-200 dark:border-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} VitaliiStore. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default GlobalFooter;