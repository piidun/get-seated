class Person {
    width: number = 32;
    height: number = 32;
    x: number;
    y: number;
    name: string;
    description: string;
    personSprite: p5.Image;
  
    draw() {
        image(this.personSprite, this.x, this.y, this.width, this.height);
    }
  }
  