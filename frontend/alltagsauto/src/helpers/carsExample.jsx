const sportsCars = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
    {
      id: 4,
      name: "McLaren 720S",
      brand: "McLaren",
      kilometersDriven: 5000,
      fuelType: "Benzin",
      year: 2021,
      transmission: "Automatik",
      location: "Bern",
      pricePerDayCHF: 1600,
      engine: "4.0L V8",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/5623494/pexels-photo-5623494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      secondaryImage: "https://images.pexels.com/photos/10550012/pexels-photo-10550012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      optionalImages: [
        "https://images.pexels.com/photos/12484846/pexels-photo-12484846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      clicks: 180
    },
    {
      id: 5,
      name: "Audi R8",
      brand: "Audi",
      kilometersDriven: 12000,
      fuelType: "Benzin",
      year: 2017,
      transmission: "Automatik",
      location: "Basel",
      pricePerDayCHF: 1100,
      engine: "5.2L V10",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      secondaryImage: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      optionalImages: [
        "https://images.pexels.com/photos/533562/pexels-photo-533562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      clicks: 150
    },
    {
      id: 6,
      name: "BMW M4",
      brand: "BMW",
      kilometersDriven: 10000,
      fuelType: "Benzin",
      year: 2019,
      transmission: "Automatik",
      location: "Lausanne",
      pricePerDayCHF: 900,
      engine: "3.0L I6",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/19281437/pexels-photo-19281437/free-photo-of-carretera-calle-vehiculo-coche-deportivo.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondaryImage: "https://images.pexels.com/photos/3581833/pexels-photo-3581833.jpeg?auto=compress&cs=tinysrgb&w=600",
      optionalImages: [
        "https://images.pexels.com/photos/19896301/pexels-photo-19896301/free-photo-of-vehiculo-lujo-moderno-urbano.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      clicks: 120
    },
    {
      id: 7,
      name: "Aston Martin DB11",
      brand: "Aston Martin",
      kilometersDriven: 7000,
      fuelType: "Benzin",
      year: 2020,
      transmission: "Automatik",
      location: "Lugano",
      pricePerDayCHF: 1300,
      engine: "5.2L V12",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/6476897/pexels-photo-6476897.png?auto=compress&cs=tinysrgb&w=600",
      secondaryImage: "https://images.pexels.com/photos/1005630/pexels-photo-1005630.jpeg?auto=compress&cs=tinysrgb&w=600",
      optionalImages: [
        "https://images.pexels.com/photos/3798021/pexels-photo-3798021.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      clicks: 220
    },
    {
      id: 8,
      name: "Chevrolet Corvette C8",
      brand: "Chevrolet",
      kilometersDriven: 4000,
      fuelType: "Benzin",
      year: 2021,
      transmission: "Automatik",
      location: "St. Gallen",
      pricePerDayCHF: 950,
      engine: "6.2L V8",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/18063815/pexels-photo-18063815/free-photo-of-rojo-vehiculo-viaje-viajar.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondaryImage: "https://images.pexels.com/photos/19314651/pexels-photo-19314651/free-photo-of-vehiculo-coche-deportivo-estacionamiento-urbano.jpeg?auto=compress&cs=tinysrgb&w=600",
      optionalImages: [
        "https://images.pexels.com/photos/18490756/pexels-photo-18490756/free-photo-of-vehiculo-lujo-interior-coche-deportivo.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      clicks: 200
    },
    {
      id: 9,
      name: "Mercedes-AMG GT",
      brand: "Mercedes-Benz",
      kilometersDriven: 9000,
      fuelType: "Benzin",
      year: 2018,
      transmission: "Automatik",
      location: "Freiburg",
      pricePerDayCHF: 1150,
      engine: "4.0L V8",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/7662164/pexels-photo-7662164.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondaryImage: "https://images.pexels.com/photos/16124153/pexels-photo-16124153/free-photo-of-coche-vehiculo-estados-unidos-mercedes.jpeg?auto=compress&cs=tinysrgb&w=600",
      optionalImages: [
        "https://images.pexels.com/photos/10215511/pexels-photo-10215511.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      clicks: 160
    },
    {
      id: 10,
      name: "Nissan GT-R",
      brand: "Nissan",
      kilometersDriven: 15000,
      fuelType: "Benzin",
      year: 2019,
      transmission: "Automatik",
      location: "Winterthur",
      pricePerDayCHF: 1000,
      engine: "3.8L V6",
      vehicleType: "Coupé",
      mainImage: "https://images.pexels.com/photos/20501706/pexels-photo-20501706/free-photo-of-azul-vehiculo-coche-deportivo-moderno.jpeg?auto=compress&cs=tinysrgb&w=600",
      secondaryImage: "https://images.pexels.com/photos/20501708/pexels-photo-20501708/free-photo-of-azul-vehiculo-coche-deportivo-moderno.jpeg?auto=compress&cs=tinysrgb&w=600",
      optionalImages: [
        "https://images.pexels.com/photos/20695255/pexels-photo-20695255/free-photo-of-coche-diseno-marca-logo.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      clicks: 190
    }
  ];export function sortedCarsById(cars) {
    // Crea una copia de la matriz y luego la ordena
    const sortedCars = [...cars].sort((a, b) => a.id - b.id);
    return sortedCars;
  }
  export function sortedCarsByClicks(cars) {
    // Crea una copia de la matriz y luego la ordena
    const sortedCars = [...cars].sort((a, b) => b.clicks - a.clicks);
    return sortedCars;
  }

  export default sportsCars;
  