function changeTurn(currentTurn=Math.floor(Math.random()*4+1)) {
    if(currentTurn>4||currentTurn<1)
        return;
    if(currentTurn===4)
        currentTurn= 1;
    else
        currentTurn++;

    return currentTurn;
    
}

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
function appendDeck(deck,element) {
    element.innerHTML="";
    if(deck.cards.length===0)
        return;
    for(let card of deck.cards){
        let newCard=createCard(card);
        if(element.classList[0]!=="player-deck")
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