"use strict"
//Auteur: Charles-Edouard Roseberry

let usernameError = document.getElementById("username-error")
let userName = document.getElementById("txt-username");
let playForm = document.getElementById("play-form");
playForm.addEventListener("submit", onPlayClick, false);

function onPlayClick(event) {
    let isFormCompleted = true;

    if (!verifyName(userName)) {
        isFormCompleted = false;

    }

    if (!isFormCompleted) {
        event.preventDefault();
        usernameError.textContent = "You must enter a name."
    }
}

function verifyName(input) {
    let isValid = true;
    if (input.value == "") {
        isValid = false;
    }
    return isValid;
}