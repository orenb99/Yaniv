
    //elements
const title=document.getElementById("title");
const counterElement= document.getElementById("turn-counter");
const player1Div=document.getElementById("player1-div").getElementsByTagName("span")[0];;
const player2Div=document.getElementById("player2-div").getElementsByTagName("span")[0];;
const player3Div=document.getElementById("player3-div").getElementsByTagName("span")[0];;
const player4Div=document.getElementById("player4-div").getElementsByTagName("span")[0];;
const tableSpan=document.getElementById("table-div").getElementsByTagName("span")[0];
const pileSpan=document.getElementById("pile-div").getElementsByTagName("span")[0];

    //objects and variables

const gameObj={
    table:{
        deck:createTableDeck(),
        element:tableSpan
    },
    pile:{
        deck:new PileDeck(),
        element:pileSpan
    },
    playerArray:
    [   
        {
            deck:new PlayerDeck(),
            element:player1Div, 
        },
        {
            deck:new PlayerDeck(),
            element:player2Div, 
        },
        {
            deck:new PlayerDeck(),
            element:player3Div, 
        },
        {
            deck:new PlayerDeck(),
            element:player4Div, 
        },
    ],
};
counterElement.innerText=changeTurn();


    //event listeners
tableSpan.addEventListener("click",()=>{
    moveCard(gameObj.table.deck,gameObj.pile.deck,gameObj.table.deck.cards[0]);
    appendDeck(gameObj.pile.deck,gameObj.pile.element)
    appendDeck(gameObj.table.deck,gameObj.table.element)
    counterElement.innerText=changeTurn(parseInt(counterElement.innerText));
    updateByTurn();
})
 



    //main functions
function appendAll() {
    for(let prop in gameObj){
        let item=gameObj[prop];
        if(prop==="playerArray"){
            for(let player of item)
                appendDeck(player);
        }   
        else
            appendDeck(item);
    }
}

function updateByTurn() {
    let counter=parseInt(counterElement.innerText);
    let playersArr=gameObj.playerArray;
    for(let i=0;i<4;i++){
        if(counter-1===i)
            playersArr[i].deck.flipAll("up");
        else
            playersArr[i].deck.flipAll("down");
    }
    appendAll();
}

 function startGame() {
    appendAll();
    for(let i=0;i<20;i++){
         setTimeout(()=>{
            if(i<5){
                moveCard(gameObj.table.deck, gameObj.playerArray[0].deck, gameObj.table.deck.cards[0])
                appendDeck(gameObj.playerArray[0]);
            }
            else if(i<10&&i>4){
                moveCard(gameObj.table.deck, gameObj.playerArray[1].deck, gameObj.table.deck.cards[0])
               appendDeck(gameObj.playerArray[1]);
            
            }
            else if(i<15&&i>9){
                moveCard(gameObj.table.deck, gameObj.playerArray[2].deck, gameObj.table.deck.cards[0])
                appendDeck(gameObj.playerArray[2]);
            }
            else if(i<20&&i>14){
                moveCard(gameObj.table.deck, gameObj.playerArray[3].deck, gameObj.table.deck.cards[0])
                appendDeck(gameObj.playerArray[3]);
            }
            updateByTurn();
        },i*70);
    }
    addSelectListener(gameObj)
    
}

    //calls
startGame();



