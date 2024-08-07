import FormsRegister from "@/components/forms/FormsRegister";
import Image from "next/image";
import logoIcon from "../../../../public/logoPrincipal.svg";
import homeBack from "../../../../public/homeBack.svg"
export default function Register() {	
    return (
        <div>
            <a href="/">
        <Image
            src={homeBack}
            alt="homeBack"
            className=" fixed top-5 left-5 z-10"
        />
        </a>
        <div className="flex flex-row h-screen">
            <div className="bg-gray-800 w-1/2 flex flex-col items-center justify-center">
                <a href="/" className="w-4/6">
                    <Image
                        src={logoIcon}
                        alt="Logo"
                        className="w-full"
                        height={100}
                        width={100}
                    />
                </a>
            </div>
            <div
            className="bg-textPrimary w-1/2 flex flex-col items-center justify-center"
            >
            <FormsRegister/>
            </div>
        </div>
            
        </div>  
    );
}

