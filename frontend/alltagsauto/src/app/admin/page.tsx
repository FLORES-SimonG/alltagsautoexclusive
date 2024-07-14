import AdminAsideDashboard from "@/components/AdminAsideDashboard";
import InProgress from "./../../components/InProgress";
import Image from "next/image";
import logoIcon from "../../../public/logoPrincipal.svg";

export default function Admin() {
  return (
    <>
      <div
        className="flex flex-row flex-nowrap h-screen"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <AdminAsideDashboard />
        <div className="flex-grow flex items-center justify-center">
          <Image src={logoIcon} alt="logo" height={300} width={300} />
        </div>
      </div>
    </>
  );
}
