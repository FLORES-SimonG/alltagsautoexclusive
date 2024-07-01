import { notFound } from "next/navigation";
import Image from "next/image";
import { FaCar } from "react-icons/fa";
import { PiMoneyFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import sportsCars from "@/helpers/carsExample";

interface CarDetailsProps {
  params: {
    id: string;
  };
}

async function getCarData(id: Number) {
  let carSelected = sportsCars.find((car) => car.id == id);
  return carSelected;
}

export default async function CarDetails({ params }: CarDetailsProps) {
  const { id } = params;
  const car = await getCarData(Number(id));

  if (!car) {
    notFound();
  }

  return (
    <div className="container ">
     

      <Image
        alt={car.name}
        src={car.mainImage}
        width={1200}
        height={384}
        className="h-96 w-full rounded-md object-cover "
        />
      
      <h1 className="text-2xl font-bold mb-4">{car.name}</h1>
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Location</dt>
            <dd className="text-sm text-gray-500">{car.location}</dd>
          </div>
          <div>
            <dt className="sr-only">Name</dt>
            <dd className="font-medium">{car.name}</dd>
          </div>
        </dl>
        <div className="mt-6 flex items-center gap-8 text-xs flex-row justify-center">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <BsFillFuelPumpFill className="text-indigo-700 h-4 w-4" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Fuel Type</p>
              <p className="font-medium">{car.fuelType}</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaCar className="text-indigo-700 h-4 w-4" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Transmission</p>
              <p className="font-medium">{car.transmission}</p>
            </div>
          </div>
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <PiMoneyFill className="text-indigo-700 h-4 w-4" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Price</p>
              <p className="font-medium">CHF {car.pricePerDayCHF}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
