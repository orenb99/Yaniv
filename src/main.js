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
counterElement.innerText=changeTurn();
const tableDeck=createTableDeck();
const pileDeck=new PileDeck();
const player1Deck=new PlayerDeck();
const player2Deck=new PlayerDeck();
const player3Deck=new PlayerDeck();
const player4Deck=new PlayerDeck();

    //event listeners
tableSpan.addEventListener("click",()=>{
    moveCard(tableDeck,pileDeck,tableDeck.cards[0]);
    appendDeck(pileDeck,pileSpan)
    appendDeck(tableDeck,tableSpan)
    counterElement.innerText=changeTurn(parseInt(counterElement.innerText));
    updateByTurn();
})

    //main functions
function appendAll() {
    appendDeck(pileDeck,pileSpan);
    appendDeck(tableDeck,tableSpan);
    appendDeck(player1Deck,player1);
    appendDeck(player2Deck,player2);
    appendDeck(player3Deck,player3);
    appendDeck(player4Deck,player4);
}

function updateByTurn() {
    let counter=parseInt(counterElement.innerText);
    let playersArr=[player1Deck,player2Deck,player3Deck,player4Deck];
    for(let i=0;i<4;i++){
        if(counter-1===i)
            playersArr[i].flipAll("up");
        else
            playersArr[i].flipAll("down");
    }
    appendAll();
}

 function startGame() {
    appendDeck(pileDeck,pileSpan);
    appendDeck(tableDeck,tableSpan);
    for(let i=0;i<20;i++){
         setTimeout(()=>{
            if(i<5){
                moveCard(tableDeck,player1Deck,tableDeck.cards[0])
                appendDeck(player1Deck,player1);
            }
            else if(i<10&&i>4){
                moveCard(tableDeck,player2Deck,tableDeck.cards[0])
                appendDeck(player2Deck,player2);
            
            }
            else if(i<15&&i>9){
                moveCard(tableDeck,player3Deck,tableDeck.cards[0])
                appendDeck(player3Deck,player3);
            }
            else if(i<20&&i>14){
                moveCard(tableDeck,player4Deck,tableDeck.cards[0])
                appendDeck(player4Deck,player4);
            }
            updateByTurn();
        },i*70);
    }
    
}

    //calls
startGame();



