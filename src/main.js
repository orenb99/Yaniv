function main() {
    //elements
    const title=document.getElementById("title");
    const player1=document.getElementById("player1-div");
    const player2=document.getElementById("player2-div");
    const player3=document.getElementById("player3-div");
    const player4=document.getElementById("player4-div");
    const tableDiv=document.getElementById("table-div");
    const pileDiv=document.getElementById("pile-div");

    //objects
    const tableDeck=createTableDeck();
    const pileDeck=new PileDeck();
    //pileDeck.addCard(new Card("Spades","ace",false));
    appendDeck(pileDeck,pileDiv.getElementsByTagName("span")[0]);
    appendDeck(tableDeck,tableDiv.getElementsByTagName("span")[0]);
    tableDiv.getElementsByTagName("span")[0].addEventListener("click",()=>{
        moveCard(tableDeck,pileDeck,tableDeck.cards[0]);
        appendDeck(pileDeck,pileDiv.getElementsByTagName("span")[0])
        appendDeck(tableDeck,tableDiv.getElementsByTagName("span")[0])
    })
    console.log(pileDeck)


    
}
main();

