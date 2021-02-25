import Card from "Card.js";
export class Deck{
    constructor(cards){
        this.cards=cards;
    }
    addCard(card){
        this.cards.push(card);
    }
    removeCard(index){
        let afterRemove=[];
        this.cards[index]=0;
        for(let i=0;i<this.cards.length;i++){

        }
    }
}
let c=new Card(2,2,2);
console.log(c);