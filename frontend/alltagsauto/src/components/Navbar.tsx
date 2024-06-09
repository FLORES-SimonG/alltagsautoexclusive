import Image from "next/image";



export default function Navbar() {
    return (
        <nav className="bg-gray-800 px-8 py-4">
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </nav>
    );
    }
