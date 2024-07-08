import ButtonPrimary from "./buttons/ButtonPrimary";
import ModuleBestViewedArray from "./ModuleBestViewedArray";

export default function BestViewed() {
  return (
    <div className=" h-3/4  items-center justify-center  p-10 flex flex-row lg:gap-4 gap-10 bg-gray-700 flex-wrap  lg:flex-nowrap ">
      <div className=" flex flex-col gap-3  lg:w-1/3 flex-wrap text-customWhite ">
        <h2 className="font-bold text-4xl ">Am häufigsten angesehen</h2>
        <p>Entdecken Sie die beliebtesten Fahrzeuge auf unserer Plattform! Hier finden Sie die Autos, die bei unseren Nutzern besonders begehrt sind. Lassen Sie sich inspirieren und finden Sie Ihren Traumwagen aus unserer exklusiven Auswahl.</p>
        <div className=" flex justify-center m-4">
          <ButtonPrimary
            title="Mehr sehen"
            size="sm"
            color="bg-indigo-700"
            customHover="bg-indigo-600"
            onClick="/store"
          />
        </div>
      </div>
      <ModuleBestViewedArray number={2} strict={true} />
    </div>
  );
}
