
function draw_one_frame(words, vocal, drum, bass, other,counter) {
    console.log(words)
    background(0)
    rectMode(CENTER)
    noStroke()
    if (vocal<50){
        swordLength = map(vocal, 0, 50, 15, 30)
    }
    if (vocal>=50){
    swordLength = map(vocal, 50, 100, 30, 70)
    }
    translate(400,300)
    for (i = 0; i< 10; i++){
    push()
    translate(0,0)
    triangle(0,i*20+swordLength,0,i*20+10+swordLength,swordLength,5+swordLength)
    triangle(0,i*20+swordLength,0,i*20+10+swordLength,-swordLength,5+swordLength)
    pop()
    push()
    translate(0,195)
    triangle(0,i*20+swordLength,0,i*20+10+swordLength,swordLength,5+swordLength)
    triangle(0,i*20+swordLength,0,i*20+10+swordLength,-swordLength,5+swordLength)
    pop()
    push()
    translate(0,-195)
    triangle(0,i*20+swordLength,0,i*20+10+swordLength,swordLength,5+swordLength)
    triangle(0,i*20+swordLength,0,i*20+10+swordLength,-swordLength,5+swordLength)
    pop()
    }
}
