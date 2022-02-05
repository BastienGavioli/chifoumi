const languagesList = {
    "dutch": dutch = ["Steen", "Papier", "Schaar", "TALEN"],
    "english": english = ["Rock", "Paper", "Scissors", "LANGUAGES"],
    "esperento": esperento = ["Ŝtono", "Papero", "Tondilo", "LINGVOJ"],
    "french": french = ["Pierre", "Papier", "Ciseaux", "LANGUES"],
    "german": german = ["Stein", "Papier", "Schere", "SPRACHEN"],
    "italian" : italian = ["Sasso", "Carta", "Forbici", "LINGUE"],
    "japanese": japanese = ["グー", "パー", "チョキ", "他言語版"],
    "occitan": occitan = ["Pèira", "Fuèlha", "Talhants", "LENGAS"],
    "portuguese": portuguese = ["Pedra", "Papel", "Tesoura", "LÍNGUAS"],
    "russian": russian = ["Камень", "Бумага", "Ножницы", "ЯЗЫКОВ"],
    "spanish": spanish = ["Piedra", "Papel", "Tijera", "IDIOMAS"]
}
let selectedCard = null;
const rockCard = document.getElementById("rock");
const paperCard = document.getElementById("paper");
const scissorsCard = document.getElementById("scissors");
const tabCards = [rockCard, paperCard, scissorsCard];
const cardNames = document.querySelectorAll("#player span");
const fighterCardNames = document.querySelectorAll("#fighter-cards span");
const playerScoreDisplay = document.getElementById("playerScore");
const fighterScoreDisplay = document.getElementById("fighterScore");
let playerScore = 0;
let fighterScore = 0;

function chosenCard(button){
    for (const card of tabCards) card.style.border = "solid 2px black";
    if(tabCards.includes(button)) {
        button.style.border = "solid 5px black";
        selectedCard = button;
        document.getElementById("playButton").style.color = "#FFFFFF";
    } else{
        selectedCard = null;
        document.getElementById("playButton").style.color = "gray";
    }
}

function chooseLanguage(language){
    for(let i=0; i < cardNames.length; i++) {
        cardNames[i].innerHTML = languagesList[language][i];
        fighterCardNames[i].innerHTML = languagesList[language][i];
    }
    document.getElementById("languages-title").innerHTML = languagesList[language][3];
}

function display(idCard){
    document.getElementsByClassName("visible")[0].classList.add("hidden");
    document.getElementsByClassName("visible")[0].classList.remove("visible");
    document.getElementById(`${idCard}`).classList.add("visible");
}

function play(){
    if(selectedCard!==null){
        const robotHand = Math.floor(Math.random()*3);
        switch (robotHand) {
            case 0:
                display("adRock");
                break;
            case 1:
                display("adPaper");
                break;
            case 2:
                display("adScissors");
                break;
        }
        updatePoints(robotHand);
    }
}

function updatePoints(robotHand){
    const result = document.getElementById("result");
    if((robotHand===0 && selectedCard===rockCard) || (robotHand===1 && selectedCard===paperCard) ||
        (robotHand===2 && selectedCard===scissorsCard)){
        result.innerHTML = "DRAW!";
        result.style.color = "#D4AC0D";
    }

    else if((robotHand===0 && selectedCard===paperCard) || (robotHand===1 && selectedCard===scissorsCard) ||
        (robotHand===2 && selectedCard===rockCard)){
        result.innerHTML = "YOU WIN!";
        result.style.color = "green";
        playerScore++;
        playerScoreDisplay.innerHTML = playerScore.toString();
    }
    else{
        result.innerHTML = "YOU LOSE!";
        result.style.color = "red";
        fighterScore++;
        fighterScoreDisplay.innerHTML = fighterScore.toString();
    }
}