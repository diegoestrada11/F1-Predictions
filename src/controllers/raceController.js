// ======================
// Build Race List Page
// ======================
export const buildRaceList = (req, res) => {
  const races = [
    { id: 1, name: "Bahrain Grand Prix", location: "Bahrain" },
    { id: 2, name: "Saudi Arabian Grand Prix", location: "Jeddah" },
    { id: 3, name: "Australian Grand Prix", location: "Melbourne" }
  ];

  res.render("races", { races });
};


// ======================
// Build Race Detail Page
// ======================
export const buildRaceDetail = (req, res) => {
  const raceId = req.params.id;

  const races = [
    { id: 1, name: "Bahrain Grand Prix", location: "Bahrain" },
    { id: 2, name: "Saudi Arabian Grand Prix", location: "Jeddah" },
    { id: 3, name: "Australian Grand Prix", location: "Melbourne" }
  ];

  const race = races.find(r => r.id == raceId);

  if (!race) {
    return res.send("Race not found");
  }

  res.render("raceDetail", { race });
};