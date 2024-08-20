let words_history = [];
let vocal_history = [];
let drum_history = [];
let bass_history = [];
let other_history = [];

function draw_history_line(history) {
  beginShape(LINES);
  for(let i=0; i<history.length; i++) {
    let x = i*4;
    let y = map(history[i], 0, 100, height, height/8, true);
    vertex(x, y);
  }
  endShape();
}

function draw_history_words(history) {
  let last_words = history[0];
  let text_y = height/8;
  for(let i=0; i<history.length; i++) {
    let x = i*4;
    let cur_words = history[i];
    if(cur_words != last_words) {
      push();
      translate(x, text_y);
      rotate(-30);
      text(cur_words, 0, 0);
      pop();
      last_words = cur_words;
    }
  }
}

function add_to_history(history, d) {
  history.push(d);
  if(history.length >= (width-1)/4) {
    history.shift();
  }
}

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  background(20);
  // Set the noise level and scale.
  let noiseLevel = 100;
  let noiseScale = 0.01;

  // Iterate from top to bottom.
  for (let y = 0; y < 800; y += 1) {
    // Iterate from left to right.
    for (let x = 0; x < width; x += 1) {
      // Scale the input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;
      let nt = noiseScale * frameCount;

      // Compute the noise value.
      let c = noiseLevel * noise(nx, ny, nt);

      // Draw the point.
      stroke(c);
      point(x, y);
    }
  }
  
}
function reset_music() {
  vocal_history = [];
  drum_history = [];
  bass_history = [];
  other_history = [];
}