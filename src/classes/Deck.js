
class Deck{
    constructor(cards=[]){
        this.cards=cards;
    }
    addCard(card){
        this.cards.push(card);
    }
    removeCard(index){
        let afterRemove=this.cards.filter((value,i)=>index!==i);
        this.cards=afterRemove;
    }
    show(){
        if(this.cards.length===0){
            console.log("the deck is empty");
            return;
        }
        for(let card of this.cards){
            console.log(card.toString())
        }
    }
    
}

