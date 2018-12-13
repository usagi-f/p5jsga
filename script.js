let count = 0
let instanceArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  while (count < 500) {
    instanceArray[count] = new Line(count);
    count++;
  }
}

function draw() {
  background('white');
  instanceArray.map(func => {
    func.move();
    func.display();
  });
}

function Line(count) {
  this.start = windowHeight / 2;
  this.end = random(1000);
  this.increment = count * 10;
  this.speed = 2;
 
  this.move = function() {
    this.end += random(-this.speed, this.speed);
  };
 
  this.display = () => {
    stroke('#ccc');
    strokeWeight(5);
    line(this.increment, this.start, this.increment, this.end);
  }
};
