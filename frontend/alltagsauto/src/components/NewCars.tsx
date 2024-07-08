import ButtonPrimary from "./buttons/ButtonPrimary";
import ModuleNewCarsArray from "./ModuleNewCarsArray";

export default function NewCars() {
  return (
    <div className="items-center justify-between p-10 flex flex-row lg:gap-4 gap-10 bg-gray-600 flex-wrap   ">
      <div>
        <ModuleNewCarsArray number={2} />
      </div>

      <div className=" flex flex-col  lg:w-1/3 text-customWhite  gap-3">
        <h2 className="font-bold text-4xl ">Neuste Zugänge</h2>
        <p>
        Bleiben Sie auf dem Laufenden mit unseren neuesten Fahrzeugen! Entdecken Sie die aktuellsten Zugänge in unserer exklusiven Flotte und finden Sie Ihr nächstes Traumauto.
        </p>
        <div className=" flex justify-center m-4">
          <ButtonPrimary
            title="Mehr sehen"
            size="sm"
            color="bg-indigo-700"
            customHover="bg-indigo-600"
            onClick="store"
          />
        </div>
      </div>
    </div>
  );
}
