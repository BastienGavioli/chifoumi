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
    "russian": russian = ["Камень", "Бумага", "Ножницы", "НА ДРУГИХ ЯЗЫКАХ"],
    "spanish": spanish = ["Piedra", "Papel", "Tijera", "IDIOMAS"]
}

function chosenCard(button){
    const tabCards = document.getElementsByTagName("button");
    for (const card of tabCards) card.style.border = "solid 2px black";
    button.style.border = "solid 5px black";
}

function chooseLanguage(language){
    let cardNames = document.querySelectorAll("#player span");
    for(let i=0; i < cardNames.length; i++) cardNames[i].innerHTML = languagesList[language][i];
    document.getElementById("languages-title").innerHTML = languagesList[language][3];
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