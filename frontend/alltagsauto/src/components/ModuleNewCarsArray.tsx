import carsExample from "@/helpers/carsExample";

import CardProduct from "./CardProduct";
import { sortedCarsById } from "@/helpers/carsExample";

interface ModuleNewsCarsProps {
  number: number;
}

//* ------------------------------------------------------
//! ORGANIZADO POR ID. LOS MÁS NUEVOS PRIMERO
//* ------------------------------------------------------

export default function ModuleNewsCars(numberFromPage: ModuleNewsCarsProps) {
  const sortedCars = sortedCarsById(carsExample);

  return (
    <div className="   gap-10     flex flex-row justify-center  flex-wrap">
      {sortedCars.map((car, index) => {
        if (index < numberFromPage.number) {
          return (
            <CardProduct
              key={car.id}
              image={car.mainImage}
              price={car.pricePerDayCHF}
              transmission={car.transmission}
              fuelType={car.fuelType}
              id={car.id}
              location={car.location}
              name={car.name}
            />
          );
        }
      })}
    </div>
  );
}
