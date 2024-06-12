import BestViewed from "@/components/BestViewed";
import CommentCarousel from "@/components/ComentarCarrousel";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import NewCars from "@/components/NewCars";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-fixed bg-auto bg-no-repeat bg-cover">
        <div className="bg-black/10 flex flex-col gap-8 p-5 items-center rounded w-full lg:w-auto">
          <Image
            src="/alltagsAutoExclusive.svg"
            alt="logo"
            width={600}
            height={400}
          />
          <div className="flex flex-row gap-4 w-full">
            <ButtonPrimary title="Suchen" size="lg" />
            <ButtonPrimary title="Vermieten" size="lg" color="transparent" />
          </div>
        </div>
      </div>

      <div className="p-10 flex flex-col gap-4">
        <h2 className="font-bold text-4xl">
          Willkomen bei Alltagsauto-Exclusive
        </h2>

        <p>
          Wir sind ein führendes Schweizer
          Unternehmen, das sich auf die Vermietung von Luxusfahrzeugen
          spezialisiert hat. Unsere Flotte besteht aus den neuesten Modellen der
          renommiertesten Automarken weltweit. Unser Ziel ist es, unseren Kunden
          ein unvergessliches Fahrerlebnis zu bieten, egal ob für geschäftliche
          oder private Zwecke. Mit einem besonderen Fokus auf Qualität und
          Kundenzufriedenheit stellen wir sicher, dass jedes Fahrzeug perfekt
          gewartet und bereit für jede Reise ist. Unser professionelles Team
          steht Ihnen jederzeit zur Verfügung, um alle Ihre Wünsche zu erfüllen.
          Erleben Sie den Luxus und die Eleganz eines erstklassigen Fahrzeugs
          und genießen Sie den besten Service, den die Branche zu bieten hat.
          Vertrauen Sie Alltagsauto-Exclusive und machen Sie jede Fahrt zu einem
          besonderen Erlebnis. Ihre Zufriedenheit ist unser oberstes Gebot.
        </p>
      </div>

      <div className=" bg-auto2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div>
      <div className="bg-auto3 min-h-screen bg-no-repeat bg-cover bg-fixed bg-center"></div>

      <div className="min-h-screen  items-center justify-center  p-10 flex flex-col gap-4 bg-gray-600  text-customWhite h-screen ">
        <CommentCarousel />
      </div>
    <div >

      <BestViewed />
    </div>

<div>
  <NewCars />
</div>
    </div>
  );
}
