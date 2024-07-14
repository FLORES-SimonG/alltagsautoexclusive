

// import Image from "next/image";
import logoIcon from "../../public/logoPrincipal.svg";
import usersExample from "@/helpers/usersExample";
import Image from "next/image";


export default function AdminAsideDashboard(){
    return (
          
      <div className="flex bg-white flex-col justify-between border-e  w-1/5">
      <div className="px-4 py-6">
      <span className="flex justify-center items-center text-lg font-medium h-10 w-full place-content-center rounded-lg bg-yellow-100  text-gray-600">
        Admin
        {/* <Image src={logoIcon} alt="logo" /> */}
      </span>

      <ul className="mt-6 space-y-1">
      <li>
            <a
              href="/"
              className="  block rounded-lg  px-4 py-2 text-md font-medium text-gray-700"
            >
              Home
            </a>
          </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium">Liste der Autos & Users</span>

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
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Users
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Autos
                </a>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            New Car
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Invoices
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
              {/* <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Details
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-red-100 hover:text-red-700"
                >
                  Delete Account
                </a>
              </li> */}

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

    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a
        href="#"
        className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
      >
        <img
          className="size-10 rounded-full object-cover"
            src={usersExample[1].photo}
            alt={usersExample[1].name}
            
        />

        <div>
          <p className="text-xs">
            <strong className="block font-medium">{usersExample[1].name}</strong>

            <span> {usersExample[1].email} </span>
          </p>
        </div>
      </a>
    </div>
  </div>);
}