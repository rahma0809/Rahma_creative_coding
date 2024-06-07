let labels= ['JAN', 'FEB','MAR','APR','MAY','JUN','JUL']
let data = [25, 27, 15, 10, 21, 23, 20];

function setup(){
  createCanvas(750,600);
  noLoop();
}

function draw(){
  background(220);
  
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(0);
  text(' YouTube Watched Each Month', width/2,30);
  
  let marginLeft=100;
  let marginTop=100;
  let chartWidth=600;
  let chartHeight=390;
  
  let spaceBetweenBars=25;
  let squareSize=15;
  
  let totalSpaceBetweenBars=(data. length - 1)* spaceBetweenBars; let barWidth = (chartWidth - totalSpaceBetweenBars) /data. length;
  
  stroke(0);
  line(  marginLeft, marginTop, marginLeft, marginTop);
  
  line( marginLeft, marginTop+ chartHeight, marginLeft+ chartWidth, marginTop + chartHeight);
  
  for (let i=0; i< data.length; i++)
{
  let numSquares=data[i];
  for(let j=0; j<numSquares; j++){
    let inter= map(j,0,numSquares, 0,1);
    let c= lerpColor (color(231,195,254), color(75,10,130), inter);
    fill(c);
    let y= marginTop+ chartHeight-(j+1)*squareSize;
    rect(marginLeft+i*(barWidth+spaceBetweenBars), y, barWidth, squareSize);
  }
  
  fill(0);
  textAlign (CENTER,CENTER);
  text(labels[i],marginLeft +i*(barWidth+spaceBetweenBars)+ barWidth/2, marginTop+ chartHeight+20);
  text(data[i], marginLeft +i*(barWidth+spaceBetweenBars)+ barWidth/2, marginTop+chartHeight-numSquares*squareSize-20);
}
}

