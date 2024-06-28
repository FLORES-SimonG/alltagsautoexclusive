"use client";
// import { MenuFilter } from "@/components/MenuFilter";
import ModuleBestViewedArray from "@/components/ModuleBestViewedArray";
// import FilterTopAside from "@/components/FilterTopAside";

// import { useState } from "react";
// import {
//   Dialog,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   Transition,
//   TransitionChild,
// } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";
import MobileFilterProducts from "@/components/MobileFilterProducts";

// const sortOptions = [
//   { name: "Most Popular", href: "#", current: true },
//   { name: "Best Rating", href: "#", current: false },
//   { name: "Newest", href: "#", current: false },
//   { name: "Price: Low to High", href: "#", current: false },
//   { name: "Price: High to Low", href: "#", current: false },
// ];
// const subCategories = [
//   { name: "Totes", href: "#" },
//   { name: "Backpacks", href: "#" },
//   { name: "Travel Bags", href: "#" },
//   { name: "Hip Bags", href: "#" },
//   { name: "Laptop Sleeves", href: "#" },
// ];
// const filters = [
//   {
//     id: "color",
//     name: "Color",
//     options: [
//       { value: "white", label: "White", checked: false },
//       { value: "beige", label: "Beige", checked: false },
//       { value: "blue", label: "Blue", checked: true },
//       { value: "brown", label: "Brown", checked: false },
//       { value: "green", label: "Green", checked: false },
//       { value: "purple", label: "Purple", checked: false },
//     ],
//   },
//   {
//     id: "category",
//     name: "Category",
//     options: [
//       { value: "new-arrivals", label: "New Arrivals", checked: false },
//       { value: "sale", label: "Sale", checked: false },
//       { value: "travel", label: "Travel", checked: true },
//       { value: "organization", label: "Organization", checked: false },
//       { value: "accessories", label: "Accessories", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "Size",
//     options: [
//       { value: "2l", label: "2L", checked: false },
//       { value: "6l", label: "6L", checked: false },
//       { value: "12l", label: "12L", checked: false },
//       { value: "18l", label: "18L", checked: false },
//       { value: "20l", label: "20L", checked: false },
//       { value: "40l", label: "40L", checked: true },
//     ],
//   },
// ];

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Store() {
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div>
      <div className="bg-white">
        <div>
          {/* <!--
      Mobile filter dialog

      Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    --> */}

          {/* <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}

          {/* <!--
          Off-canvas menu, show/hide based on off-canvas menu state.

          Entering: "transition ease-in-out duration-300 transform"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transition ease-in-out duration-300 transform"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
          {/* //!Mobile Filter */}
          <MobileFilterProducts />
          {/* //!FIN Mobile Filter */}

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Alle Inserate

              </h1>

              <div className="flex items-center">
                <div className="relative inline-block text-left">
                  <div className="flex gap-8">
                    <div className="relative">
                      <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                          <span className="text-sm font-medium">
                            {" "}
                            Sortieren nach{" "}
                          </span>

                          <span className="transition group-open:-rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </summary>

                        <div className="z-50 group-open:absolute group-open:end-0 group-open:top-auto group-open:mt-2">
                          <div className="w-96 rounded border border-gray-200 bg-white">
                            <header className="flex items-center justify-between p-4">
                              <span className="text-sm text-gray-700">
                                {" "}
                                0 Selected{" "}
                              </span>

                              <button
                                type="button"
                                className="text-sm text-gray-900 underline underline-offset-4"
                              >
                                Reset
                              </button>
                            </header>

                            <ul className="space-y-1 border-t border-gray-200 p-4">
                              <li>
                                <label
                                  htmlFor="FilterInStock"
                                  className="inline-flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    id="FilterInStock"
                                    className="size-5 rounded border-gray-300"
                                  />

                                  <span className="text-sm font-medium text-gray-700">
                                    {" "}
                                    Jahrgang (neu){" "}
                                  </span>
                                </label>
                              </li>

                              <li>
                                <label
                                  htmlFor="FilterPreOrder"
                                  className="inline-flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    id="FilterPreOrder"
                                    className="size-5 rounded border-gray-300"
                                  />

                                  <span className="text-sm font-medium text-gray-700">
                                    {" "}
                                    Jahrgang (alt){" "}
                                  </span>
                                </label>
                              </li>

                              <li>
                                <label
                                  htmlFor="FilterOutOfStock"
                                  className="inline-flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    id="FilterOutOfStock"
                                    className="size-5 rounded border-gray-300"
                                  />

                                  <span className="text-sm font-medium text-gray-700">
                                    {" "}
                                    Preis (hoch){" "}
                                  </span>
                                </label>
                              </li>
                              <li>
                                <label
                                  htmlFor="FilterOutOfStock"
                                  className="inline-flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    id="FilterOutOfStock"
                                    className="size-5 rounded border-gray-300"
                                  />

                                  <span className="text-sm font-medium text-gray-700">
                                    {" "}
                                    Preis (tief){" "}
                                  </span>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>

                   
                  </div>
                </div>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6 ">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                  
                    <li>
                      <a href="#">Ferrari</a>
                    </li>
                    <li>
                      <a href="#">Fiat</a>
                    </li>
                    <li>
                      <a href="#">Ford</a>
                    </li>
                    <li>
                      <a href="#">Mercedes Benz</a>
                    </li>
                  </ul>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-0"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">Farbe</span>
                        <span className="ml-6 flex items-center">
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* <!-- Filter section, show/hide based on section state. --> */}
                    <div className="pt-6" id="filter-section-0">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="filter-color-0"
                            name="color[]"
                            value="white"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-0"
                            className="ml-3 text-sm text-gray-600"
                          >
                            White
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-1"
                            name="color[]"
                            value="beige"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-1"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Beige
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-2"
                            name="color[]"
                            value="blue"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-2"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Blue
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-3"
                            name="color[]"
                            value="brown"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-3"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Brown
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-4"
                            name="color[]"
                            value="green"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-4"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Green
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-color-5"
                            name="color[]"
                            value="purple"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-color-5"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Purple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-2"
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          Kraftsoff
                        </span>
                        <span className="ml-6 flex items-center">
                          {/* <!-- Expand icon, show/hide based on section open state. --> */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
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

      {/* <div className="flex flex-col">
      <div className="flex flex-row ">
        <div className=" w-96 bg-blue-200">
          <MenuFilter />
        </div>
        <div>
          <div className="flex flex-col gap-0 ">
            <div className="flex flex-row items-center justify-between p-5">
              <h2 className="  text-3xl h-10 items-start justify-center flex flex-col font-semibold">
                Alle Inserate
              </h2>

              <div>
                <FilterTopAside />
              </div>
            </div>
            <hr className="" />
          </div>
          <div className=" my-10 mx-6 flex flex-row flex-wrap ">
            <ModuleBestViewedArray number={5} strict={true} />
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
}
