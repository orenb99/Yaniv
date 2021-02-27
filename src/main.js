function main() {
    //elements
    const title=document.getElementById("title");
    const counterElement= document.getElementById("turn-counter");
    const player1=document.getElementById("player1-div").getElementsByTagName("span")[0];;
    const player2=document.getElementById("player2-div").getElementsByTagName("span")[0];;
    const player3=document.getElementById("player3-div").getElementsByTagName("span")[0];;
    const player4=document.getElementById("player4-div").getElementsByTagName("span")[0];;
    const tableSpan=document.getElementById("table-div").getElementsByTagName("span")[0];
    const pileSpan=document.getElementById("pile-div").getElementsByTagName("span")[0];

    //objects and variables
    counterElement.innerText=turnChange();
    const tableDeck=createTableDeck();
    const pileDeck=new PileDeck();
    const player1Deck=new PlayerDeck();
    const player2Deck=new PlayerDeck();
    const player3Deck=new PlayerDeck();
    const player4Deck=new PlayerDeck();

    //appends
    appendDeck(pileDeck,pileSpan);
    appendDeck(tableDeck,tableSpan);
    appendDeck(player1Deck,player1);
    appendDeck(player2Deck,player2);
    appendDeck(player3Deck,player3);
    appendDeck(player4Deck,player4);

    //event listeners
    tableSpan.addEventListener("click",()=>{
        moveCard(tableDeck,pileDeck,tableDeck.cards[0]);
        appendDeck(pileDeck,pileSpan)
        appendDeck(tableDeck,tableSpan)
        counterElement.innerText=turnChange(parseInt(counterElement.innerText));
    })

    function startGame() {
    for(let i=0;i<20;i++){
        moveCard(tableDeck,player1Deck,tableDeck.cards[i])
    }
    }
}
main();

//main functions

