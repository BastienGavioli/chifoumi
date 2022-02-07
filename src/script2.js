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
const rockCardP1 = document.getElementById("rock");
const paperCardP1 = document.getElementById("paper");
const scissorsCardP1 = document.getElementById("scissors");
const tabCardsP1 = [rockCardP1, paperCardP1, scissorsCardP1];
const rockCardP2 = document.getElementById("adRock");
const paperCardP2 = document.getElementById("adPaper");
const scissorsCardP2 = document.getElementById("adScissors");
const tabCardsP2 = [rockCardP2, paperCardP2, scissorsCardP2];
const cardNamesP1 = document.querySelectorAll("#player span");
const cardNamesP2 = document.querySelectorAll("#fighterCards span");
let P1Score = 0;
let P2Score = 0;
const languagesDisplay = document.getElementById("languages");

function chosenCard(button){
    for (const card of tabCardsP1) card.style.border = "solid 2px black";
    for (const card of tabCardsP2) card.style.border = "solid 2px black";
    button.style.border = "solid 5px black";
    if(tabCardsP1.includes(button)){
        selectedCardP1 = button;
    }
    else selectedCardP2 = button;
    document.getElementById("playButton").style.color = "#FFFFFF";
}

function chooseLanguage(language){
    for(let i=0; i < cardNamesP1.length; i++) {
        cardNamesP1[i].innerHTML = languagesList[language][i];
        cardNamesP2[i].innerHTML = languagesList[language][i];
    }
    document.getElementById("languages-title").innerHTML = languagesList[language][3];
    document.getElementById("playButton").innerHTML = languagesList[language][4];
}

function displayParameters(){
    if(languagesDisplay.classList.contains("hidden")){
        languagesDisplay.classList.add("visible");
        languagesDisplay.classList.remove("hidden");
    } else {
        languagesDisplay.classList.add("hidden");
        languagesDisplay.classList.remove("visible");
    }
}

function updatePoints() {
    const result = document.getElementById("result");
    const playerScoreDisplay = document.getElementById("playerScore");
    const fighterScoreDisplay = document.getElementById("fighterScore");
    if ((selectedCardP2 === rockCardP2 && selectedCardP1 === rockCardP1) ||
        (selectedCardP2 === paperCardP2 && selectedCardP1 === paperCardP1) ||
        (selectedCardP2 === scissorsCardP2 && selectedCardP1 === scissorsCardP1)) {
        result.innerHTML = "DRAW!";
        result.style.color = "#000000";
    } else if ((selectedCardP2 === rockCardP2 && selectedCardP1 === paperCardP1) ||
        (selectedCardP2 === paperCardP2 && selectedCardP1 === scissorsCardP1) ||
        (selectedCardP2 === scissorsCardP2 && selectedCardP1 === rockCardP1)) {
        result.innerHTML = "PLAYER 1 WINS!";
        result.style.color = "green";
        P1Score++;
        playerScoreDisplay.innerHTML = P1Score.toString();
    } else {
        result.innerHTML = "PLAYER 2 WINS!";
        result.style.color = "red";
        P2Score++;
        fighterScoreDisplay.innerHTML = P2Score.toString();
    }
}

    //DUAL CHIFOUMI
    function dualPlay(){
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
            p2Card.classList.add("hidden");
            p2Card.classList.remove("visible");
        }
        for(const p1Card of tabCardsP1) {
            p1Card.classList.add("visible");
            p1Card.classList.remove("hidden");
        }
    }

    function displayP2(){
        for(const p1Card of tabCardsP1){
            p1Card.classList.add("hidden");
            p1Card.classList.remove("visible");
        }
        for(const p2Card of tabCardsP2) {
            p2Card.classList.add("visible");
            p2Card.classList.remove("hidden");
        }
    }