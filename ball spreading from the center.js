
ArrayList<Float> x;
ArrayList<Float> y;
ArrayList<Float> vx;
ArrayList<Float> vy;

void setup() {
  size(600,600);
  x= new ArrayList<Float>();
  y= new ArrayList<Float>();
  vx= new ArrayList<Float>();
  vy= new ArrayList<Float>();
  
 
    for (int i=0; i<1000; i++){
    x.add(width/2.0);
    y.add(height/2.0);
    vx.add(random(-5,5));
    vy.add(random(-5,5));

    }
}
   
    

void draw() {
  background(255);
   
     
   for (int i=0; i<100; i++) {
     
     x.set(i,x.get(i)+vx.get(i));
     y.set(i,y.get(i)+vy.get(i));
     
     fill(100,50,130);
     ellipse(x.get(i),y.get(i),10,10);
     
       
 }

}