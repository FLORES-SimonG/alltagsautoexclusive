import carsExample from "@/helpers/carsExample";
import { Card } from "flowbite-react";
import Image from "next/image";
import CardProduct from "./CardProduct";

export default function LatestCars() {
    let maxId1 = -1, maxId2 = -1;
    let maxCar1 = null, maxCar2 = null;
  
    for (let car of carsExample) {
      if (car.id > maxId1) {
        maxId2 = maxId1;
        maxCar2 = maxCar1;
        maxId1 = car.id;
        maxCar1 = car;
      } else if (car.id > maxId2) {
        maxId2 = car.id;
        maxCar2 = car;
      }
    }
  
    const maxCars = [maxCar1, maxCar2].filter(Boolean);
  

  return (
    <div className=" h-3/4  items-center justify-around  p-10 flex flex-row lg:gap-4 gap-10 bg-gray-600 flex-wrap  lg:flex-nowrap ">
      <div className=" flex flex-row justify-start gap-10 flex-wrap ">
      {maxCars.map((car) => (
      car ? (
        <CardProduct
          key={car.id}
          image={car.mainImage}
          price={car.pricePerDayCHF}
          transmission={car.transmission}
          fuelType={car.fuelType}
          location={car.location}
          name={car.name}
        />
      ) : (
        "No hay coches disponibles"
      )
    ))}
      </div>
      <div className=" flex flex-col  lg:w-1/3 flex-wrap text-customWhite ">
        <h2 className="font-bold text-4xl ">Die letzte Neuheit</h2>
        <p>
          Verpassen Sie nicht die neuesten und exklusivsten Angebote in unserem
          Katalog!
        </p>
      </div>
    </div>
  );
}
