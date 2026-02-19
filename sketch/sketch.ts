let airplane: Airplane;
let persons: Person[] = [];

function preload() {
  Assets.load();
}

function setup() {
  createCanvas(512, 512)
  init();

  let person = new Person();
  person.x = 144;
  person.y = 122;
  person.name = "Dudeson";
  person.description = "A cool dude";
  person.personSprite = Assets.personDudeson;

  persons.push(person);
}

function init() {
  airplane = new Airplane();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  airplane.draw();

  for (let person of persons) {
    person.draw();
  }
}