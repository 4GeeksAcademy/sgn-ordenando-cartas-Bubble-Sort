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



function visualizarBubbleSort(arr) {
  let wall = arr.length - 1;
  let j = 0;

  const sortContainer = document.querySelector('.cardSort');
  sortContainer.innerHTML = ""; // Limpiar visualizaciones anteriores

  function paso() {
    if (wall <= 0) return;

    if (j < wall) {
      if (valorNumerico(arr[j].numero) > valorNumerico(arr[j + 1].numero)) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      j++;
    } else {
      wall--;
      j = 0;
    }

    // Crear una nueva fila para este paso
    let fila = document.createElement("div");
    fila.className = "d-flex  gap-2 mb-3";

    arr.forEach(card => {
      let cardDiv = document.createElement("div");
      cardDiv.innerHTML = `
        <div class="card">
          <div class="head-card">
            <span class="icon-left" id="icon-left" style="color: ${card.icon.color}">${card.icon.pinta}</span>
          </div>
          <div class="body-card">
            <h1>${card.numero}</h1>  
          </div>
          <div class="footer-card">
            <span class="icon-right" id="icon-right" style="color: ${card.icon.color}">${card.icon.pinta}</span> 
          </div>
        </div>
      `;
      fila.appendChild(cardDiv);
    });

    sortContainer.appendChild(fila);

    setTimeout(paso, 500); // Esperar 500ms entre pasos
  }

  paso(); // Inicia el ordenamiento visual
}

sortButton.onclick = function () {
  cardContainer.innerHTML="";
  visualizarBubbleSort(cardsData);
};


