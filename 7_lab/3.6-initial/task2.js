let trips = [
    { city: "Київ", duration: 1, price: 2000, foodIncluded: false, guide: true },
    { city: "Харків", duration: 2, price: 3000, foodIncluded: true, guide: false },
    { city: "Одеса", duration: 1, price: 2500, foodIncluded: false, guide: false },
    { city: "Сімферополь", duration: 2, price: 5500, foodIncluded: true, guide: true },
    { city: "Полтава", duration: 1, price: 4000, foodIncluded: true, guide: false }
  ];
  
  let oneDayNoFood = [];
  for (let trip of trips) {
    if (trip.duration === 1 && !trip.foodIncluded) {
      oneDayNoFood.push(trip);
    }
  }
  console.log("1) Одноденні подорожі без харчування:");
  console.log(oneDayNoFood);
  
  let maxPriceTrips = [];
  for (let trip of trips) {
    if (trip.price <= 3000) {
      maxPriceTrips.push(trip);
    }
  }
  console.log("2) Подорожі з ціною до 3000:");
  console.log(maxPriceTrips);
  