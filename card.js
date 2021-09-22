class Card {
  constructor(imageUrl) {
    this.backImg = `./images/${imageUrl}`;
    this.element = document.createElement("div");
    this.element.classList.add("card");
    this.element.innerHTML = `
      <div class="card-front" style="background: linear-gradient(
        270deg,
        #c3eee8 26.37%,
        rgba(195, 226, 222, 0.75) 63.87%,
        rgba(231, 243, 242, 0.4) 103.6%
      )"></div>
      <div class="card-back" style="background-image: url('${this.backImg}')"></div>
    `;
    this.isFlipped = false;
    this.element.connectedCard = this;
  }

  flip() {
    this.isFlipped
      ? (this.element.style.transform = "rotateY(360deg)")
      : (this.element.style.transform = "rotateY(180deg)");
    this.isFlipped = !this.isFlipped;
  }

  disconnectedFromDOM() {
    this.element.connectedCard = null;
  }
}
