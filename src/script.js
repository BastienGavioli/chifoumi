function chosen(button){
    const tabCards = document.getElementsByTagName("button");
    for (const card of tabCards) card.style.border = "solid 2px black";
    button.style.border = "solid 5px black";
}