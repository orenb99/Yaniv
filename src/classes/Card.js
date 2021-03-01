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