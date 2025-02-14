"use strict";

// Variables globales.
let cardsValue = [
    '1', '1', '2', '2',
    '3', '3', '4', '4',
    '5', '5', '6', '6',
    '7', '7', '8', '8',
];

let cardsVisible = [
    false, false, false, false,
    false, false, false, false,
    false, false, false, false,
    false, false, false, false,
];

let cardsDeck = document.getElementById("cards");

let firstCardClicked = -1;
let nbCardClicked = 0;


let newGameButton = document.getElementById("new-game");
let resetButton = document.getElementById("reset");

newGameButton.addEventListener("click", onNewGameClick, false);
resetButton.addEventListener("click", onResetClick, false);

window.addEventListener("DOMContentLoaded", init);

let cardClicked = document.querySelectorAll("section > div");
for(let i = 0; i < cardClicked.length; i++)
{
    cardClicked[i].addEventListener("click", onCardClick, false);
}
   
function init() {
    mixCards();
}

function onResetClick() {
    for (let i = 0; i < cardClicked.length; i++)
    {
        if (cardsVisible[i] != true) {
            cardClicked[i].innerHTML = "✖";
        }
    }
    nbCardClicked = 0;
    firstCardClicked = -1;
}
function onNewGameClick() {
    for (let i = 0; i < cardsVisible.length; i++) {
        cardsVisible[i] = false;
    }

    mixCards();
    onResetClick();
}
function mixCards() {
    for (let i = 0; i < cardsValue.length; i++) {
        let temporary = cardsValue[i];
        let random = getRandomNumber(i, cardsValue.length - 1);
        cardsValue[i] = cardsValue[random];
        cardsValue[random] = temporary;
    }
}
//Fonction vue dans la correction d'un excercice.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function onCardClick(event) {

    if (nbCardClicked < 2 && cardsVisible[event.target.id] == false) {
        event.target.innerHTML = "<img src=\"img/card" + cardsValue[event.target.id] + ".png\">";
        nbCardClicked++;
        if (firstCardClicked == -1) {
            firstCardClicked = event.target.id;
        }   
        else if (cardsValue[event.target.id] == cardsValue[firstCardClicked]) {
            cardsVisible[event.target.id] = true;
            cardsVisible[firstCardClicked] = true;
            firstCardClicked = -1;
            nbCardClicked = 0;
        }
    }
}