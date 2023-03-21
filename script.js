let hytte = [
  {
    hytteName: "Gjendesheim",
    naerHytter: ["Glitterheim", "Memurubu"],
    distanse: [22, 14]
  },
  {
    hytteName: "Glitterheim",
    naerHytter: ["Gjendesheim", "Memurubu", "Spiterstulen"],
    distanse: [22, 18, 17]
  },
  {
    hytteName: "Memurubu",
    naerHytter: ["Gjendesheim", "Glitterheim", "Gjendebu"],
    distanse: [14, 18, 10]
  },
  {
    hytteName: "Gjendebu",
    naerHytter: ["Memurubu", "Leirvassbu", "Spiterstulen", "Olavsbu"],
    distanse: [10, 19, 24, 16]
  },
  {
    hytteName: "Leirvassbu",
    naerHytter: ["Gjendebu", "Spiterstulen", "Olavsbu"],
    distanse: [19, 15, 11]
  },
  {
    hytteName: "Spiterstulen",
    naerHytter: ["Glitterheim", "Gjendebu", "Leirvassbu"],
    distanse: [17, 24, 15]
  },
  {
    hytteName: "Olavsbu",
    naerHytter: ["Gjendebu", "Leirvassbu"],
    distanse: [16, 11]
  },
]

console.log(hytte[0].naerHytter[0]);
console.log(hytte[0].distanse[0]);