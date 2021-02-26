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
