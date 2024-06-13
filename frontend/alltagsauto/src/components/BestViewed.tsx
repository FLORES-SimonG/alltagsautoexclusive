import carsExample, { sortedCarsByClicks } from "@/helpers/carsExample";
import { Card } from "flowbite-react";
import Image from "next/image";
import CardProduct from "./CardProduct";
import ButtonPrimary from "./buttons/ButtonPrimary";
// import {sortedCarsById} from "@/helpers/carsExample";


export default function BestViewed() {
  // console.log(carsExample);
  const sortedCarsClick = sortedCarsByClicks(carsExample);

  return (
    <div className=" h-3/4  items-center justify-center  p-10 flex flex-row lg:gap-4 gap-10 bg-gray-700 flex-wrap  lg:flex-nowrap ">
      <div className=" flex flex-col  lg:w-1/3 flex-wrap text-customWhite ">
        <h2 className="font-bold text-4xl ">Am häufigsten angesehen</h2>
        <p>Sie sind möglicherweise am gefragtesten.</p>
        <div className=" flex justify-center m-6">
          <ButtonPrimary title="Mehr sehen" size="sm" color="bg-indigo-700" customHover="bg-indigo-600"/>
        </div>
      </div>
      <div className="lg:w-2/3  flex flex-row justify-center gap-10 flex-wrap ">
        {sortedCarsClick.map((car, index) => {
          if (index < 2) {
            return (
              <CardProduct
              key={car.id}
                image={car.mainImage}
                price={car.pricePerDayCHF}
                transmission={car.transmission}
                fuelType={car.fuelType}
                location={car.location}
                name={car.name}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
