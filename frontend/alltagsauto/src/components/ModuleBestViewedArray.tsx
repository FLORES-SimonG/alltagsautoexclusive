import carsExample, { sortedCarsByClicks } from "@/helpers/carsExample";
import CardProduct from "./CardProduct";

interface ModuleBestViewedArrayProps {
    number: number;
    strict: boolean;
    }

export default function ModuleBestViewedArray(numberFromPage: ModuleBestViewedArrayProps) {
    const sortedCarsClick = sortedCarsByClicks(carsExample);
    
  return (
    <div className={`${!numberFromPage.strict? "lg:w-2/3" : ""}  flex flex-row justify-center gap-10 flex-wrap `}>
      {sortedCarsClick.map((car, index) => {
        if (index < numberFromPage.number) {
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
  );
}
