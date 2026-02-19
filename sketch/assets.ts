class Assets {
  public static seatSprite: p5.Image;
  public static personDudeson: p5.Image;
  public static personJanedoe: p5.Image;

  public static load() {
    this.seatSprite = loadImage("../assets/airplane-seat.png");
    this.personDudeson = loadImage("../assets/dudeson.png");
    this.personJanedoe = loadImage("../assets/woman.png");
  }
}