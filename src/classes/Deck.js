class Card{
    constructor(suit,rank,isJoker=false){
        this.isJoker=isJoker;
        this.face="down";
        if(isJoker===false){
            this.suit=suit;
            this.rank=rank;
        }
        else {
            this.suit=suit;
            this.rank="Joker";
        }
    }

    flip(face){
        if(face==="up"||face==="down")
            this.face=face;
    }

    static createRandomCard(){
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
            return this.suit+" "+this.rank;
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

class PileDeck extends Deck{
    addCard(card){
        card.flip("up");
        super.addCard(card);
    }
}
class PlayerDeck extends Deck{
    constructor(){
        super();
        this.selectedCards=[];
    }

    addCard(card){
        card.flip("up");
        super.addCard(card);
    }

    flipAll(stance){
        for(let card of this.cards)
            card.flip(stance);
    }

    selectCard(card){
        if(!this.checkSame(card))
            this.selectedCards=[];
        if(!this.selectedCards.includes(card))
            this.selectedCards.push(card);
        else{
            let afterRemove=[];
            for(let i=0;i<this.selectedCards.length;i++){
                if(this.selectedCards.indexOf(card)!==i)
                    afterRemove.push(this.selectedCards[i]);
            }
            this.selectedCards=afterRemove;
        }
            
    }
    checkSame(card){
        let value=card.rank;
        if(value==="Joker")
            return true;
        for(let item of this.selectedCards){
            if(item.rank!==value&&item.rank!=="Joker"){
                return false;
            }
        }
        return true;
    }
        
}
