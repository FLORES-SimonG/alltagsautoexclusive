// import Image from "next/image";
// import logoIcon from "../../public/logoPrincipal.svg";
import usersExample from "@/helpers/usersExample";
import Image from "next/image";
import Link from "next/link";

export default function AsideDashboard() {
  return (
    <div className="flex bg-white flex-col justify-between border-e  w-1/5">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="/"
              className="  block rounded-lg  px-4 py-2 text-sm font-medium text-gray-500"
            >
              Home
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Account </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-red-100 hover:text-red-700"
                  >
                    Delete Account
                  </a>
                </li>

                <li>
                  <form action="#">
                    <button
                      type="submit"
                      className="w-full rounded-lg px-4 py-2 text-sm font-medium text-red-500 [text-align:_inherit] hover:bg-gray-100 hover:text-red-600"
                    >
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className=" inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            className="size-10 rounded-full object-cover"
            src={usersExample[0].photo}
            alt={usersExample[0].name}
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">
                {usersExample[0].name}
              </strong>

              <span> {usersExample[0].email} </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
