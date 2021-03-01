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
        this.checkSerial(card);
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

    checkSerial(card){
        let value=card.rank;
        if(value==="Joker")
            return true;
    }
        
}