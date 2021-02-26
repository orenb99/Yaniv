class Card{
    constructor(suit,rank,isJoker=false){
        this.suit=suit;
        this.rank=rank;
        this.isJoker=isJoker;
        this.face="up";
    }

    flip(face){
        if(face==="up"||face==="down")
            this.face=face;
    }

}

class Deck{
    constructor(cards){
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
}

let d=new Deck([new Card(1,2,true),new Card(1,3,false)]);
d.addCard(new Card(1,5,false));
d.removeCard(5);
d.cards[1].flip("down");
console.log(d);