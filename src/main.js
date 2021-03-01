
function main() {

    //elements
const title=document.getElementById("title");
const counterElement= document.getElementById("turn-counter");
const player1Span=document.getElementById("player1-div").getElementsByTagName("span")[0];
const player2Span=document.getElementById("player2-div").getElementsByTagName("span")[0];
const player3Span=document.getElementById("player3-div").getElementsByTagName("span")[0];
const player4Span=document.getElementById("player4-div").getElementsByTagName("span")[0];
const tableSpan=document.getElementById("table-div").getElementsByTagName("span")[0];
const pileSpan=document.getElementById("pile-div").getElementsByTagName("span")[0];
const yanivButton=document.getElementById("yaniv-button");

    //objects and variables
const gameObj={
    table:{
        deck:new TableDeck(),
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
let currentPlayer=gameObj.playerArray[Number(counterElement.innerText)-1];

    //event listeners
    
for(let i=0;i<2;i++){
    let prop=Object.getOwnPropertyNames(gameObj)[i];
    gameObj[prop].element.addEventListener("click",async ()=>{
        if(currentPlayer.deck.selectedCards.length<1)
            return;
        let index=((i===0) ? 0 : gameObj[prop].deck.cards.length-1);
        currentPlayer.deck.pass(gameObj.pile);
        moveCard(gameObj[prop].deck,currentPlayer.deck,gameObj[prop].deck.cards[index]);
        gameObj.appendAll();
        counterElement.innerText=changeTurn(parseInt(counterElement.innerText));

        await setTimeout(()=>{
            //fix to not be able to select after passing
            updateByTurn(gameObj,counterElement);
            currentPlayer=gameObj.playerArray[Number(counterElement.innerText)-1];
        },3000);
    })
}

yanivButton.addEventListener("click",()=>{
    stopGame(gameObj);
})


    //calls
startGame(gameObj,counterElement);

}

main();