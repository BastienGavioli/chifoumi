const languagesList = {
    "dutch": dutch = ["Steen", "Papier", "Schaar", "TALEN", "SPEEL"],
    "english": english = ["Rock", "Paper", "Scissors", "LANGUAGES", "PLAY"],
    "esperanto": esperanto = ["Ŝtono", "Papero", "Tondilo", "LINGVOJ", "LUDI"],
    "french": french = ["Pierre", "Papier", "Ciseaux", "LANGUES", "JOUER"],
    "german": german = ["Stein", "Papier", "Schere", "SPRACHEN", "SPIELEN"],
    "italian" : italian = ["Sasso", "Carta", "Forbici", "LINGUE", "GIOCA"],
    "japanese": japanese = ["グー", "パー", "チョキ", "他言語版", "プレイ"],
    "occitan": occitan = ["Pèira", "Fuèlha", "Talhants", "LENGAS", "JOGAR"],
    "portuguese": portuguese = ["Pedra", "Papel", "Tesoura", "LÍNGUAS", "JOGAR"],
    "russian": russian = ["Камень", "Бумага", "Ножницы", "ЯЗЫКОВ", "ИГРАТЬ"],
    "spanish": spanish = ["Piedra", "Papel", "Tijera", "IDIOMAS", "JUGAR"]
}
let selectedCardP1 = null;
let selectedCardP2 = null;
let step = 1;
const rockP1 = document.getElementById("rock");
const paperP1 = document.getElementById("paper");
const scissorsP1 = document.getElementById("scissors");
const tabCardsP1 = [rockP1, paperP1, scissorsP1];
const rockP2 = document.getElementById("adRock");
const paperP2 = document.getElementById("adPaper");
const scissorsP2 = document.getElementById("adScissors");
const tabCardsP2 = [rockP2, paperP2, scissorsP2];
const cardNamesP1 = document.querySelectorAll("#player span");
const cardNamesP2 = document.querySelectorAll("#fighter span");
let P1Score = 0;
let P2Score = 0;
const languagesDisplay = document.getElementById("languages");

function chosenCardSolo(button){
    for (const card of tabCardsP1) card.style.border = "solid 2px black";
    button.style.border = "solid 5px black";
    selectedCardP1 = button;
    document.getElementById("playButton").style.color = "#FFFFFF";
}

function chooseLanguage(language){
    for(let i=0; i < 3; i++) {
        cardNamesP1[i].innerHTML = languagesList[language][i];
        cardNamesP2[i].innerHTML = languagesList[language][i];
    }
    document.getElementById("languages-title").innerHTML = languagesList[language][3];
    document.getElementById("playButton").innerHTML = languagesList[language][4];
}

function display(idCard){
    const bastien = document.getElementById("bastien");
    if(bastien.classList.contains("visibleSolo")) {
        bastien.classList.add("hiddenSolo");
        bastien.classList.remove("visibleSolo");
    }
    for(const fighterCard of tabCardsP2){
        fighterCard.classList.add("hiddenSolo");
        fighterCard.classList.remove("visibleSolo");
    }
    document.getElementById(`${idCard}`).classList.add("visibleSolo");
}

function displayParameters(){
    if(languagesDisplay.classList.contains("hiddenSolo")){
        languagesDisplay.classList.add("visibleSolo");
        languagesDisplay.classList.remove("hiddenSolo");
    } else {
        languagesDisplay.classList.add("hiddenSolo");
        languagesDisplay.classList.remove("visibleSolo");
    }
}

function playSolo(){
    if(selectedCardP1!==null){
        const robotHand = Math.floor(Math.random()*3);
        switch (robotHand) {
            case 0:
                display("adRock");
                selectedCardP2 = rockP2;
                break;
            case 1:
                display("adPaper");
                selectedCardP2 = paperP2;
                break;
            case 2:
                display("adScissors");
                selectedCardP2 = scissorsP2;
                break;
        }
        updatePoints();
    }
}

function updatePoints(){
    const result = document.getElementById("result");
    const P1ScoreDisplay = document.getElementById("playerScore");
    const P2ScoreDisplay = document.getElementById("fighterScore");
    if((selectedCardP2===rockP2 && selectedCardP1===rockP1) || (selectedCardP2===paperP2 && selectedCardP1===paperP1) ||
        (selectedCardP2===scissorsP2 && selectedCardP1===scissorsP1)){
        result.innerHTML = "DRAW!";
        result.style.color = "#D4AC0D";
    }
    else if((selectedCardP2===rockP2 && selectedCardP1===paperP1) || (selectedCardP2===paperP2 && selectedCardP1===scissorsP1) ||
        (selectedCardP2===scissorsP2 && selectedCardP1===rockP1)){
        result.innerHTML = "PLAYER 1 WINS!";
        result.style.color = "#D4AC0D";
        P1Score++;
        P1ScoreDisplay.innerHTML = P1Score.toString();
    }
    else{
        result.innerHTML = "PLAYER 2 WINS!";
        result.style.color = "#D4AC0D";
        P2Score++;
        P2ScoreDisplay.innerHTML = P2Score.toString();
    }
}

//DUAL CHIFOUMI

function chosenCardDuo(button){
    for (const card of tabCardsP1) card.style.border = "solid 2px black";
    for (const card of tabCardsP2) card.style.border = "solid 2px black";
    button.style.border = "solid 5px black";
    if(tabCardsP1.includes(button)){
        selectedCardP1 = button;
    }
    else selectedCardP2 = button;
    document.getElementById("playButton").style.color = "#FFFFFF";
}

function playDuo(){
    if(selectedCardP1!==null && step===1){
        displayP2();
        step = 2;
    }
    else if(selectedCardP2!==null && step===2){
        displayP1();
        step = 3;
    }
    if(step===3){
        updatePoints();
        selectedCardP1 = null;
        selectedCardP2 = null;
        step = 1;
    }
    document.getElementById("playButton").style.color = "gray";
}

function displayP1(){
    for(const p2Card of tabCardsP2){
        p2Card.classList.add("hiddenDuo");
        p2Card.classList.remove("visibleDuo");
    }
    for(const p1Card of tabCardsP1) {
        p1Card.classList.add("visibleDuo");
        p1Card.classList.remove("hiddenDuo");
    }
}

function displayP2(){
    for(const p1Card of tabCardsP1){
        p1Card.classList.add("hiddenDuo");
        p1Card.classList.remove("visibleDuo");
    }
    for(const p2Card of tabCardsP2) {
        p2Card.classList.add("visibleDuo");
        p2Card.classList.remove("hiddenDuo");
    }
}