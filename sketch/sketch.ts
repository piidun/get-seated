let airplane: Airplane;

function preload() {
  Assets.load();
}

function setup() {
  createCanvas(512, 512)
  init();
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
}