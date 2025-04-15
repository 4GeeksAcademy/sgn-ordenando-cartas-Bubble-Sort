import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function () {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };




let cardContainer = document.querySelector('.cardContainer');
let drawButton = document.querySelector('#drawButton');

let cardsData = [];

function addElement(numero, icono) {
  let card = `
      <div class="card" id="card">
      <div class="head-card" id="head">
        <span class="icon-left" id="icon-left" style="color: ${icono.color}">
         ${icono.pinta}
  
        </span>
      </div>
  
      <div class="body-card" id="body">
        <h1 id="value">${numero}</h1> 
      </div>
  
  
      <div class="footer-card" id="footer">
          <span class="icon-right" id="icon-right" style="color: ${icono.color}">
          ${icono.pinta}
          </span>
      </div>
  
  
    </div>`

  cardContainer.innerHTML += card

};





function obtenerAleatorio(arr) {
  const indice = Math.floor(Math.random() * arr.length);
  return arr[indice];
}

const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "A"]
console.log(obtenerAleatorio(numeros));




function iconAleatorio(arr) {
  const indice = Math.floor(Math.random() * arr.length);
  return arr[indice];
}
const iconArray2 = [{ pinta: '♦', color: 'red' }, { pinta: '♥', color: 'red' }, { pinta: '♠', color: 'black' }, { pinta: '♣', color: 'black' }]

function valorNumerico(carta) {
  if (carta === "A") return 1;
  if (carta === "J") return 11;
  if (carta === "Q") return 12;
  if (carta === "K") return 13;
  return parseInt(carta);
}



drawButton.onclick = function () {
  const user = document.getElementById("user");
  const value = parseInt(user.value);

  cardsData = []; // Reiniciar las cartas generadas
  cardContainer.innerHTML = "";


  for (let i = 0; i < value; i++) {

    let numero = obtenerAleatorio(numeros);
    let icon = iconAleatorio(iconArray2);
    addElement(numero, icon);
    cardsData.push({ numero, icon });
  }

};



function bubbleSort(arr) {
  let wall = arr.length - 1;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < wall; i++) {
      if (valorNumerico(arr[i].numero) > valorNumerico(arr[i + 1].numero)) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    wall--; 
  } while (swapped);
}




sortButton.onclick = function () {
  bubbleSort(cardsData);
  cardContainer.innerHTML = "";
  cardsData.forEach(card => addElement(card.numero, card.icon));
};


