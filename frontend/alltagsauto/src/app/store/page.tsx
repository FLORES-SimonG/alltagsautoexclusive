import { MenuFilter } from "@/components/MenuFilter";
import ModuleBestViewedArray from "@/components/ModuleBestViewedArray";

export default function Store() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row ">
        <div className=" w-96 bg-blue-200">
        
         <MenuFilter />
        </div>
        <div>

      <h2 className="text-center bg-orange-200 text-3xl h-20 flex items-center justify-center font-semibold">
        Autos
      </h2>
        <div className=" my-10 mx-6 flex flex-row flex-wrap ">
          <ModuleBestViewedArray number={5} strict={true} />
        </div>
        </div>
      </div>
    </div>
  );
}
