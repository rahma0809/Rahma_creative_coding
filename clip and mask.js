
let img;

function preload(){
  img=loadImage("flowerp.jpeg")
}

function setup() {
  createCanvas(600, 600);
  background(190,220,250);
 
  //image inside shape, using clip function - only works with one shape
  img.resize(200,200);
  let cnv7 = createGraphics(200,200);
  
  cnv7.canvas.getContext("2d").clip();
  cnv7.image(img,0,0);
  image(cnv7,350,225);
 
  //image inside shape, using mask function - works with multiple shapes
  img.resize(200,200);
  let cnv5 = createGraphics(200,200);
  //cnv5.circle(100,100,190);
  cnv5.triangle(0,0,100,200,200,0);
  img.mask(cnv5);
  image(img,300,25);
 
 
  
}

