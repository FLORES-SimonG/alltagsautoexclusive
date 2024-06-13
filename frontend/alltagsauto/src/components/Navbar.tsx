import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-8 py-3 flex flex-row justify-between items-center">
      <Image src="/logo.svg" alt="logo" width={200} height={200} />
      <ul className="flex justify-center gap-10">
        <li>
          <a href="#" className="text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Über uns
          </a>
        </li>
        <li>
          <a href="#" className="text-white">
            Autos
          </a>
        </li>
        {/* <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li> */}
      </ul>
      <button className="text-white flex py-3 px-10 justify-center items-center gap-8 border-white border-2 rounded-lg">Anmelden</button>
    </nav>
  );
}
