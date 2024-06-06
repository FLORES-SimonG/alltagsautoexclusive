import Image from "next/image";
import portada from "../public/portada.svg";

export default function Home() {
  return (
    <div>
      <nav className="bg-primary px-8 py-4">
        <Image src="/logo.svg" alt="logo" width={200} height={200} />
      </nav>
    
      <div className="w-full h-96 relative">
        <Image 
          src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Mountains"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  );
}
