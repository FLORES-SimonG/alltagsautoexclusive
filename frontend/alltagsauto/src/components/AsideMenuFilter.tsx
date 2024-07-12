export default function AsideMenuFilter() {
  return (
    <aside>
      <form className="hidden lg:flex flex-col     ">
        <div className="border-b border-gray-200 p-4">
          <h2 className="flex w-full items-center justify-between bg-white text-lg py-4  ">
            Kategorie & Filter
          </h2>
          <h3 className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">Getriebe</span>
          </h3>
          {/* <!-- Filter section, show/hide based on section state. --> */}
          <div className="py-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="filter-size-0"
                  name="size[]"
                  value="2l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-0"
                  className="ml-3 text-sm text-gray-600"
                >
                  Automatik
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-size-1"
                  name="size[]"
                  value="6l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-1"
                  className="ml-3 text-sm text-gray-600"
                >
                  Manual
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 p-4">
          <h3 className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">Kraftsoff</span>
          </h3>
          {/* <!-- Filter section, show/hide based on section state. --> */}
          <div className="pt-6" id="filter-section-2">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="filter-size-3"
                  name="size[]"
                  value="2l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-3"
                  className="ml-3 text-sm text-gray-600"
                >
                  Benzin
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-size-4"
                  name="size[]"
                  value="6l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-4"
                  className="ml-3 text-sm text-gray-600"
                >
                  Diesel
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-size-5"
                  name="size[]"
                  value="12l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-5"
                  className="ml-3 text-sm text-gray-600"
                >
                  Gas
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-b border-gray-200 p-4">
          <h3 className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">Preis pro Tag</span>
          </h3>
          {/* <!-- Filter section, show/hide based on section state. --> */}
          <div className="pt-6" id="filter-section-3">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="filter-size-6"
                  name="size[]"
                  value="2l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-6"
                  className="ml-3 text-sm text-gray-600"
                >
                  0 - 1000 CHF
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-size-7"
                  name="size[]"
                  value="6l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-7"
                  className="ml-3 text-sm text-gray-600"
                >
                  1000 - 5000 CHF
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-size-8"
                  name="size[]"
                  value="12l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-8"
                  className="ml-3 text-sm text-gray-600"
                >
                  5000 - 10000 CHF
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="filter-size-9"
                  name="size[]"
                  value="12l"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="filter-size-9"
                  className="ml-3 text-sm text-gray-600"
                >
                  +10000 CHF
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-gray-900 text-white py-2 rounded-md">
          Filtern
        </button>
      </form>
    </aside>
  );
}
