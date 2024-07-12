"use client";

import ModuleBestViewedArray from "@/components/ModuleBestViewedArray";

import MobileFilterProducts from "@/components/MobileFilterProducts";

export default function Store() {
  return (
    <div>
      <div className="bg-white">
        <div>
          {/* //!Mobile Filter */}
          {/* <MobileFilterProducts /> */}
          {/* //!FIN Mobile Filter */}

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <section aria-labelledby="products-heading" className="pb-24 pt-6 ">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <form className="hidden lg:block  ">
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        Getriebe
                      </span>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className="pt-6" id="filter-section-2">
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
                  <div className="border-b border-gray-200 py-6">
                    <h3 className="flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        Kraftsoff
                      </span>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className="pt-6" id="filter-section-2">
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
                            Benzin
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
                            Diesel
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-size-2"
                            name="size[]"
                            value="12l"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-size-2"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Gas
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="lg:col-span-3 ">
                  <ModuleBestViewedArray number={5} strict={true} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
