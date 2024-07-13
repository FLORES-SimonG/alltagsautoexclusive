import { notFound } from "next/navigation";
import Image from "next/image";
import { FaCar } from "react-icons/fa";
import { PiMoneyFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import sportsCars from "@/helpers/carsExample";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Link from "next/link";

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
      <div className="relative overflow-auto h-full lg:w-full">
        <Image
          alt={car.name}
          src={car.mainImage}
          height={1200}
          width={1200}
          quality={100}
          className=" object-cover h-screen lg:w-full"
        />
        <div className="absolute top-0 w-full h-screen bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="absolute top-0  lg:w-full h-full flex lg:items-center items-end justify-end right-7">
          <div className=" flex lg:flex-col flex-row gap-8 text-xs relative bottom-20  bg-white/80 p-8 rounded-lg">
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
      <section className="flex flex-row items-center justify-between px-10">
        <div className=" py-6 flex flex-col gap-4">
          <h2 className="font-bold text-4xl">{car.name}</h2>
          <div className="flex flex-col gap-1 ">
            <h3 className="font-bold text-2xl">Informationen</h3>
            <div className="flex flex-row flex-nowrap gap-8">
              <ul className="flex flex-col flex-wrap">
                <li><strong>KM:</strong> {car.kilometersDriven}km.</li>
                <li><strong>Fuel Type:</strong> {car.fuelType}</li>
                <li><strong>Engine:</strong> {car.engine}</li>
              </ul>
              <ul className="flex flex-col flex-wrap">
                <li><strong>Jahre: </strong>{car.year}</li>
                <li><strong>Transmission:</strong> {car.transmission}</li>
                <li><strong>Location: </strong>{car.location}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6">
          <Link href="/contactUs">
          <ButtonPrimary title="Kontaktieren" color="bg-secondary" size="sm" />
          </Link>
          <Link href="/store">
          <ButtonPrimary title="Zurück" color="bg-tertiary" size="sm" />
          </Link>
        </div>
      </section>
    </>
  );
}
