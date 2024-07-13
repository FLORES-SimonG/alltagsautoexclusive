import InProgress from "./../../components/InProgress";

export default function ContactUs() {
  return (
    <div className=" w-full flex flex-col justify-center items-center ">
      <section className="bg-gray-100/25 rounded-md">
        <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h2 className=" my-2 underline font-bold text-xl">
                Unsere Öffnungszeiten sind wie folgt:{" "}
              </h2>

              <p className="max-w-xl text-lg">
                <strong>Montag bis Freitag:</strong> 09:00 – 21:00 Uhr
                <br /> <strong>Samstag:</strong> 09:00 – 19:00 Uhr <br />
                <strong>Sonntag:</strong> Geschlossen <br />
                <br />
                Wir sind gerne bereit, Ihre Fragen zu beantworten und werden
                dies so schnell wie möglich tun. <br />
                Zögern Sie bitte nicht, uns zu kontaktieren. Wir freuen uns
                darauf, von Ihnen zu hören.
              </p>

              <div className="mt-6">
                <a href="#" className="text-2xl font-bold text-cyan-500">
                  {" "}
                  (888) 354-1781{" "}
                </a>

                <address className="mt-2 not-italic">
                  Hofackerstrasse 5, 8722 Kaltbrunn (SG)
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="betreff">
                    Betreff
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Betreff"
                    type="text"
                    id="betreff"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email addresse"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Telefonnummer
                      
                      
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Telefonnummer"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Nachricht
                  </label>

                  <textarea
                    className="w-full rounded-lg h-32 border-gray-200 p-3 text-sm resize-none"
                    placeholder="Nachricht"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-secondary px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
