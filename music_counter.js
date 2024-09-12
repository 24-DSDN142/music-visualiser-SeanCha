
let lastWords = "...";
let wordBrightness = 255;
let yOffset = 0;

class Particle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-z/4, -z);
    this.alpha = 255;
    this.frameCount = 0
  }

  update() {
    this.frameCount++
    if (this.frameCount % 5 == 0){
         // Spawn a new fire every 5 frames
         let newFire = new Particle(this.x, this.y); // Assuming 'z' is accessible here
         // Add the new fire to your fires array or collection
    }
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 6;
  }

  show(size) {
    noStroke();
    fill(255, 255, 255, this.alpha);
    ellipse(this.x, this.y, size);
  }

  // vertex(0+cShapeX[i],0+cShapeY[i])
  // vertex(20+cShapeX[i],20+cShapeY[i])
  // vertex(20+cShapeX[i],50+cShapeY[i])
  // vertex(0+cShapeX[i],70+cShapeY[i])
  // vertex(-20+cShapeX[i],50+cShapeY[i])
  // vertex(-20+cShapeX[i],20+cShapeY[i])
  // endShape(CLOSE)


  isFinished() {
    return this.alpha <= 0;
  }
}
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


// Draw
function draw_one_frame(words, vocal, drum, bass, other, counter) {
background(0)
translate(400,300)
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
let drumSize2 = map(drum, 0, 100, 0,50) // Fire time on screen


fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
if (drum>60){
  fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
  //fire.addParticle(random(0-drumSize2,0+drumSize2),0, drumFire);
}
translate(0,100)
//fire.addParticle(random(-400,500),400,10)
fire.update();
fire.show(drumFire2);
ellipse(0,0,drumSize+30)
pop()
}
