let old_loudest = 0;
let screenWidth = 800
let screenHeight = 800
let bubbleDecay = 2
let bubble = []
let bubbleMove = []
let bubbleMove2 = []
let bubbleDist = 14

let rotation = []
let firstRun3 = true
let firstRun2 = true
let cShapeX = []
let cShapeY = []

let rectLoc = [10,20,30,40,50]
starsA = [100,300,700,500,3000,3500,2900,3200,2500,500,700,900,850,5000,4700,4000,4300,4100,3000,3100,2900,2600,7500,7000,6600,6600,7300,7500,7300,7000,6700,]
starsA2 =  [100,300,900,1000,1000,300,1500,1700,1100,6000,6500,5700,6300,7500,7000,6700,7000,7800,3000,3300,3700,3300,700,900,1000,500,1500,6000,5600,5200,5500]
let starsB = [100,300,450,1000,800,1200,2200,1500,2400,2300,1600]
let starsB2 = [800,1100,600,2000,2300,1700,1000,300,1200,2400,1200]
let starsC = [700,900,650,550,1000,600]
let starsC2 = [500,400,200,1000,1200,1500]
let firstRun = 0


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
  firstRun++
  if (firstRun <= 75){
    console.log(starsB)
    console.log(starsB2)
  }else{}


  function makeCurve(anchorX1, anchorX2, anchorY, width){
    push()
    bubbleDecay--
    let bassSize = map(bass,0,100,anchorY,anchorY+300)
    let bassSize2 = map(bass,0,100,anchorY,anchorY-300)
    let x1 = anchorX2-150
    let y1 = bassSize-width
    let x2 = anchorX2-250
    let y2 = bassSize2+width
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
  // Set the noise level and scale.



  noStroke()
  let noiseLevel = 50
  let noiseScale = 0.01
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

  // Background stars
  function stars(scale2,speed,arrayX,arrayY){
    for (let i = 0; i<arrayX.length; i++){
      arrayY[i] = arrayY[i]+speed/scale2
      push()
      stroke(255)
      strokeWeight(4)
      noFill()
      translate()
      scale(scale2)
      glow(color(255),30)
      translate()
      beginShape()
      vertex(arrayX[i],arrayY[i]-50)
      vertex(arrayX[i]-5,arrayY[i]-5)
      vertex(arrayX[i]-50,arrayY[i])
      vertex(arrayX[i]-5,arrayY[i]+5)
      vertex(arrayX[i],arrayY[i]+50)
      vertex(arrayX[i]+5,arrayY[i]+5)
      vertex(arrayX[i]+50,arrayY[i])
      vertex(arrayX[i]+5,arrayY[i]-5)
      endShape(CLOSE)
      if (arrayY[i] > 850/scale2){
        arrayY[i] = -50/scale2
      }
      pop()
    }
  }

  stars(0.1,1,starsA,starsA2)
  stars(0.3,2,starsB,starsB2)
  stars(0.5,3,starsC,starsC2)







  // Middle Star
  for (let i = 0; i < 20; i++){
    glow(color(255), vocalRange2)
    rect(circleX+375,circleY-i*55+525,30+i*3+vocalRange,50)
  }
  ellipse(circleX+375,circleY+550,45+vocalRange)



  // First Right Star
  translate(bezierX+570,bezierY+100)
  rotate(-80)
  makeCurve(-100,300,0,75)
  makeCurve(-100,300,20,75)
  makeCurve(-100,300,40,75)
  makeCurve(-500,-100,0,75)
  makeCurve(-500,-100,20,75)
  makeCurve(-500,-100,40,75)
  pop()
  let fps = frameRate();
  fill(255);
  stroke(0);
  text("FPS: " + fps.toFixed(2), 10, height - 10);




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
  
  glow(color(255),30)
  push()
  translate(circleX3+615,circleY3+650)
  rotate(20)

  fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
  if (drum>60){
    fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
    //fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
  }
  fire.update();
  fire.show(drumFire2);
  ellipse(0,0,drumSize+30)
  pop()



  //Second Left Star
  let emeraldSpeedVocal = map(vocal,0,100,10,25)
  let emeraldStarVocal = map(vocal, 0, 100, 80,110)

  push()
  stroke(255)
  strokeWeight(5)
  fill(255)
  translate(250,600)
  rotate(-10)

  glow(color(255),30)
  ellipse(0,0,emeraldStarVocal)
  noFill()
  function customShape(i){
    glow(color(255),30)
    beginShape()
    vertex(0+cShapeX[i],0+cShapeY[i])
    vertex(20+cShapeX[i],20+cShapeY[i])
    vertex(20+cShapeX[i],50+cShapeY[i])
    vertex(0+cShapeX[i],70+cShapeY[i])
    vertex(-20+cShapeX[i],50+cShapeY[i])
    vertex(-20+cShapeX[i],20+cShapeY[i])
    endShape(CLOSE)
  }

  if (firstRun3 == true){
    for (let i = 0; i<40; i++){
      cShapeY.push(i*-30)
      cShapeX.push(random(-50,50))
      firstRun3 = false
    }
  }

  for (let i = 0; i < cShapeX.length; i++){
    if (firstRun2 == true){
      rotation[i] = random(-10,10)
      firstRun2 = false
    }
    push()
    scale(0.8)
    rotate(rotation[i])
    cShapeY[i] = cShapeY[i] -emeraldSpeedVocal
    translate(0,-70)
    customShape(i,cShapeY[i])
    pop()
    if (cShapeY[i] <= cShapeX.length*-29){
      cShapeY[i] = 0
      rotation[i] = random(-10,10)
    }

  }
  pop()
  
}
function glow(glowColor, blurriness) {
  drawingContext.shadowColor = glowColor;
  drawingContext.shadowBlur = blurriness;
}
