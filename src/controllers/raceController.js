// ======================
// Build Race List Page
// ======================
export const buildRaceList = (req, res) => {
  const races = [
    {
      id: "Silverstone",
      name: "Silverstone",
      location: "United Kingdom",
      image: "/images/silverstone_circuit.jpg",
      description: "A fast and historic circuit known for high-speed corners."
    },
    {
      id: "Monza",
      name: "Monza",
      location: "Italy",
      image: "/images/monza_circuit.jpg",
      description: "The Temple of Speed, famous for long straights and passionate fans."
    },
    {
      id: "Spa-Francorchamps",
      name: "Spa-Francorchamps",
      location: "Belgium",
      image: "/images/Spa-Francorchamps_circuit.jpg",
      description: "A legendary track with elevation changes and Eau Rouge."
    },
    {
      id: "Hungaroring",
      name: "Hungaroring",
      location: "Hungary",
      image: "/images/Hungaroring_circuit.avif",
      description: "A tight and twisty circuit often compared to Monaco."
    },
    {
      id: "Zandvoort",
      name: "Zandvoort",
      location: "Netherlands",
      image: "/images/Zandvoort_circuit.jpg",
      description: "A unique coastal track with banking and flowing corners."
    },
    {
      id: "Red Bull Ring",
      name: "Red Bull Ring",
      location: "Austria",
      image: "/images/RedBullRing_circuit.webp",
      description: "A short, fast circuit with big elevation changes."
    },
    {
      id: "Barcelona-Catalunya",
      name: "Circuit de Barcelona-Catalunya",
      location: "Spain",
      image: "/images/Barcelona-Catalunya_circuit.WEBP",
      description: "A balanced track used for testing with a mix of corners."
    },
    {
      id: "Imola",
      name: "Imola",
      location: "Italy",
      image: "/images/Imola_circuit.jpg",
      description: "A classic old-school circuit with a rich racing history."
    }
  ];

  res.render("races", { races });
};


// ======================
// Build Race Detail Page
// ======================
export const buildRaceDetail = (req, res) => {
  const raceId = req.params.id;

  const races = [
    { id: "Silverstone", name: "Silverstone", location: "Bahrain" },
    { id: "Monza", name: "Monza", location: "Jeddah" },
    { id: "Spa-Francorchamps", name: "Spa-Francorchamps", location: "Belgium" },
    { id: "Hungaroring", name: "Hungaroring", location: "Hungary" },
    { id: "Zandvoort", name: "Zandvoort", location: "Netherlands" },
    { id: "Red Bull Ring", name: "Red Bull Ring", location: "Austria" },
    { id: "Barcelona-Catalunya", name: "Circuit de Barcelona-Catalunya", location: "Spain" },
    { id: "Imola", name: "Imola", location: "Italy" }
  ];
  
  const race = races.find(r => r.id == raceId);

  if (!race) {
    return res.send("Race not found");
  }

  res.render("raceDetail", { race });
};