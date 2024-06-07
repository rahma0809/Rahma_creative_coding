let score=0; // tracks the score of the player
let gameOver=false; // flag to check if the game is over 
let largeCircles=[]; // store large circles 
let smallCircles=[]; // store small circles
let player; // variable to hold the player object

//setup function to intitialize the game environment 
function setup(){
  createCanvas(700,600); // create a canvas
  player= new Player(); // create a new player object
}

// draw function to continously update the game frame by frame
function draw(){
  background(230);
  
  if(!gameOver){ //if the game is not over
    player.display(); //display the player 
    player.move(); // move the player based on input
    
    // loop through the small circles array
    for (let i= smallCircles.length-1; i>=0; i--){
      smallCircles[i].display(); // display each small circle
      smallCircles[i].move(); //move each small circle
      
      //check if the player hits a small circle 
      if (player.hits(smallCircles[i])){
        score++; //increase the score
        smallCircles.splice(i,1); //remove the hit small circle 
      }
    }
    
    //loop through large circles array 
    for (let i=largeCircles.length-1;i>=0;i--){
      largeCircles[i].display();//display each large circle
      largeCircles[i].move();//move each large circle
      
      //check if the player hits large circles 
      if (player.hits(largeCircles[i])){
        gameOver=true; //end the game
      }
    }
    
    //add a new small circle every 60 frames
    if(frameCount% 60==0){
      smallCircles.push(new Circle(random(width), random(height), 10, color(20,10,150)));
    }
    
    //add a new large circle every 120 frames
    if(frameCount %120==0){
      largeCircles.push(new Circle(random(width), random(height), 30, color(10,300,400)));
    }
    
    //display the score
    textSize(25);
    textAlign(RIGHT, TOP);
    fill(0);
    text('Score:'+ score, width-10, 10);
  } else{ // if the game is over 
  
    //display game over text and final score 
    textAlign(CENTER,CENTER);
    textSize(30);
    fill(240,10,40);
    text('Score:' +score,width/2, height/2+60);
    text('Game Over', width/2, height/2+20);
    fill(0);
    text('Press R to Restart', width/2, height/2+100);
  }
}

//handle keyboard inputs 
function keyPressed(){
  if(keyCode ===LEFT_ARROW){
    player.setDir(-1,0);//move left
  } else if (keyCode ===RIGHT_ARROW){
    player.setDir(1,0);//move right
  } else if (keyCode===UP_ARROW){
    player.setDir(0,-1);//move up
  } else if (keyCode=== DOWN_ARROW){
    player.setDir(0,1);//move down 
  } else if (keyCode===82){
    resetGame();//reset the game 
  }
  
}

//stop player movement when arrow keys are released 
function keyReleased(){
  if(keyCode ===LEFT_ARROW || keyCode ===RIGHT_ARROW || keyCode === UP_ARROW || keyCode ===DOWN_ARROW){
    player.setDir(0,0);
  }
}

//reset the game to initial state
function resetGame(){
  score=0;//reset score 
  gameOver=false;//reset game over flag
  largeCircles=[];//clear large circles
  smallCircles=[];//clear small circles
  player= new Player();//create a new player object
  
}

//player class to manage the player's properties and behavior
class Player{
  constructor(){
    this.radius=15;//player radius
    this.xspeed=0;//player horizontal speed
    this.yspeed=0;//player vertical speed
    this.x=width/2;//initial horizontal position 
    this.y=height/2;//initial vertical position 
}
  
  move(){
    this.y+= this.yspeed;
    this.x+= this.xspeed;
    this.y= constrain(this.y, this.radius, height- this.radius);
    this.x= constrain(this.x, this.radius, width- this.radius);
    
  }
  
  display(){
    fill(0,250,0);//set player color
    ellipse(this.x, this.y, this.radius*2);//draw the player 
  }
  
  setDir(xdir, ydir) {
    this.xspeed =xdir*2;//set horizontal speed
    this.yspeed=ydir*2;//set vertical speed
  }
  
  hits(circle){
    let d= dist(this.x, this.y, circle.x, circle.y);//calculate distance to a circle
    return d< circle.radius + this.radius;//check if the collision occured
  }
}

//circle class to manage the properties and behaviour of circles
class Circle {
  constructor(x,y,radius,col){
    this.y=y;//circle vertical position
    this.x=x;//circle horizontal position 
    this.radius= radius;//circle radius
    this.yspeed= random(-2,2);//circle vertical speed
    this.xspeed= random(-2,2);//circle horizontal speed 
    this.col= col;//circle color 
  }
  
  move(){
    this.y+= this.yspeed;//update vertical position 
    this.x+=this.xspeed;//update horizontal position 
    
    //reverse direction if circle hits canvas edges
    if(this.y<0 || this.y >height){
      this.yspeed *=-1;
    }
    if(this.x<0 || this.x >width){
      this.xspeed *=-1;
  }
}
  
  display() {
    fill(this.col);//set circle color 
    ellipse(this.x, this.y, this.radius*2); //draw the circle
  }
}
