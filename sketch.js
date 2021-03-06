var hr;
var min;
var sec;
var secAngle, minAngle, hrAngle;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  //rotate(-90)
  // translate(400, 200)


  // hr = hour()
  // min = minute()
  // sec = second()
  
  // angleMode(DEGREES)

  // secAngle = map(sec, 0, 60, 0, 360)
  // minAngle = map(min, 0, 60, 0, 360)
  // hrAngle = map(hr % 12, 0, 12, 0, 360)

  // noFill()
  // strokeWeight(5)




  // push()
  // rotate(secAngle)
  // stroke(255, 0, 0)
  // strokeWeight(5)
  // line(0, 0, 100, 0)
  // pop()
  // stroke(255, 0, 0)
  // arc(0, 0, 300, 300, 0, secAngle)

  // push()
  // stroke(255, 165, 0)
  // rotate(minAngle)
  // strokeWeight(5)
  // line(0, 0, 90, 0)
  // pop()
  // stroke(255, 165, 0)
  // arc(0, 0, 280, 280, 0, minAngle)

  // push()
  // rotate(hrAngle)
  // stroke(255, 255, 0)
  // strokeWeight(5)
  // line(0, 0, 60, 0)
  // pop()
  // stroke(255, 255, 0)
  // arc(0, 0, 260, 260, 0, hrAngle)


  translate(400, 200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  noFill();

  strokeWeight(8);


  stroke(255, 0, 0);
  secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);

  stroke(255, 165, 0);
  minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  stroke(255, 255, 0);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(secAngle);
  stroke(255, 0, 0);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(255, 165, 0);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255, 255, 0);
  line(0, 0, 50, 0);
  pop();

  drawSprites();
}