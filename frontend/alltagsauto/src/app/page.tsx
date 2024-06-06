import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-primary px-8 py-4">
      
      <Image src="/logo.svg" alt="logo" width={200} height={200} />
    </div>
  );
}
