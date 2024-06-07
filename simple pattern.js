let size=20;

function setup() {
  createCanvas(windowWidth-30,windowHeight-70);
  strokeWeight(3);
  let saveButton= createButton("save jpg");
  saveButton.position(10, height+15);
  saveButton.mousePressed(saveArt);
  background(225);
  
  for (x=0;x<width;x +=size+0){
    for (y=0;y<height;y+=size+0){
      let c=random(0,4);
      if(c<1){
        line(x,y,x+size,y+size)
      }
      else if(c<2){
         line(x,y,x+size,y+size)
      }
      else if(c<3){
        line(x,y,x,y+size)
      }
      else if (c<4){
         line(x,y,x+size,y+size)
      }
    }
  }
}
function saveArt(){
  save("art.jpg");
}
