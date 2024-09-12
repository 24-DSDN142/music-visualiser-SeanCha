let yPos = 0
//let cShapeX = [0,10,20,-10,-20,0,10,20,-10,-20]
//let cShapeY = [0,-100,-200,-300,-400,-500,-600,-700,-800,-900]
let speed
let rotation = []
let firstRun3 = true
let firstRun2 = true
let cShapeX = []
let cShapeY = []

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  background(0)

  let emeraldSpeedVocal = map(vocal,0,100,10,25)
  let emeraldStarVocal = map(vocal, 0, 100, 80,110)

  push()
  stroke(255)
  strokeWeight(2)
  fill(255)
  translate(400,400)
  ellipse(0,0,emeraldStarVocal)
  noFill()
  function customShape(i){
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
  translate(200,100)
  beginShape()
  vertex(0,0)
  vertex(20,20)
  vertex(20,50)
  vertex(0,70)
  vertex(-20,50)
  vertex(-20,20)
  endShape(CLOSE)
}

