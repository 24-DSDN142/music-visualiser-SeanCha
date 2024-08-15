
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let drumTurn = 0
let counter2 = 0
let drumDecay = 0
let bubbleDecay = 2
let bubble = []
let bubbleMove = []
let bubbleMove2 = []
let bubbleDist = 14

let circleDecay = 100
let circleSize = 0
let circleArr = [100,200]

let testCounter = []
  
let circles = []
let circles2 = []
let firstRun = true
let img;

let particles = [];

let mode = 0




class Particle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-2, -z);
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 6;
  }

  show() {
    noStroke();
    fill(255, this.alpha, 0, this.alpha);
    ellipse(this.x, this.y, 10);
  }

  isFinished() {
    return this.alpha <= 0;
  }
}

// Fire class to manage the particles
class Fire {
  constructor() {
    this.particles = [];
  }

  addParticle(x, y, z) {
    this.particles.push(new Particle(x, y, z));
    this.particles.push(new Particle(x-(random(10,50)), y, z));
    this.particles.push(new Particle(x+(random(10,50)), y, z));
    this.particles.push(new Particle(x-(random(50,100)), y, z));
    this.particles.push(new Particle(x+(random(50,100)), y, z));
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].isFinished()) {
        this.particles.splice(i, 1);
      }
    }
    //console.log(this.particles.length)
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }
}

// Create an instance of the Fire class
let fire = new Fire();

