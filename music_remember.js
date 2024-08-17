let old_loudest = 0;
let screenWidth = 800
let screenHeight = 800
let bubbleDecay = 2
let bubble = []
let bubbleMove = []
let bubbleMove2 = []
let bubbleDist = 14

class Particle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-z/4, -z);
    this.alpha = 255;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 6;
  }

  show(size) {
    noStroke();
    fill(255, 255, 255, this.alpha);
    ellipse(this.x, this.y, size);
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

  addParticle(x, y, z, x1, x2) {
    this.particles.push(new Particle(x, y, z));
    this.particles.push(new Particle(x-(random(x1,x2)), y, z));

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

  show(size) {
    for (let particle of this.particles) {
      particle.show(size);
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
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other,counter) {
  background(20);
  rectMode(CENTER)
  fill(255)


  function makeCurve(anchorX1, anchorX2, anchorY, width){
    push()
    bubbleDecay--
    let vocalSize = map(vocal,0,100,anchorY,anchorY+300)
    let vocalSize2 = map(vocal,0,100,anchorY,anchorY-300)
    let x1 = anchorX2-150
    let y1 = vocalSize-width
    let x2 = anchorX2-250
    let y2 = vocalSize2+width
    noFill();
    stroke(255); //130, 91, 179
    strokeWeight(7);
    bezier(anchorX1,anchorY,x1,y1,x2,y2,anchorX2,anchorY)
    strokeWeight(1)
    fill(130,91,179)
  
    strokeWeight(3)
    function bubbleMovement(){
      if (bubbleMove2.length <= 30){
      for (let i=0;i<30;i++)
        bubbleMove2.push(i/30)}
    }
    bubbleMovement()
    for (let i=0;i<30;i++){  
      strokeWeight(4)                        //bubbles
      bubbleMove2[i] = bubbleMove2[i]+0.001
      if (bubbleMove2[i]>=1){
        bubbleMove2[i]=0
      }
      let xGlow = bezierPoint(anchorX1,x1,x2,anchorX2,1-bubbleMove2[i])
      let xGlow1 = bezierPoint(anchorX1-bubbleDist,x1,x2,anchorX2-bubbleDist,1-bubbleMove2[i])
      let xGlow2 = bezierPoint(anchorX1+bubbleDist,x1,x2,anchorX2+bubbleDist,1-bubbleMove2[i])
      let yGlow = bezierPoint(anchorY,y1,y2,anchorY,1-bubbleMove2[i])
      stroke(237, 107, 239)
      //point(xGlow,yGlow)
      //point(xGlow1,yGlow)
      //point(xGlow2,yGlow)
    }
    pop()
  }
  push()


  noStroke()
  let noiseLevel = 50
  let noiseScale = 0.02
  let nt = noiseScale * frameCount
  let circleX = noiseLevel * noise(nt)
  let circleY = noiseLevel * noise(nt+10000)

  let circleX2 = noiseLevel * noise(nt)
  let circleY2 = noiseLevel * noise(nt+15000)

  let circleX3 = noiseLevel * noise(nt)
  let circleY3 = noiseLevel * noise(nt+25000)

  let bezierX = noiseLevel * noise(nt)
  let bezierY = noiseLevel * noise(nt+20000)

  let vocalRange = map(vocal, 40, 100, 0, 30)
  let vocalRange2 = map(vocal, 0, 100, 30,70)

  // Middle Star
  for (let i = 0; i < 20; i++){
    glow(color(255), vocalRange2)
    rect(circleX+375,circleY-i*55+525,30+i*3+vocalRange,50)
  }
  ellipse(circleX+375,circleY+550,45+vocalRange)

  // First right star
  push()
  rotate(5)
  for (let i = 0; i < 20; i++){
    glow(color(255), vocalRange2)
    rect(circleX2+550,circleY2-i*55-25+550,30+i*3+vocalRange,50)
  }
  pop()
  glow(color(255), 20)


  // First Left Star
  translate(bezierX+200,bezierY+300)
  rotate(80)
  makeCurve(-100,300,0,75)
  makeCurve(-100,300,20,75)
  makeCurve(-100,300,40,75)
  makeCurve(-500,-100,0,75)
  makeCurve(-500,-100,20,75)
  makeCurve(-500,-100,40,75)
  pop()

  // Second Right Star
  let drumFire  // Fire speed
  let drumFire2 // Fire Size
  if (drum <= 60){
    drumFire = 10
    drumFire2 = 10
  }else if (drum > 60){
    drumFire = map(drum, 60, 100, 15, 28)
    drumFire2 = map(drum, 60, 100, 11, 14)
  }
  let drumSize = map(drum, 0, 100, 0,60) // Star size
  let drumSize2 = map(drum, 0, 100, 0,50) // Fire length
  
  glow(color(255),5)
  push()
  translate(circleX3+615,circleY3+650)
  rotate(10)

  fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
  if (drum>60){
    fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
    //fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
  }
  fire.update();
  fire.show(drumFire2);
  ellipse(0,0,drumSize+30)
  pop()

  // let bar_spacing = width/5;
  // let bar_pos_y = 2*height/3;

  // let loudest = 0; // loudest should be 1, 2, 3, 4 (which of the 4 channels is strongest)
  // // 
  // if(vocal > drum && vocal > bass && vocal > other) {
  //   loudest = 1;
  // }
  // else if(drum > vocal && drum > bass && drum > other) {
  //   loudest = 2;
  // }
  // else if(bass > vocal && bass > drum && bass > other) {
  //   loudest = 3;
  // }
  // else {
  //   loudest = 4;
  // }
 

  // if(loudest == old_loudest) {
  //   background(20);
  // }
  // else if(loudest == 1) {
  //   background(200, 0, 0);
  // }
  // else if(loudest == 2) {
  //   background(0, 200, 0);
  // }
  // else if(loudest == 3) {
  //   background(0, 0, 200);
  // }
  // else {
  //   background(200, 200, 200);
  // }

  // old_loudest = loudest;

  // // by default all bars are skinny
  // let bar_width1 = width/12;
  // let bar_width2 = width/12;
  // let bar_width3 = width/12;
  // let bar_width4 = width/12;

  // // but make the loudest section fatter
  // if(loudest == 1) {
  //   bar_width1 = width/5;
  // }
  // else if(loudest == 2) {
  //   bar_width2 = width/5;
  // }
  // else if(loudest == 3) {
  //   bar_width3 = width/5;
  // }
  // else {
  //   bar_width4 = width/5;
  // }

  // fill(200, 200, 0);
  // text(words, width/2, height/3);

  // // vocal bar is red
  // fill(200, 0, 0);
  // rect(1 * bar_spacing, bar_pos_y, bar_width1, 4 * vocal);

  // // drum bar is green
  // fill(0, 200, 0);
  // rect(2 * bar_spacing, bar_pos_y, bar_width2, 4 * drum);

  // // bass bar is blue
  // fill(0, 0, 200);
  // rect(3 * bar_spacing, bar_pos_y, bar_width3, 4 * bass);

  // // other bar is white
  // fill(200, 200, 200);
  // rect(4 * bar_spacing, bar_pos_y, bar_width4, 4 * other);
}
function glow(glowColor, blurriness) {
  drawingContext.shadowColor = glowColor;
  drawingContext.shadowBlur = blurriness;
}
