var buttonField = document.getElementById("buttonField");
var buttonField2 = document.getElementById("buttonField2");
var buttonField3 = document.getElementById("buttonField3");
var buttons = document.getElementsByClassName("hytteButton");
var buttonPressed = 0;
var startPoint = "none";
var travelDistanceArray = [];

let hytte = [
  {
    hytteName: "Gjendesheim",
    naerHytter: {
      Glitterheim: 22,
      Memurubu: 14
    }
  },
  {
    hytteName: "Glitterheim",
    naerHytter: {
      Gjendesheim: 22,
      Memurubu: 18,
      Spiterstulen: 17
    }
  },
  {
    hytteName: "Memurubu",
    naerHytter: {
      Gjendesheim: 14,
      Glitterheim: 18,
      Gjendebu: 10
    }
  },
  {
    hytteName: "Gjendebu",
    naerHytter: {
      Memurubu: 10,
      Leirvassbu: 19,
      Spiterstulen: 24,
      Olavsbu: 16
    }
  },
  {
    hytteName: "Leirvassbu",
    naerHytter: {
      Gjendebu: 19,
      Spiterstulen: 15,
      Olavsbu: 11
    }
  },
  {
    hytteName: "Spiterstulen",
    naerHytter: {
      Glitterheim: 17,
      Gjendebu: 24,
      Leirvassbu: 15
    }
  },
  {
    hytteName: "Olavsbu",
    naerHytter: {
      Gjendebu: 16,
      Leirvassbu: 11
    }
  },
]

/* --------- How to extract object object ---------
for(var ting in hytte[0].naerHytter){
  console.log(ting);
}
console.log(hytte[0].naerHytter.Glitterheim); get the distance
*/


/* -- Maybe Permenant change 
function createButton(name){
  var buttonEl = document.createElement("button");
  buttonEl.innerHTML = name;
  buttonEl.value = name;
  buttonEl.className = "hytteButton";
  buttonField.appendChild(buttonEl);
  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", findPath);
  }
}

for(var i = 0; i < hytte.length; i++){
  createButton(hytte[i].hytteName);
}
*/

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", findPath);
}

function createButton(name, distance){
  var buttonEl = document.createElement("button");
  buttonEl.innerHTML = name + "'s distance: " + distance + "km";
  buttonEl.value = name;
  buttonEl.id = distance;
  buttonEl.className = "hytteButton";
  buttonField.appendChild(buttonEl);
  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", findPath);
  }
}

function findPath(e){
  buttonPressed++;
  console.log(e.target.value + " sine nær hytter: ");
  for(var i = 0; i < hytte.length; i++){
    if(hytte[i].hytteName == e.target.value){
      count = 0;
      for(var closeHytter in hytte[i].naerHytter){
        var distance = Object.values(hytte[i].naerHytter);
        createButton(closeHytter, distance[count]);
        count++;
      }
      /*
      console.log(Object.values(hytte[i].naerHytter));  
      var as = Object.values(hytte[i].naerHytter)
      console.log(as[0]);
      */
    }
  }

  if(buttonPressed == 1){
    startPoint = e.target.value;
  }else if(buttonPressed > 1){
    travelDistanceArray.push(e.target.id);
    console.log(travelDistanceArray);
  }
}

