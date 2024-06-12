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
        className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white"
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
              <dt className="sr-only">Location</dt>

              <dd className="text-sm text-gray-500">{location}</dd>
            </div>

            <div>
              <dt className="sr-only">Name</dt>

              <dd className="font-medium">{name}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-indigo-700"
              >
                <path
                  fillRule="evenodd"
                  d="M15 4a3.001 3.001 0 0 1-2.25 2.905V8.5a.75.75 0 0 1-.22.53l-.5.5a.75.75 0 0 1-1.06 0l-.72-.72-4.677 4.678A1.75 1.75 0 0 1 4.336 14h-.672a.25.25 0 0 0-.177.073l-.707.707a.75.75 0 0 1-1.06 0l-.5-.5a.75.75 0 0 1 0-1.06l.707-.707A.25.25 0 0 0 2 12.336v-.672c0-.464.184-.909.513-1.237L7.189 5.75l-.72-.72a.75.75 0 0 1 0-1.06l.5-.5a.75.75 0 0 1 .531-.22h1.595A3.001 3.001 0 0 1 15 4ZM9.19 7.75l-.94-.94-4.677 4.678a.25.25 0 0 0-.073.176v.672c0 .058-.003.115-.009.173a1.74 1.74 0 0 1 .173-.009h.672a.25.25 0 0 0 .177-.073L9.189 7.75Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Fuel type</p>

                <p className="font-medium">{fuelType}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className=" text-indigo-700 size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 1.938a.75.75 0 0 1 1.025.274l.652 1.131c.351-.138.71-.233 1.073-.288V1.75a.75.75 0 0 1 1.5 0v1.306a5.03 5.03 0 0 1 1.072.288l.654-1.132a.75.75 0 1 1 1.298.75l-.652 1.13c.286.23.55.492.785.786l1.13-.653a.75.75 0 1 1 .75 1.3l-1.13.652c.137.351.233.71.288 1.073h1.305a.75.75 0 0 1 0 1.5h-1.306a5.032 5.032 0 0 1-.288 1.072l1.132.654a.75.75 0 0 1-.75 1.298l-1.13-.652c-.23.286-.492.55-.786.785l.652 1.13a.75.75 0 0 1-1.298.75l-.653-1.13c-.351.137-.71.233-1.073.288v1.305a.75.75 0 0 1-1.5 0v-1.306a5.032 5.032 0 0 1-1.072-.288l-.653 1.132a.75.75 0 0 1-1.3-.75l.653-1.13a4.966 4.966 0 0 1-.785-.786l-1.13.652a.75.75 0 0 1-.75-1.298l1.13-.653a4.965 4.965 0 0 1-.288-1.073H1.75a.75.75 0 0 1 0-1.5h1.306a5.03 5.03 0 0 1 .288-1.072l-1.132-.653a.75.75 0 0 1 .75-1.3l1.13.653c.23-.286.492-.55.786-.785l-.653-1.13A.75.75 0 0 1 4.5 1.937Zm1.14 3.476a3.501 3.501 0 0 0 0 5.172L7.135 8 5.641 5.414ZM8.434 8.75 6.94 11.336a3.491 3.491 0 0 0 2.81-.305 3.49 3.49 0 0 0 1.669-2.281H8.433Zm2.987-1.5H8.433L6.94 4.664a3.501 3.501 0 0 1 4.48 2.586Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Transmission</p>

                <p className="font-medium">{transmission}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 text-indigo-700"
              >
                <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z" />
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Preice</p>

                <p className="font-medium">CHF {price}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
