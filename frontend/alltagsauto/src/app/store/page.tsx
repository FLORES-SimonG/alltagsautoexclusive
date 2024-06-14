import ModuleBestViewedArray from "@/components/ModuleBestViewedArray";

export default function Store() {
  return (
    <div className="flex flex-col">
      <h2 className="text-center bg-orange-200 text-3xl font-semibold">
        Autos
      </h2>
      <div className="flex flex-row">
        <div className="w-1/4 bg-blue-200">
          <span>Menu filter</span>
        </div>
        <div className="w-3/4 m-10">
          <ModuleBestViewedArray number={5} strict={true} />
        </div>
      </div>
    </div>
  );
}
