const sportsCars = [
    {
      name: "Ferrari 488 Spider",
      brand: "Ferrari",
      kilometersDriven: 15000,
      fuelType: "Benzin",
      year: 2019,
      transmission: "Automatik",
      location: "Zürich",
      pricePerDayCHF: 1200,
      engine: "3.9L V8",
      vehicleType: "Cabrio",
      mainImage: "https://images.pexels.com/photos/2664399/pexels-photo-2664399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      secondaryImage: "https://images.pexels.com/photos/2568539/pexels-photo-2568539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      optionalImages: [
        "https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2568538/pexels-photo-2568538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      clicks: 250
    },
    {
      name: "Lamborghini Huracán",
      brand: "Lamborghini",
      kilometersDriven: 8000,
      fuelType: "Benzin",
      year: 2020,
      transmission: "Automatik",
      location: "Genf",
      pricePerDayCHF: 1400,
      engine: "5.2L V10",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/6462662/pexels-photo-6462662.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      secondaryImage: "https://images.pexels.com/photos/10493497/pexels-photo-10493497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      optionalImages: [
        "https://images.pexels.com/photos/3802512/pexels-photo-3802512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      clicks: 300
    },
    {
      name: "Porsche 911 Carrera",
      brand: "Porsche",
      kilometersDriven: 20000,
      fuelType: "Benzin",
      year: 2018,
      transmission: "Automatik",
      location: "Luzern",
      pricePerDayCHF: 1000,
      engine: "3.0L H6",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/24454937/pexels-photo-24454937/free-photo-of-coches-carretera-puesta-de-sol-playa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      secondaryImage: "hhttps://images.pexels.com/photos/17898712/pexels-photo-17898712/free-photo-of-vehiculo-verde-coche-deportivo-urbano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      optionalImages: [
        
      ],
      clicks: 275
    },
    // {
    //   name: "McLaren 720S",
    //   brand: "McLaren",
    //   kilometersDriven: 5000,
    //   fuelType: "Benzin",
    //   year: 2021,
    //   transmission: "Automatik",
    //   location: "Bern",
    //   pricePerDayCHF: 1600,
    //   engine: "4.0L V8",
    //   vehicleType: "Coupé",
    //   mainImage: "https://example.com/mclaren720s1.jpg",
    //   secondaryImage: "https://example.com/mclaren720s2.jpg",
    //   optionalImages: [
    //     "https://example.com/mclaren720s3.jpg"
    //   ],
    //   clicks: 180
    // },
    // {
    //   name: "Audi R8",
    //   brand: "Audi",
    //   kilometersDriven: 12000,
    //   fuelType: "Benzin",
    //   year: 2017,
    //   transmission: "Automatik",
    //   location: "Basel",
    //   pricePerDayCHF: 1100,
    //   engine: "5.2L V10",
    //   vehicleType: "Coupé",
    //   mainImage: "https://example.com/audir81.jpg",
    //   secondaryImage: "https://example.com/audir82.jpg",
    //   optionalImages: [
    //     "https://example.com/audir83.jpg"
    //   ],
    //   clicks: 150
    // },
    // {
    //   name: "BMW M4",
    //   brand: "BMW",
    //   kilometersDriven: 10000,
    //   fuelType: "Benzin",
    //   year: 2019,
    //   transmission: "Automatik",
    //   location: "Lausanne",
    //   pricePerDayCHF: 900,
    //   engine: "3.0L I6",
    //   vehicleType: "Coupé",
    //   mainImage: "https://example.com/bmwm41.jpg",
    //   secondaryImage: "https://example.com/bmwm42.jpg",
    //   optionalImages: [
    //     "https://example.com/bmwm43.jpg"
    //   ],
    //   clicks: 120
    // },
    // {
    //   name: "Aston Martin DB11",
    //   brand: "Aston Martin",
    //   kilometersDriven: 7000,
    //   fuelType: "Benzin",
    //   year: 2020,
    //   transmission: "Automatik",
    //   location: "Lugano",
    //   pricePerDayCHF: 1300,
    //   engine: "5.2L V12",
    //   vehicleType: "Coupé",
    //   mainImage: "https://example.com/astonmartindb111.jpg",
    //   secondaryImage: "https://example.com/astonmartindb112.jpg",
    //   optionalImages: [
    //     "https://example.com/astonmartindb113.jpg"
    //   ],
    //   clicks: 220
    // },
    // {
    //   name: "Chevrolet Corvette C8",
    //   brand: "Chevrolet",
    //   kilometersDriven: 4000,
    //   fuelType: "Benzin",
    //   year: 2021,
    //   transmission: "Automatik",
    //   location: "St. Gallen",
    //   pricePerDayCHF: 950,
    //   engine: "6.2L V8",
    //   vehicleType: "Coupé",
    //   mainImage: "https://example.com/corvettec81.jpg",
    //   secondaryImage: "https://example.com/corvettec82.jpg",
    //   optionalImages: [
    //     "https://example.com/corvettec83.jpg"
    //   ],
    //   clicks: 200
    // },
    // {
    //   name: "Mercedes-AMG GT",
    //   brand: "Mercedes-Benz",
    //   kilometersDriven: 9000,
    //   fuelType: "Benzin",
    //   year: 2018,
    //   transmission: "Automatik",
    //   location: "Freiburg",
    //   pricePerDayCHF: 1150,
    //   engine: "4.0L V8",
    //   vehicleType: "Coupé",
    //   mainImage: "https://example.com/mercedesamggt1.jpg",
    //   secondaryImage: "https://example.com/mercedesamggt2.jpg",
    //   optionalImages: [
    //     "https://example.com/mercedesamggt3.jpg"
    //   ],
    //   clicks: 160
    // },
    // {
    //   name: "Nissan GT-R",
    //   brand: "Nissan",
    //   kilometersDriven: 15000,
    //   fuelType: "Benzin",
    //   year: 2019,
    //   transmission: "Automatik",
    //   location: "Winterthur",
    //   pricePerDayCHF: 1000,
    //   engine: "3.8L V6",
    //   vehicleType: "Coupé",
    //   mainImage: "https://example.com/nissangtr1.jpg",
    //   secondaryImage: "https://example.com/nissangtr2.jpg",
    //   optionalImages: [
    //     "https://example.com/nissangtr3.jpg"
    //   ],
    //   clicks: 190
    // }
  ];
  
  export default sportsCars;
  