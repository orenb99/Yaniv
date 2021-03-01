class TableDeck extends Deck{
    constructor() {
       super();
       this.fill();
       this.mix();
   }
   fill() {
       let cardsArr=[];
       const suits=["Spades","Clubs","Hearts","Diamonds"];
       const ranks=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
       for(let suit of suits){
           for(let rank of ranks){
               cardsArr.push(new Card(suit,rank))
           }
       }
       cardsArr.push(new Card("Red",1,true));
       cardsArr.push(new Card("Black",1,true));
       this.cards=cardsArr;
   }
   mix(){
       let checkArr=[];
       let finalArr=[];
       let index=0;
       while(finalArr.length<54){
           index=Math.floor(Math.random()*54);
           if(checkArr[index]===undefined){
               finalArr.push(this.cards[index]);
               checkArr[index]=true;
           }
       }
       this.cards=finalArr;
   }
}