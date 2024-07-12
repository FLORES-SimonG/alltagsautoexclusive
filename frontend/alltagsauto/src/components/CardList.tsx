"use client";
import React, { useEffect, useState } from "react";
import { getCars } from "../helpers/cars/getCars";
import SpinnersDelete from "./Spinners/SpinnersDelete";
import { deleteCars } from "../helpers/cars/deleteCars";
import SpinnersPrimary from "./Spinners/SpinnersPrimary";
import Swal from "sweetalert2";
import ButtonPrimary from "./buttons/ButtonPrimary";
import sportsCars from "@/helpers/carsExample";
interface CarsItem {
  brand: string;
  model: string;
  year: string;
  seatingCapacity: string;
  doorsNumber: string;
  fuelType: string;
  transmissionType: string;
  price: string;
  mainImage: string;
  id: number;
}

const CardList = () => {
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState("");
  const [totalPages, setTotalPages] = useState(3);
  const [cars, setCars] = useState<CarsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    const fetchNews = async (page: number) => {
      //const newsData = await getCars();
      const newsData = sportsCars;

      //setCars(newsData.data);
      //setMessage(newsData.message);
      //setTotalPages(Math.ceil(newsData.total / 3));
      setCars(newsData)
      setIsLoading(false);
    };
    fetchNews(page);
  }, [page]);

  const onClic = async (id: any): Promise<void> => {
    Swal.fire({
      title: "Estas seguro/a de eliminar esta noticia?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#009BDB",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Si, borrar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setDeletingId(id);
        setIsDeleting(true);

        await deleteCars(id);

        setTimeout(() => {
          setCars(cars.filter((item) => item.id !== id));
          setIsDeleting(false);
          setDeletingId(null);
        }, 1000);
        Swal.fire({
          title: "Eliminado!",
          text: "La noticia ha sido eliminada.",
          icon: "success",
        });
      }
    });
    console.log("Eliminando noticia con ID:", id);
  };

  return (
    <div className="flex flex-col flex-nowrap justify-between items-stretch h-full m-5 border rounded-2xl p-5 shadow-2xl w-full">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <SpinnersPrimary />
        </div>
      ) : message === "No se encontraron noticias en esta pagina" ? (
        <div className="flex items-center justify-center h-full">
          <p>No se encontraron</p>
        </div>
      ) : (
        
          <ul className=" w-full flex flex-col  h-full">
            {cars.map(
              ({ mainImage, brand, model, year, id }) => (
                <div className="">
                  <li
                    key={id}
                    className="flex flex-row my-3 flex-nowrap justify-between items-center"
                  >
                    <a
                      className="flex flex-row justify-between items-center  text-sm"
                      id={`card${id}`}
                      href={`/news/DinamicNew/${id}`}
                    >
                      <div className="flex">
                        <img
                          src={mainImage}
                          alt={brand}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div className="text-sm  text-textParagraph">
                          <h6 className="text-tertiary text-base font-semibold">
                            {brand}
                          </h6>
                          <div className="text-sm  text-textParagraph">
                            <p>{model}</p>
                            <p>{year}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="flex flex-row justify-center gap-10">
                      <div className=" flex justify-center ">
                        {isDeleting && deletingId === id ? (
                          <SpinnersDelete />
                        ) : (
                          <div onClick={() => onClic(id)}>
                            <ButtonPrimary title="Eliminar" color="bg-secondary" size="lg"  />
                          </div>
                        )}
                      </div>

                    </div>
                  </li>
                  <hr />
                </div>
              )
            )}
          </ul>
        
      )}

    </div>
  );
};

export default CardList;
