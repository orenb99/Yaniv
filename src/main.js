
function main(params) {
//elements
const title=document.getElementById("title");
const counterElement= document.getElementById("turn-counter");
const player1Span=document.getElementById("player1-div").getElementsByTagName("span")[0];
const player2Span=document.getElementById("player2-div").getElementsByTagName("span")[0];
const player3Span=document.getElementById("player3-div").getElementsByTagName("span")[0];
const player4Span=document.getElementById("player4-div").getElementsByTagName("span")[0];
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
            element:player1Span, 
        },
        {
            deck:new PlayerDeck(),
            element:player2Span, 
        },
        {
            deck:new PlayerDeck(),
            element:player3Span, 
        },
        {
            deck:new PlayerDeck(),
            element:player4Span, 
        },
    ],
     appendAll() {
        for(let prop in this){
            let item=this[prop];
            if(prop==="playerArray"){
                for(let player of item)
                    appendDeck(player);
            }   
            else if(prop==="table"||prop==="pile")
                appendDeck(item);
        }
    }
};
counterElement.innerText=changeTurn();


    //event listeners
tableSpan.addEventListener("click",()=>{
    moveCard(gameObj.table.deck,gameObj.pile.deck,gameObj.table.deck.cards[0]);
    counterElement.innerText=changeTurn(parseInt(counterElement.innerText));
    updateByTurn(gameObj,counterElement);
})
    //calls
startGame(gameObj,counterElement);

}

main();