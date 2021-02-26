function main() {
    //elements
    const title=document.getElementById("title");
    const player1=document.getElementById("player1-div");
    const player2=document.getElementById("player2-div");
    const player3=document.getElementById("player3-div");
    const player4=document.getElementById("player4-div");
    const tableSpan=document.getElementById("table-div").getElementsByTagName("span")[0];
    const pileSpan=document.getElementById("pile-div").getElementsByTagName("span")[0];

    //objects and variables
    let turnCounter=1;
    const tableDeck=createTableDeck();
    const pileDeck=new PileDeck();

    //appends
    appendDeck(pileDeck,pileSpan);
    appendDeck(tableDeck,tableSpan);

    //event listeners
    tableSpan.addEventListener("click",()=>{
        moveCard(tableDeck,pileDeck,tableDeck.cards[0]);
        appendDeck(pileDeck,pileSpan)
        appendDeck(tableDeck,tableSpan)
    })
    
}
main();

