class GameManager {
  constructor(images, board, score) {
    this.images = images;
    this.boardElement = board;
    this.attemptElement = score;
    this.deck = new Deck(images);
  }

  startGame() {
    this.boardElement.innerHTML = "";
    this.deck = new Deck(this.images);
    this.firstCard = null;
    this.secondCard = null;
    this.attemptNumber = 0;
    this.attemptElement.innerHTML = this.attemptNumber;
    this.shuffleAndDeal();
  }

  shuffleAndDeal() {
    const cards = this.deck.shuffle();
    cards.forEach((card) => {
      this.boardElement.append(card.element);
    });
  }

  selectCard(card) {
    if (card == this.firstCard) {
      return;
    }

    card.flip();

    if (!this.firstCard) {
      this.firstCard = card;
    } else if (!this.secondCard) {
      this.secondCard = card;
      if (this.firstCard.backImg != this.secondCard.backImg) {
        setTimeout(() => {
          this.firstCard.flip();
          this.secondCard.flip();
          this.firstCard = this.secondCard = null;
        }, 500);
      } else {
        this.deck.deleteCard(this.firstCard);
        this.deck.deleteCard(this.secondCard);
        this.firstCard = this.secondCard = null;
      }
      this.attemptNumber++;
      this.attemptElement.innerHTML = this.attemptNumber;
    }
  }
}
