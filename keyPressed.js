//Key Press Events
float x,y;    //x and y Position of the the object 
float speed; //
float angle,vx,vy;
float ay; // by gravitattion

void setup() {
  size(600,600);
  x=0;
  y=300;
  speed=5;
  angle = radians(-45);
  vx = speed*cos(angle);
  vy = speed*sin(angle);
  ay = 0.05;
}
void draw() {
  background(255);
 // print(" x was: ",x);
  
  x=x+vx;
  y=y+vy;
  vy=vy+ay;
  
  //println(",and now x is : ",x);
  fill(#ED8B0A);
  ellipse(x,y,10,10);
 
  translate(0,300);
  rotate(angle);
  rect(0,-5,40,10);
  rotate(-angle);
  translate(0,-300);
  
}
void keyPressed()     {
  if (key == UP)        {
      x=0;
      y=300;
      vx=speed *cos(angle);
      vy=speed *sin(angle);
  }
}
