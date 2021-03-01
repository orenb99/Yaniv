
class Deck{
    constructor(cards=[]){
        this.cards=cards;
    }
    addCard(card){
        this.cards.push(card);
    }
    removeCard(index){
        let afterRemove=[];
        for(let i=0;i<this.cards.length;i++){
            if(index!==i)
                afterRemove.push(this.cards[i]);
        }
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

