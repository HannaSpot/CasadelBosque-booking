/*
  SELVATICA DIRECT BOOKING SUITE - EDITABLE CONFIG

  Edit this file to customize the booking system.
  Important:
  - WhatsApp number must include country code and no + sign.
    Example: Colombia +57 300 000 0000 = "573000000000"
  - Image URLs can be online images or local files from assets/rooms/
  - Blocked dates format: YYYY-MM-DD
*/

const hotelConfig = {
  propertyName: "Casa Del Bosque Tayrona",
  whatsappNumber: "573213221502",
  currency: "COP $",
  badge: "Eco-Lodge · Cabins",
  heroTitle: "Casa del Bosque Tayrona",
  heroSubtitle: "Wake up above the jungle canopy with the Sierra Nevada mountains behind you and the Caribbean sea ahead..",
  heroImage: "./images/hero.webp", 

  rooms: [
    {
      id: "Ocean-Mountain-View-suite",
      name: "EL HOBO",
      type: "Cabin Suite",
      price: 300000,
      capacity: 2,
      image: ["./images/elHobo.webp"],
      description: "Private jungle view, King size bed, open-air bath and morning birdsong, Great Beautiful views of the Sierrra Nevada Snow Mountains, If you are Lucky you will see or feel The monkeys or Zainos or Ñeques,or simply watch the birds every morning ",
      amenities: ["King bed", "Private bath", "Jungle view", "Sierra Nevada View","Ocean View", "Hammocks", "2 guests", "Breakfast included"],
      blockedDates: ["2026-05-10", "2026-05-11", "2026-05-12"]
    },
    {
      id: "Nauture-cabin",
      name: "El Guasimo Suite",
      type: "Cabin Suite",
      price: 300000,
      capacity: 2,
      image: ["./images/Guasimo.webp"],
      description: "Elevated cabin with immersive views of the forest and the ocean, private bath, Terrace, King size bed and a wild but comfortable feel, Enjoy feeling the nature surroundings, Feel the Ocean, the animals and feel the peace.",
      amenities: ["Elevated", "Private bath", "Forest view", "Ocean View", "King bed", "2 guests", "Breakfast included"],
      blockedDates: ["2026-05-15", "2026-05-16"]
    },
    {
      id: "Elevated-Cabin",
      name: "El Campano Suite",
      type: "Cabin Suite",
      price: 300000,
      capacity: 2,
      image: ["./images/ELCampano Cabin.webp"],
      description: "Full privacy, Jungle Bed, terrace, 2 Hamocks and ideal setup for couples  you have the most Beautiful view of the Sierrra Nevada Snow Mountains.",
      amenities: ["Kitchen", "Ocean View","Sierra Nevada View", "2 guests", "Breakfast included"],
      blockedDates: ["2026-05-20", "2026-05-21", "2026-05-22"]
    }
  ]
};
