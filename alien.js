function setup(){
  createCanvas(500,500);
  noLoop();
}

function draw(){
  background(200);
  
  let x= width/2;
  let y= width/2;
  
  fill(random(100,200), random(100,200), random(100,200));
  
  
  rectMode(CENTER);
  rect(x,y,100, 150, 20);
  
  ellipse(x,y-100, 100,100);
  
  
  fill(255);
  ellipse(x-25, y-110, 30, 30);
  ellipse(x+25, y-110, 30, 30);
  
  fill(0);
  ellipse(x-25, y-110, 15, 20);
  ellipse(x+25, y-110, 15, 20);
  
  fill(250,0,0);
  ellipse(x,y-70, 50, 20);
  
  stroke(0);
  strokeWeight(3);
  line(x-25, y-150, x-45, y-200);
  line(x+25, y-150, x+45, y-200);
  
  fill(random(100,250), random(100,250), random(100,250));
  square(x-30, y+130, 20);
  square(x+10, y+130, 20);
  
  rect(x-20, y+100,20,50);
  rect(x+20, y+100,20,50);
  
  rect(x-60, y+5,20,50);
  rect(x+60, y+5,20,50);
  
  
  
}
