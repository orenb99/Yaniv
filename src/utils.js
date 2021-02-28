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
    if(card.face==="up")
        cardDiv.innerHTML=(`<h3>${card.toString()}</h3>`);
    else{
        cardDiv.innerHTML=(`<img src="./imgs/card-back.png"></img>`);
    }
    cardDiv.classList.add("card",card.face,card.suit);    
    return cardDiv;
}

function createTableDeck() {
    const deck=new TableDeck();
    deck.fill();
    deck.mix();
    return deck;
}
function appendDeck(item) {
    item.element.innerHTML="";
    if(item.deck.cards.length===0)
        return;
    for(let card of item.deck.cards){
        let newCard=createCard(card);
        if(item.element.classList[0]!=="player-deck")
            newCard.hidden=true;
        item.element.append(newCard);
    }
    if(item.element.parentNode.id==="table-div")
        item.element.firstChild.hidden=false;

    else if(item.element.parentNode.id==="pile-div")
        item.element.lastChild.hidden=false;
}

function moveCard(fromDeck,toDeck,card) {
    if(card===undefined)
        return
    toDeck.addCard(card);
    fromDeck.removeCard(fromDeck.cards.indexOf(card));
}

function addSelectListener(gameObj) {
    for(let i=0;i<4;i++){
    gameObj.playerArray[i].element.addEventListener("click",(event)=>{
    let target=event.target;
    if(target.classList[0]==="card"){
        let childrenArr=[];
        for(let child of gameObj.playerArray[i].element.children){
            childrenArr.push(child);
        }
        let index=childrenArr.indexOf(target);
        target.classList.toggle("selected");
        gameObj.playerArray[i].deck.selectCard(gameObj.playerArray[i].deck.cards[index]);
    }
})
}
}