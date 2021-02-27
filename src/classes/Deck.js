class Card{
    constructor(suit,rank,isJoker=false){
        this.isJoker=isJoker;
        this.face="down";
        if(isJoker===false){
            this.suit=suit;
            this.rank=rank;
        }
        else {
            this.suit="Joker";
            this.rank="Joker";
        }
    }

    flip(face){
        if(face==="up"||face==="down")
            this.face=face;
    }

    static generate(){
        const suits=["Spades","Clubs","Hearts","Diamonds"];
        const ranks=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
        let suit= Math.floor(Math.random()*4);
        let rank=Math.floor(Math.random()*13);
        return new Card(suits[suit],ranks[rank]);
    }

    toString(){
        if(this.isJoker===false)
            return this.rank+" Of "+this.suit
        else
            return this.rank;
    }
}

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

class TableDeck extends Deck{
    
    fill() {
        let cardsArr=[];
        const suits=["Spades","Clubs","Hearts","Diamonds"];
        const ranks=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
        for(let suit of suits){
            for(let rank of ranks){
                cardsArr.push(new Card(suit,rank))
            }
        }
        cardsArr.push(new Card(1,1,true));
        cardsArr.push(new Card(1,1,true));
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

class PileDeck extends Deck{
    addCard(card){
        card.flip("up");
        super.addCard(card);
    }
}
class PlayerDeck extends Deck{
}
