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
    <>
      <div className="relative">
        <Image
          alt={car.name}
          src={car.mainImage}
          height={1200}
          width={1200}
          quality={100}
          className="rounded-b-lg  h-96 w-96 lg:w-full object-cover"
        />
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
        <div className="absolute top-0  w-full h-full flex lg:items-center items-end justify-end right-7">
          <div className=" flex lg:flex-col flex-row gap-8 text-xs  bg-white/80 p-8 rounded-lg">
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
    </>
  );
}
