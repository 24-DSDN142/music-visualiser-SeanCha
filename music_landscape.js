width = 800
height = 800
let starCounter = 0
function draw_one_frame(words, vocal, drum, bass, other,counter) {
    console.log(counter)
    background(102)
    // noStroke()
    // if (vocal<50){
    //     swordLength = map(vocal, 0, 50, 15, 30)
    // }
    // if (vocal>=50){
    // swordLength = map(vocal, 50, 100, 30, 70)
    // }
    // translate(400,300)
    // for (i = 0; i< 10; i++){
    // push()
    // translate(0,0)
    // triangle(0,i*20+swordLength,0,i*20+10+swordLength,swordLength,5+swordLength)
    // triangle(0,i*20+swordLength,0,i*20+10+swordLength,-swordLength,5+swordLength)
    // pop()
    // push()
    // translate(0,195)
    // triangle(0,i*20+swordLength,0,i*20+10+swordLength,swordLength,5+swordLength)
    // triangle(0,i*20+swordLength,0,i*20+10+swordLength,-swordLength,5+swordLength)
    // pop()
    // push()
    // translate(0,-195)
    // triangle(0,i*20+swordLength,0,i*20+10+swordLength,swordLength,5+swordLength)
    // triangle(0,i*20+swordLength,0,i*20+10+swordLength,-swordLength,5+swordLength)
    // pop()
    // }
    // translate(400,200)
    // stroke(255)
    // noFill()
    // beginShape()
    // vertex(0,0)
    // vertex(50,100)
    // vertex(150,100)
    // endShape(CLOSE)
    // if (counter >=50){
    //     starCounter++
    //     push()
    //     translate(400,400)
    //     scale(starCounter*2)
    //     rotate(starCounter)
    //     star(0, 0, 10);
    //     pop()
    // }
    push()
    strokeWeight(1)
    stroke(255)
    translate(400,400)
    scale(1)
    beginShape()
    vertex(0,0)
    vertex(200,0)
    vertex(200,150)
    vertex(160,225)
    vertex(40,225)
    vertex(0,150)
    endShape(CLOSE)

    ellipse(25,0,50)
    ellipse(75,0,50)
    ellipse(125,0,50)
    ellipse(175,0,50)
    pop()
    // beginShape()
    // vertex(100,100)
    // vertex(200,200)
    // endShape(CLOSE)
}

function star(x, y, s) {
    s /= 2;
    var offset = 1 / 5 * TAU;
    push();
    stroke(255)
    strokeWeight(0.1)
    noFill()
    beginShape();
    for (var i = 0; i < 5; i++) {
        var a1 = i * offset - 1 / 20 * TAU;
        var a2 = i * offset + offset / 2.0 - 1 / 20 * TAU;
        var v1 = p5.Vector.fromAngle(a1).mult(s);
          var v2 = p5.Vector.fromAngle(a2).mult(s * 0.5);
        v1.add(x, y);
        v2.add(x, y);
        vertex(v1.x, v1.y);
        vertex(v2.x, v2.y);
    }
    endShape(CLOSE);
    pop();
  }