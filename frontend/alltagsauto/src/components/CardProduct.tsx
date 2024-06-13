import { FaCar } from "react-icons/fa";
import { PiMoneyFill } from "react-icons/pi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Image from "next/image";

interface CardProductProps {
  image: string;
  price: number;
  transmission: string;
  fuelType: string;
  location: string;
  name: string;
}

export default function CardProduct({
  image,
  price,
  transmission,
  fuelType,
  name,
  location,
}: CardProductProps) {
  return (
    <div>
      <a
        href="#"
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white w-80 lg:w-96"
      >
        <Image
          alt={name}
          src={image}
          width={384}
          height={384}
          // className=" rounded-xl"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Location.</dt>

              <dd className="text-sm text-gray-500">{location}</dd>
            </div>

            <div>
              <dt className="sr-only">Name</dt>

              <dd className="font-medium">{name}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs flex-row justify-center ">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <BsFillFuelPumpFill className="text-indigo-700 h-4 w-4" />

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Kraftstoff</p>

                <p className="font-medium">{fuelType}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <FaCar className=" text-indigo-700 h-4 w-4" />

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Getriebe</p>

                <p className="font-medium">{transmission}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <PiMoneyFill className="text-indigo-700 h-4 w-4" />

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Preis</p>

                <p className="font-medium">CHF {price}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
