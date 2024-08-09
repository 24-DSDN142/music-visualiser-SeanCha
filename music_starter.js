
// vocal, drum, bass, and other are volumes ranging from 0 to 100

let drumTurn = 0
let counter2 = 0
let drumDecay = 0
let bubbleDecay = 2
let bubble = []
let bubbleMove = []
let bubbleMove2 = []
let bubbleDist = 14
  
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  // let vocalSize = map(vocal,0,100,200,500)
  // let vocalSize2 = map(vocal,0,100,200,-100)
  // let anchorY1 = map(vocal,0,100,100,200)
  // let anchorY2 = map(vocal,0,100,200,300)
  let anchorY = 200
  let anchorX1 = 0
  let anchorX2 = 100
  bubbleDecay--

  function makeCurve(anchorX1, anchorX2, anchorY){
    let vocalSize = map(vocal,0,100,anchorY,anchorY+300)
    let vocalSize2 = map(vocal,0,100,anchorY,anchorY-300)
    let x1 = anchorX2-75
    let y1 = vocalSize
    let x2 = anchorX2-25
    let y2 = vocalSize2
    noFill();
    stroke(130, 91, 179);
    strokeWeight(7);
    bezier(anchorX1,anchorY,x1,y1,x2,y2,anchorX2,anchorY)
    strokeWeight(1)
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
    for (let i=0;i<30;i++){
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



    // function randomBubble(){
    //   for (let i = 0; i<100;i++){
    //     bubble.push(random(0,1))
    //     bubbleMove.push(random(-10,10))
    //   }
    // }
    // if (bubbleDecay == 1){
    //   bubble = []
    //   bubbleMove = []
    //   randomBubble()
    //   bubbleDecay = 50
    // }

    // if (bubbleDecay > 0){
    //   for (let i = 0; i<100; i++){
    //     let xGlow = bezierPoint(anchorX1,x1+bubbleMove[i],x2+bubbleMove[i],anchorX2,bubble[i])
    //     let yGlow = bezierPoint(anchorY,y1+bubbleMove[i],y2+bubbleMove[i],anchorY,bubble[i])
    //     point(xGlow,yGlow)
    //   }
    // }

  }


  clear()
  background(255)
  strokeWeight()
  scale(1.5)
  translate(-100,-200)
  makeCurve(0,100,300)
  makeCurve(100,200,300)
  makeCurve(200,300,300)
  makeCurve(300,400,300)
  makeCurve(400,500,300)
  makeCurve(500,600,300)


  strokeWeight(5)





  // let drumSize = map(drum, 0, 100,0,100)  
  // if (drumSize >= 60 && drumTurn == 0 && drumDecay == 0){
  //   drumDecay = 15
  //   drumTurn = 1
  // }
  // if(drumSize >=60 && drumTurn == 1 && drumDecay == 0){
  //   drumDecay = 15
  //   drumTurn = 0
  // }

  // if (drumDecay > 0) {
  //   if(drumTurn==0) {
  //     rect(100,100,100,100)
  //   } else if(drumTurn == 1) {
  //     rect(200,100,100,100)
  //   }
  //   drumDecay--
  // }
  // console.log(drumTurn)
  
  
  
  
  
  // background(20)
  // textFont('Verdana'); // please use CSS safe fonts
  // rectMode(CORNER)
  // textSize(24);
  // let rectAmount = 3

  // let vocalSize = map(vocal, 0, 100, -50, - 500)
  // rect(50,600,100,vocalSize)
  // let drumLoc = map(drum, 0, 100, 550,200)
  // ellipse(230,drumLoc,100,100)
  
  // let bassSize = map(bass, 0, 100, 100, 600)
  // rect(0,700,bassSize,100)

  // let otherSize = map(other, 0, 100, -100, -600)
  // rect(540, 800, otherSize, 100)


  // if (drumLoc < 325){
  //   for (let i = 0; i < rectAmount; i ++){
  //     rect(350,100+i*200,100,100)
  //   }
  // }
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