let fft;
let mic;
let circles=[];
function setup (){
  createCanvas(700,600);
  
  mic= new p5.AudioIn();
  mic.start();
  
  fft=new p5.FFT();
  fft.setInput(mic);
}

function draw(){
  background(20,20,50);
  
  let pitch=fft.getCentroid();
  let spectrum= fft. analyze();
  let circleSize= map(pitch,0, width/2,5,21);
  
  if (pitch>0){
    let circle={
      x:random(width),
      y:height,
      col:color(random(251), random(251), random(251), 149),
      size: circleSize
    };
    
    circles.push(circle);
  }
  
  for(let i=0; i<circles.length; i++){
    let circle=circles[i];
    fill(circle.col);
    noStroke();
    ellipse(circle.x, circle.y, circle.size, circle.size);
    circle.y-=2;
    
    if(circle.y<-circle.size){
      circles.splice(i,1);
    }
  }
}
