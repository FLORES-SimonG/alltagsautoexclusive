import Image from "next/image";
import logoIcon from "../../../../public/logoPrincipal.svg";
import homeBack from "../../../../public/homeBack.svg"
import FormsLogin from "@/components/forms/FormsLogin";
export default function Login() {
    return (
    <div>
        <a href="/">
        <Image
            src={homeBack}
            alt="Fondo de la página de inicio"
            className=" fixed top-5 left-5 z-10"
        />
        </a>
        <div className="flex flex-row h-screen">
            <div className="bg-gray-800 w-1/2 flex flex-col items-center justify-center">
                <a href="/" className="w-4/6">
                    <Image
                        src={logoIcon}
                        alt="Logo de Un Litro de Leche Alta Gracia"
                        className="w-full"
                        height={100}
                        width={100}
                    />
                </a>
            </div>
            <div
            className="bg-textPrimary w-1/2 flex flex-col items-center justify-center"
            >
            <FormsLogin/>
            </div>
        </div>
    </div>
    );
}