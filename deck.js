class Deck {
  constructor(images) {
    this.cards = [];
    images.forEach((image) => {
      this.cards.push(new Card(image));
      this.cards.push(new Card(image));
    });
  }

  shuffle() {
    return this.cards.sort(() => Math.random() - 0.5);
  }

  deleteCard(card) {
    let index = this.cards.findIndex((item) => item.backImg == card.backImg);
    if (index != -1) {
      this.cards.splice(index, 1);
      card.disconnectedFromDOM();
    } else {
      this.isEmpty = true;
    }
  }
}
