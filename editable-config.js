/*
  SELVATICA DIRECT BOOKING SUITE - EDITABLE CONFIG (BILINGUAL)

  ════════════════════════════════════════════════════════════
  HOW TO EDIT TEXTS:
  - All translatable texts live inside i18n.en (English) and i18n.es (Spanish).
  - To change a text, find it under the right language and edit it.
  - Each room also has its own i18n (description, amenities, type).
  - Technical data (prices, dates, images, WhatsApp number) stays outside i18n.
  ════════════════════════════════════════════════════════════

  Important:
  - WhatsApp number must include country code and no + sign.
    Example: Colombia +57 300 000 0000 = "573000000000"
  - Image URLs can be online images or local files from assets/rooms/
  - Blocked dates format: YYYY-MM-DD
*/

const hotelConfig = {

  // ═════════ TECHNICAL DATA (no traducible) ═════════
  propertyName: "Casa Del Bosque Tayrona",
  whatsappNumber: "573213221502",
  currency: "COP $",
  heroImage: "./images/hero.webp",
  defaultLang: "en", // "en" o "es" - idioma por defecto (también detecta el del navegador)

  // ═════════ TEXTOS GENERALES DEL SITIO ═════════
  i18n: {
    en: {
      // Hero
      badge: "Eco-Lodge · Cabins",
      heroTitle: "Casa del Bosque Tayrona",
      heroSubtitle: "Wake up above the jungle canopy with the Sierra Nevada mountains behind you and the Caribbean sea ahead..",

      // Form
      labelCheckin: "Check-in",
      labelCheckout: "Check-out",
      labelGuests: "Guests",
      guestsOptions: ["1 guest", "2 guests", "3 guests", "4 guests", "5+ guests"],
      btnCheckAvailability: "Check availability",
      formNote: "Availability is based on blocked dates configured in editable-config.js.",

      // Availability section
      availableStaysTitle: "Available stays",
      selectDatesText: "Select dates to see available units.",
      availableForText: "Available for {ci} to {co} · {n} nights",
      cabinTagline: "Each cabin was designed to reconnect you with nature, silence and slow living.",
      emptyTitle: "No availability for those dates",
      emptyText: "Try different dates or contact the property directly on WhatsApp.",
      btnContactWA: "Contact via WhatsApp",

      // Room cards
      statusAvailable: "Available",
      pricePerNight: "/ night",
      btnViewDetails: "View details",
      btnBookWA: "Book via WhatsApp",

      // Experience section
      experienceLabel: "THE EXPERIENCE",
      experienceTitle: "Slow mornings above the jungle canopy",
      experienceIntro: "Wake up with birdsong, open-air mountain breezes and panoramic jungle views. Casa del Bosque was designed for travelers seeking silence, nature and a deeper connection with the Sierra Nevada landscape.",
      exp1Title: "Sunrise & Jungle Views",
      exp1Text:  "Wake up above the canopy with panoramic views of the Sierra Nevada mountains and the Caribbean horizon.",
      exp2Title: "Slow Living",
      exp2Text:  "Disconnect from noise and reconnect with nature through slower mornings, forest sounds and open-air spaces.",
      exp3Title: "Open-Air Comfort",
      exp3Text:  "Private terraces, jungle showers and immersive architecture designed to blend into the surrounding landscape.",
      experienceNote: "Designed for couples, creatives, nature lovers and slow travelers.",

      // Book Direct section
      directLabel: "BOOK DIRECT",
      directTitle: "Why book directly with Casa del Bosque",
      directIntro: "Enjoy a more personal and flexible experience while supporting regenerative hospitality directly.",
      direct1Title: "Better Rates",
      direct1Text:  "Access direct pricing without third-party platform fees.",
      direct2Title: "Personalized Stay",
      direct2Text:  "Get recommendations, local guidance and flexible communication directly with the property.",
      direct3Title: "Direct WhatsApp Concierge",
      direct3Text:  "Faster responses, personalized support and easier reservation coordination.",
      direct4Title: "Support Regenerative Travel",
      direct4Text:  "Your booking directly supports local hospitality and slower, more intentional tourism.",

      // Story section
      storyLabel: "THE STORY",
      storyTitle: "More than a stay — a slower way to experience the Sierra Nevada",
      storyP1: "Hidden above the Caribbean coast and surrounded by rainforest canopy, Casa del Bosque was created as a place to slow down.",
      storyP2: "Here, mornings begin with birdsong, mountain mist and open jungle views. Architecture blends into the landscape, encouraging guests to reconnect with silence, nature and a more intentional rhythm of travel.",
      storyP3: "Inspired by regenerative hospitality and the Sierra Nevada environment, Casa del Bosque invites travelers to experience the jungle with presence, simplicity and care.",

      // Modal
      btnClose: "Close",

      // Footer
      footer: "Powered by Selvatica Direct Booking Suite",

      // Alerts & WhatsApp messages
      alertInvalidDates: "Please select valid check-in and check-out dates.",
      waBookMessage: "Hi! I would like to book the {room} at {property} from {ci} to {co} for {guests}. Is it available?",
      waGeneralMessage: "Hi! I would like to check availability for my dates."
    },

    es: {
      // Hero
      badge: "Eco-Lodge · Cabañas",
      heroTitle: "Casa del Bosque Tayrona",
      heroSubtitle: "Despertá sobre el dosel de la selva, con la Sierra Nevada detrás y el mar Caribe frente a ti.",

      // Form
      labelCheckin: "Llegada",
      labelCheckout: "Salida",
      labelGuests: "Huéspedes",
      guestsOptions: ["1 huésped", "2 huéspedes", "3 huéspedes", "4 huéspedes", "5+ huéspedes"],
      btnCheckAvailability: "Ver disponibilidad",
      formNote: "La disponibilidad se basa en las fechas bloqueadas configuradas en editable-config.js.",

      // Availability section
      availableStaysTitle: "Cabañas disponibles",
      selectDatesText: "Seleccioná las fechas para ver las cabañas disponibles.",
      availableForText: "Disponible del {ci} al {co} · {n} noches",
      cabinTagline: "Cada cabaña fue diseñada para reconectarte con la naturaleza, el silencio y el slow living.",
      emptyTitle: "No hay disponibilidad para esas fechas",
      emptyText: "Probá con otras fechas o contactanos directamente por WhatsApp.",
      btnContactWA: "Contactar por WhatsApp",

      // Room cards
      statusAvailable: "Disponible",
      pricePerNight: "/ noche",
      btnViewDetails: "Ver detalles",
      btnBookWA: "Reservar por WhatsApp",

      // Experience section
      experienceLabel: "LA EXPERIENCIA",
      experienceTitle: "Mañanas lentas sobre el dosel de la selva",
      experienceIntro: "Despertá con cantos de aves, brisa de montaña y vistas panorámicas a la selva. Casa del Bosque fue diseñada para viajeros que buscan silencio, naturaleza y una conexión más profunda con el paisaje de la Sierra Nevada.",
      exp1Title: "Amanecer & Vistas a la Selva",
      exp1Text:  "Despertá sobre el dosel con vistas panorámicas a la Sierra Nevada y al horizonte del Caribe.",
      exp2Title: "Slow Living",
      exp2Text:  "Desconectate del ruido y reconectate con la naturaleza a través de mañanas lentas, sonidos del bosque y espacios al aire libre.",
      exp3Title: "Confort al Aire Libre",
      exp3Text:  "Terrazas privadas, duchas en la selva y arquitectura inmersa diseñada para fundirse con el paisaje.",
      experienceNote: "Diseñado para parejas, creativos, amantes de la naturaleza y viajeros lentos.",

      // Book Direct section
      directLabel: "RESERVA DIRECTA",
      directTitle: "¿Por qué reservar directamente con Casa del Bosque?",
      directIntro: "Disfrutá una experiencia más personal y flexible mientras apoyás directamente la hospitalidad regenerativa.",
      direct1Title: "Mejores tarifas",
      direct1Text:  "Accedé a precios directos sin comisiones de plataformas externas.",
      direct2Title: "Estancia personalizada",
      direct2Text:  "Recibí recomendaciones, guía local y comunicación flexible directamente con la propiedad.",
      direct3Title: "Concierge directo por WhatsApp",
      direct3Text:  "Respuestas más rápidas, soporte personalizado y coordinación de reservas sin complicaciones.",
      direct4Title: "Apoyá el turismo regenerativo",
      direct4Text:  "Tu reserva apoya directamente la hospitalidad local y un turismo más lento e intencional.",

      // Story section
      storyLabel: "NUESTRA HISTORIA",
      storyTitle: "Más que una estadía — una forma más lenta de vivir la Sierra Nevada",
      storyP1: "Escondida sobre la costa Caribe y rodeada de selva tropical, Casa del Bosque nació como un lugar para desacelerar.",
      storyP2: "Aquí, las mañanas comienzan con cantos de aves, niebla de montaña y vistas abiertas a la selva. La arquitectura se funde con el paisaje, invitando a los huéspedes a reconectarse con el silencio, la naturaleza y un ritmo de viaje más intencional.",
      storyP3: "Inspirada en la hospitalidad regenerativa y el entorno de la Sierra Nevada, Casa del Bosque invita a los viajeros a vivir la selva con presencia, simplicidad y cuidado.",

      // Modal
      btnClose: "Cerrar",

      // Footer
      footer: "Powered by Selvatica Direct Booking Suite",

      // Alerts & WhatsApp messages
      alertInvalidDates: "Por favor seleccioná fechas válidas de llegada y salida.",
      waBookMessage: "¡Hola! Me gustaría reservar {room} en {property} del {ci} al {co} para {guests}. ¿Está disponible?",
      waGeneralMessage: "¡Hola! Me gustaría consultar disponibilidad para mis fechas."
    }
  },

  // ═════════ CABAÑAS ═════════
  rooms: [
    {
      id: "Ocean-Mountain-View-suite",
      name: "EL HOBO",
      price: 300000,
      capacity: 2,
      image: ["./images/elHobo.webp"],
      blockedDates: ["2026-05-10", "2026-05-11", "2026-05-12"],
      i18n: {
        en: {
          type: "Cabin Suite",
          description: "Private jungle view, King size bed, open-air bath and morning birdsong. Great beautiful views of the Sierra Nevada Snow Mountains. If you are lucky you will see or feel the monkeys, Zainos or Ñeques, or simply watch the birds every morning.",
          amenities: ["King bed", "Private bath", "Jungle view", "Sierra Nevada View", "Ocean View", "Hammocks", "2 guests", "Breakfast included"]
        },
        es: {
          type: "Suite Cabaña",
          description: "Vista privada a la selva, cama King size, baño al aire libre y cantos de aves al amanecer. Hermosas vistas a las montañas nevadas de la Sierra Nevada. Si tenés suerte, verás o escucharás monos, zainos o ñeques — o simplemente disfrutarás de las aves cada mañana.",
          amenities: ["Cama King", "Baño privado", "Vista a la selva", "Vista Sierra Nevada", "Vista al mar", "Hamacas", "2 huéspedes", "Desayuno incluido"]
        }
      }
    },
    {
      id: "Nauture-cabin",
      name: "El Guasimo Suite",
      price: 300000,
      capacity: 2,
      image: ["./images/Guasimo.webp"],
      blockedDates: ["2026-05-15", "2026-05-16"],
      i18n: {
        en: {
          type: "Cabin Suite",
          description: "Elevated cabin with immersive views of the forest and the ocean, private bath, terrace, King size bed and a wild but comfortable feel. Enjoy feeling the nature surroundings, feel the Ocean, the animals and feel the peace.",
          amenities: ["Elevated", "Private bath", "Forest view", "Ocean View", "King bed", "2 guests", "Breakfast included"]
        },
        es: {
          type: "Suite Cabaña",
          description: "Cabaña elevada con vistas inmersivas al bosque y al océano, baño privado, terraza, cama King size y un ambiente salvaje pero confortable. Disfrutá del entorno natural, sentí el océano, los animales y la paz.",
          amenities: ["Elevada", "Baño privado", "Vista al bosque", "Vista al mar", "Cama King", "2 huéspedes", "Desayuno incluido"]
        }
      }
    },
    {
      id: "Elevated-Cabin",
      name: "El Campano Suite",
      price: 300000,
      capacity: 2,
      image: ["./images/ELCampano Cabin.webp"],
      blockedDates: ["2026-05-20", "2026-05-21", "2026-05-22"],
      i18n: {
        en: {
          type: "Cabin Suite",
          description: "Full privacy, jungle bed, terrace, 2 hammocks and ideal setup for couples. You have the most beautiful view of the Sierra Nevada Snow Mountains.",
          amenities: ["Kitchen", "Ocean View", "Sierra Nevada View", "2 guests", "Breakfast included"]
        },
        es: {
          type: "Suite Cabaña",
          description: "Privacidad total, cama en la selva, terraza, 2 hamacas e ideal para parejas. Disfrutá de la vista más hermosa a las montañas nevadas de la Sierra Nevada.",
          amenities: ["Cocina", "Vista al mar", "Vista Sierra Nevada", "2 huéspedes", "Desayuno incluido"]
        }
      }
    }
  ]
};
