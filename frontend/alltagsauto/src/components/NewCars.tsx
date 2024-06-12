import carsExample from "@/helpers/carsExample";
import { Card } from "flowbite-react";
import Image from "next/image";
// import CardProduct from "./CardProduct";
import {sortedCarsById} from "@/helpers/carsExample";



export default function NewCars() {
  // console.log(carsExample);
  const sortedCars = sortedCarsById(carsExample);
  return (
    <div className=" h-3/4  items-center justify-center  p-10 flex flex-row lg:gap-4 gap-10 bg-gray-600 flex-wrap  lg:flex-nowrap ">
     
      {/* <div className="lg:w-3/5  flex flex-row justify-start gap-10 flex-wrap ">
        {sortedCars.map((car, index) => {
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
      </div> */}
      <div className=" flex flex-col  lg:w-1/3 flex-wrap text-customWhite ">
        <h2 className="font-bold text-4xl ">Die letzte Neuheit</h2>
        <p>Verpassen Sie nicht die neuesten und exklusivsten Angebote in unserem Katalog!</p>
      </div>
    </div>
  );
}
