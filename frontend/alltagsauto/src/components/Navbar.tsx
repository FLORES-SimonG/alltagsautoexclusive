import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-8 py-3 flex flex-row justify-center lg:justify-between items-center">
      <a href="#">
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </a>
      <ul className="hidden lg:flex justify-center gap-10">
        <li>
          <a
            href="#"
            className="text-customWhite hover:text-secondary/95 transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-customWhite hover:text-secondary/95 transition-colors"
          >
            Über uns
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-customWhite hover:text-secondary/95 transition-colors"
          >
            Autos
          </a>
        </li>
        {/* <li>
            <a href="#" className="text-customWhite hover:text-secondary/95 transition-colors">
              Contact
            </a>
          </li> */}
      </ul>
      
      <button className="text-white hidden lg:flex py-3 px-10 justify-center items-center gap-8 border-white border-2 rounded-lg hover:border-tertiary transition-colors">
        Anmelden
      </button>
    </nav>
  );
}
