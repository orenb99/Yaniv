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
        if(!this.checkSameSuit(card)&&!this.checkSameValue(card))
            this.selectedCards=[];
        if(!this.selectedCards.includes(card)){
            this.selectedCards.push(card);
            if(!this.checkSerial()&&this.checkSameSuit(card)){
                if(card.isJoker)
                   return; 
                this.selectedCards=[];
                this.selectedCards.push(card);
            }
        }
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

    checkSameSuit(card){
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
    checkValues(array){
        const ranks=["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
        let arrayValues=array.map((value,index)=>
        value=ranks.indexOf(value.rank)+1
        );
        return arrayValues;
    }

    checkSerial(){
        let selectedValues=this.checkValues(this.selectedCards);
        selectedValues=sortValues(selectedValues);
        let serialArray=[];
        for(let i=0;i<selectedValues.length;i++){
            if(selectedValues[i]-1===selectedValues[i-1]||serialArray.length===0||selectedValues[i-1]===0){
                serialArray.push(selectedValues[i]);
            }
            else{
                return false;
            }
        }
        return true;
    }
}