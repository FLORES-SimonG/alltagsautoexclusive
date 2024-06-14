
import ButtonPrimary from "./buttons/ButtonPrimary";
import ModuleNewCarsArray from "./ModuleNewCarsArray";

export default function NewCars() {
 
  
  return (
    <div className="   items-center justify-between  p-10 flex flex-row lg:gap-4 gap-10 bg-gray-600 flex-wrap   ">
      <div >
        <ModuleNewCarsArray number={2} />
      </div>

      <div className=" flex flex-col  lg:w-1/3   text-customWhite  ">
        <h2 className="font-bold text-4xl ">Die letzte Neuheit</h2>
        <p>
          Verpassen Sie nicht die neuesten und exklusivsten Angebote in unserem
          Katalog!
        </p>
        <div className=" flex justify-center m-6">
          <ButtonPrimary title="Mehr sehen" size="sm" color="bg-indigo-700" customHover="bg-indigo-600" />
        </div>
      </div>
    </div>
  );
}
