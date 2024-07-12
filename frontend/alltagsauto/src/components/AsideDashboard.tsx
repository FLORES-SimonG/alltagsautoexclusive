"use client";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Asegúrate de que esto es de next/navigation
import logoIcon from "../../public/logoPrincipal.svg";
import homeBack from "../../public/homeBack.svg";
import Link from "next/link";

export default function AsideDashboard() {

    const pages = [
        {   
            name: "CARS CREATE", 
            href: "/dashboardAdmin" },
        {
            name: "CARS LIST",
            href: "/dashboardAdmin/cars",

        },
    ]

    return (
        <div className="h-screen items-center justify-center p-5 flex flex-row lg:gap-4 gap-10  flex-wrap lg:flex-nowrap">
            <div className="bg-textPrimary rounded-2xl shadow-2xl h-full flex flex-col justify-between w-96">
                <div>
                    <div className="bg-gray-800 py-5 px-10 rounded-t-2xl">
                        <a href="/">
                            <Image src={logoIcon} alt="Logo de Un Litro de Leche Alta Gracia" />
                        </a>
                    </div>

                </div>
                <div className="flex flex-col content-center flex-nowrap justify-start items-start h-full">
                    <div className="flex flex-col items-start justify-between px-10 gap-2 my-10">
                        {pages.map(({ name, href }, key) => (
                            <Link
                                key={key}
                                href={href}
                                className={`text-lg font-medium transition-all hover:text-tertiary cursor-pointer `}
                                id={`nav-link-${key}`}
                            >
                                <span className="z-10">{name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center bg-gray-800 rounded-b-2xl">
                    <a
                        href="/"
                        className="flex flex-row m-2 p-2 rounded-full cursor-pointer transition-all hover:scale-105"
                    >
                        <img src={homeBack.src} alt="Fondo de la página de inicio" />
                    </a>
                </div>
            </div>
        </div>
    );
}
