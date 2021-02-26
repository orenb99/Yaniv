function createCard(card) {
    const cardDiv=document.createElement("div");
    cardDiv.classList.add("card",card.face,card.suit);
    if(card.face==="up")
        cardDiv.innerHTML=(`<h3>${card.toString()}</h3>`);
    else{
        cardDiv.innerHTML=(`<img src="./imgs/card-back.png"></img>`);
    }
        
    return cardDiv;
}

function createTableDeck() {
    const deck=new TableDeck();
    deck.fill();
    deck.mix();
    return deck;
}
function appendDeck(tableObj,element) {
    if(tableObj.cards.length===0)
        return;
    element.innerHTML="";
    for(let card of tableObj.cards){
        let newCard=createCard(card);
        newCard.hidden=true;
        element.append(newCard);
    }
    if(element.parentNode.id==="table-div")
        element.firstChild.hidden=false;

    else if(element.parentNode.id==="pile-div")
        element.lastChild.hidden=false;
}

function moveCard(fromDeck,toDeck,card) {
    if(card===undefined)
        return
    toDeck.addCard(card);
    fromDeck.removeCard(fromDeck.cards.indexOf(card));
}