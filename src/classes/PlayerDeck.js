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
        if(!this.checkSerial(card)&&!this.checkSameValue(card))
            this.selectedCards=[];
        if(!this.selectedCards.includes(card))
            this.selectedCards.push(card);
        else{
            let afterRemove=this.selectedCards.filter((value,index)=>
            index!==this.selectedCards.indexOf(card));
            this.selectedCards=afterRemove;
        }
            
    }
    checkSameValue(card){
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

    checkSerial(card){
        let value=card.rank;
        let suit= card.suit;
        if(value==="Joker")
            return true;
        for(let item of this.selectedCards){
            if(item.suit!==suit&&item.rank!=="Joker"){
                return false;
            }
        }
        return true;
        
    }
        
}