var font;
function preload(){
  font=
    loadFont("ShadowsIntoLight.ttf");
}

var points;
function setup() {
  createCanvas (700,400)
  stroke(0);
  points=font.textToPoints('Good Morning!', 100,100,100,{sampleFactor:0.15});
  
 background(225);
  for(var i=0; i<points.length;i++){
    var p= points[i];
    ellipse(p.x,p.y,4,4);
  }
}
