
const deutsch = ["Stein", "Papier", "Schere"];
const english = ["Rock", "Paper", "Scissors"];
const espanol = ["Piedra", "Papel", "Tijera"];
const esperento = ["Ŝtono", "Papero", "Tondilo"]
const francais = ["Pierre", "Papier", "Ciseaux"];
const italiano = ["Sasso", "Carta", "Forbici"];
const japanese = ["グー", "パー", "チョキ"];
const nederlands = ["Steen", "Papier", "Schaar"];
const occitan = ["Pèira", "Fuèlha", "Talhants"];
const portugues = ["Pedra", "Papel", "Tesoura"];
const russian = ["Камень", "Бумага", "Ножницы"];

const name = {
    "deutsch": deutsch,
    "english": english,
    "espanol": espanol,
    "esperento": esperento,
    "francais": francais,
    "italiano" : italiano,
    "japanese": japanese,
    "nederlands": nederlands,
    "occitan": occitan,
    "portugues": portugues,
    "russian": russian
}

function chosen(button){
    const tabCards = document.getElementsByTagName("button");
    for (const card of tabCards) card.style.border = "solid 2px black";
    button.style.border = "solid 5px black";
}

function chooseLangage(langage){
    cardNames = document.querySelectorAll("#player p");
    for(let i=0; i < cardNames.length; i++) cardNames[i].innerHTML = name[langage][i];
}

function display(idCard){
    document.getElementsByClassName("visible")[0].classList.add("hidden");
    document.getElementsByClassName("visible")[0].classList.remove("visible");
    document.getElementById(`${idCard}`).classList.add("visible");
}

function play(){
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
}