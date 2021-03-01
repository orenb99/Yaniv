class PileDeck extends Deck{
    addCard(card){
        card.flip("up");
        super.addCard(card);
    }
}