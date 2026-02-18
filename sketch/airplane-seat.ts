class AirplaneSeat {
    width: number = 32;
    height: number = 32;
    x: number;
    y: number;
  
    draw() {
        image(Assets.seatSprite, this.x, this.y, this.width, this.height);
    }
  }
  