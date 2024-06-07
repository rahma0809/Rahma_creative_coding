function setup(){
createCanvas(500,500);
background(260);
}

function draw(){
  let circleSize=random(40,40);
  let circleColor= color(random(250),random(250),random(252));
  fill(circleColor);
  noStroke();
  ellipse(mouseX, mouseY, circleSize, circleSize);
  
}
