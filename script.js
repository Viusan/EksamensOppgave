var buttonField = document.getElementById("buttonField");
var buttons = document.getElementsByClassName("hytteButton");

let hytte = [
  {
    hytteName: "Gjendesheim",
    naerHytter: ["Glitterheim", "Memurubu"],
    distance: [22, 14]
  },
  {
    hytteName: "Glitterheim",
    naerHytter: ["Gjendesheim", "Memurubu", "Spiterstulen"],
    distance: [22, 18, 17]
  },
  {
    hytteName: "Memurubu",
    naerHytter: ["Gjendesheim", "Glitterheim", "Gjendebu"],
    distance: [14, 18, 10]
  },
  {
    hytteName: "Gjendebu",
    naerHytter: ["Memurubu", "Leirvassbu", "Spiterstulen", "Olavsbu"],
    distance: [10, 19, 24, 16]
  },
  {
    hytteName: "Leirvassbu",
    naerHytter: ["Gjendebu", "Spiterstulen", "Olavsbu"],
    distance: [19, 15, 11]
  },
  {
    hytteName: "Spiterstulen",
    naerHytter: ["Glitterheim", "Gjendebu", "Leirvassbu"],
    distance: [17, 24, 15]
  },
  {
    hytteName: "Olavsbu",
    naerHytter: ["Gjendebu", "Leirvassbu"],
    distance: [16, 11]
  },
]

function createButton(name){
  var buttonEl = document.createElement("button");
  buttonEl.innerHTML = name;
  buttonEl.className = "hytteButton";
  buttonField.appendChild(buttonEl);
}

for(var i = 0; i < hytte.length; i++){
  createButton(hytte[i].hytteName);
}

for(var i = 0; i < buttons; i++){
  buttons[i].setAttribute("click", findPath);
}

function findPath(e){
  console.log(e.target.value);
}