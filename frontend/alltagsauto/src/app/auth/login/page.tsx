import Image from "next/image";
import logoIcon from "../../../../public/logoPrincipal.svg";
import FormsLogin from "@/components/forms/FormsLogin";
export default function Login() {
    return (
        <div>
            <a href="/">

{/*<img
  src={homeBack.src}
  alt="Fondo de la página de inicio"
  className=" fixed top-5 left-5 z-10"
/>*/}
</a>
<div className="flex flex-row h-screen">
<div className="bg-primary w-1/2 flex flex-col items-center justify-center">
  <a href="/" className="w-4/6"
    ><Image
      src={logoIcon}
      alt="Logo de Un Litro de Leche Alta Gracia"
      className="w-full"
    />
    </a>
</div>
<div
  className="bg-textPrimary w-1/2 flex flex-col items-center justify-center"
>
<FormsLogin/>
{/*  <button
        id="buttonLogin"
        className="bg-secondary flex flex-row items-center justify-center transition-all text-textSecondary   py-1 rounded-full text-lg shadow-3xl hover:scale-105 focus:shadow-none font-medium  whitespace-nowrap "
      >
        <div class="flex flex-row gap-1 items-center justify-center content-center w-64 ">
          <img
            src={iconGoogle}
            alt="icono de google"
            className="w-6 h-6 "
          />
          Continuar con Google
        </div>
      </button>
      */}
</div>
</div>
        </div>
    );
}