for (let x = 0; x < width; x += 20) {
  for (let y = 0; y < height; y += 20) {
    particles.push(new Particle2(x, y, random(10,20)));
    line(x,y,10)
  }
}


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  bubbleDecay--
  let bassSize2 = map(bass, 50, 100, 10, 120)
  let bassSize3 = map(bass, 50, 100, 120, 50)
  function makeCurve(anchorX1, anchorX2, anchorY){
    let vocalSize = map(vocal,0,100,anchorY,anchorY+400)
    let vocalSize2 = map(vocal,0,100,anchorY,anchorY-400)
    let x1 = anchorX2-75
    let y1 = vocalSize
    let x2 = anchorX2-25
    let y2 = vocalSize2
    noFill();
    stroke(130, 91, 179);
    strokeWeight(7);
    bezier(anchorX1,anchorY,x1,y1,x2,y2,anchorX2,anchorY)
    strokeWeight(1)
    fill(130,91,179)
    // let x = bezierPoint(anchorX1,x1,x2,anchorX2,0.7)
    // let y = bezierPoint(anchorY,y1,y2,anchorY,0.7)
    // let xTri = bezierPoint(anchorX1,x1,x2,anchorX2,0.65)
    // let yTri = bezierPoint(anchorY,y1,y2,anchorY,0.65)
    // triangle(x,y,xTri,yTri,(x+xTri)/2-5,(y+yTri)/2-10)
    // let x3 = bezierPoint(anchorX1,x1,x2,anchorX2,0.5)
    // let y3 = bezierPoint(anchorY,y1,y2,anchorY,0.5)
    // let xTri2 = bezierPoint(anchorX1,x1,x2,anchorX2,0.45)
    // let yTri2 = bezierPoint(anchorY,y1,y2,anchorY,0.45)
    // triangle(x3,y3,xTri2,yTri2,(x+xTri2)/2-20,(y+yTri2)/2+5)
  
    strokeWeight(3)
    function bubbleMovement(){
      for (let i=0;i<30;i++)
        bubbleMove2.push(i/30)
    }
    bubbleMovement()
    for (let i=0;i<30;i++){                          //bubbles
      bubbleMove2[i] = bubbleMove2[i]+0.001
      if (bubbleMove2[i]>=1){
        bubbleMove2[i]=0
      }
      let xGlow = bezierPoint(anchorX1,x1,x2,anchorX2,1-bubbleMove2[i])
      let xGlow1 = bezierPoint(anchorX1-bubbleDist,x1,x2,anchorX2-bubbleDist,1-bubbleMove2[i])
      let xGlow2 = bezierPoint(anchorX1+bubbleDist,x1,x2,anchorX2+bubbleDist,1-bubbleMove2[i])
      let yGlow = bezierPoint(anchorY,y1,y2,anchorY,1-bubbleMove2[i])
      stroke(237, 107, 239)
      point(xGlow,yGlow)
      point(xGlow1,yGlow)
      point(xGlow2,yGlow)
    }
  }



  function circleCreator(){
  fill(0)
  stroke(255)
  let bassSize = map(bass, 0, 100, -3,7)

  if (counter % 100 == 0 && counter > 100) {
    createCircle();
  }
  updateCircles(bassSize);
  drawCircles();
  }






  clear()

  background(0)
  cx = 0
  cy = 0
  r = 100
  z=10
  let rotateMap = map(bass, 0, 100, 0, 360)
  push()
  fill(203, 219, 235)
  function silverChariot(x,y){
  translate(x,y)
  var x = cx + r*Math.cos(30/180 * Math.PI);
  var y = cy + r*Math.sin(30/180 * Math.PI);
  var x2 = cx + r*Math.cos(z/180 * Math.PI);
  var y2 = cy + r*Math.sin(z/180 * Math.PI);
  var x3 = cx + r*1.5*Math.cos(20/180 * Math.PI);
  var y3 = cy + r*1.5*Math.sin(20/180 * Math.PI);
  stroke(0)
  rotate(rotateMap)
  rotate(0)
  triangle(x,y,x2,y2,x3,y3)
  rotate(90)
  triangle(x,y,x2,y2,x3,y3)
  rotate(180)
  triangle(x,y,x2,y2,x3,y3)
  rotate(270)
  triangle(x,y,x2,y2,x3,y3)
  circle(cx,cy,r*2)
  circle(cx,cy,r)
  pop()
  }
  push()
  silverChariot(150,475)
  silverChariot(650,475)
  pop()
  // line(cx,cy,x,y)
  // line(cx,cy,x2,y2)
  // line(cx,cy,x3,y3)

  
  //Circles
  //circleCreator()
  
  //Bezier Curves MODE ONE
  push()
  let yCurvePos = 150
  scale(1.5)
  translate(-100,-50)
  makeCurve(0,100,yCurvePos)
  makeCurve(100,200,yCurvePos)
  makeCurve(200,300,yCurvePos)
  makeCurve(300,400,yCurvePos)
  makeCurve(400,500,yCurvePos)
  makeCurve(500,600,yCurvePos)
  makeCurve(600,700,yCurvePos)
  makeCurve(700,800,yCurvePos)
  pop() 




  // Emeral Splash

  // if (firstRun == true){
  // img = loadImage('emerald1.png')
  // firstRun = false}
  // image(img,100,100,333/4,219/4)

  
  


  stroke(255)

  //Drums
  noFill()
  // let drumSize = map(drum, 0, 100,0,100)  
  // if (drumSize >= 65 && drumTurn == 0 && drumDecay <= 0){
  //   drumDecay = 4.5
  //   drumTurn = 1
  // }
  // if(drumSize >=65 && drumTurn == 1 && drumDecay <= 0){
  //   drumDecay = 4.5
  //   drumTurn = 0
  // }

  // if (drumDecay > 0) {
  //   if(drumTurn==0) {
  //     rect(50,600,150,150)
  //   } else if(drumTurn == 1) {
  //     rect(300,600,150,150)
  //   }
  //   drumDecay--
  // }
  let drumFire
  if (drum <= 60){
    drumFire = 1
  }else if (drum > 60){
    drumFire = map(drum, 60, 100, 5, 20)
  }
  console.log(drumTurn)
  fire.addParticle(random(0,1000),790, drumFire);
  fire.update();
  fire.show();
  


  
  
  
  // background(20)
  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CORNER)
  // textSize(24);
  // let rectAmount = 3

  // let vocalSize = map(vocal, 0, 100, -50, - 500)
  // rect(50,600,100,vocalSize)
  // let drumLoc = map(drum, 0, 100, 550,200)
  // ellipse(230,drumLoc,100,100)
  

  // rect(0,700,bassSize,100)

  // let otherSize = map(other, 0, 100, -100, -600)
  // rect(540, 800, otherSize, 100)


  // if (drumLoc < 325){
  //   for (let i = 0; i < rectAmount; i ++){
  //     rect(350,100+i*200,100,100)
  //   }
  // }
}

function createCircle() {
  let newCircle = {
    x: 270,
    y: 200,
    size: 15,
  };
  circles.push(newCircle);
}

function updateCircles(bass) {
  for (let circle of circles) {
    circle.size += 0.1+bass; // Increase the size of each circle over time
  }
}

function drawCircles() {;
  for (let circle of circles) {
    ellipse(circle.x, circle.y, circle.size);
  }
}

class Particle2 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-2, -z);
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 6;
  }

  show() {
    noStroke();
    fill(0, 255, 0, this.alpha); // Green color for Hierophant Green
    ellipse(this.x, this.y, 10);
  }

  isFinished() {
    return this.alpha <= 0;
  }
}


  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 
  //  // vocal bar is red
  //  fill(190, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);