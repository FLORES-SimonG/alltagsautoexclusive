import carsExample from "@/helpers/carsExample";
import Image from "next/image";

export default function BestViewed() {
  console.log(carsExample);

  return (
    <div className=" h-3/4  items-center justify-center  p-10 flex flex-row lg:gap-4 gap-10 bg-gray-700 text-customWhite  flex-wrap ">
      <div className=" flex flex-col lg:w-1/3 flex-wrap">
        <h2 className="font-bold text-4xl">Am häufigsten angesehen</h2>
        <p>Sie sind möglicherweise am gefragtesten</p>
      </div>
      <div className="lg:w-2/3  flex flex-row justify-center gap-10 flex-wrap">
        <div className="flex flex-col gap-2">
          <Image
            src={carsExample[0].mainImage}
            alt="car"
            width={384}
            height={384}
            className=" rounded-xl"
          />
          <div className="flex flex-row justify-between mx-2">
            <div className="flex flex-col gap-1">
              <p>{carsExample[0].name}</p>
              <p>{carsExample[0].transmission}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>CHF {carsExample[0].pricePerDayCHF}</p>
              <p>{carsExample[0].fuelType}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src={carsExample[1].mainImage}
            alt="car"
            width={384}
            height={384}
            className=" rounded-xl"
          />
          <div className="flex flex-row justify-between mx-2">
            <div className="flex flex-col gap-1">
              <p>{carsExample[1].name}</p>
              <p>{carsExample[1].transmission}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>CHF {carsExample[1].pricePerDayCHF}</p>
              <p>{carsExample[1].fuelType}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
