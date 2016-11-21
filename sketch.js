//Author: Daniel Krajnak

//x position of dots
var x;
//y position of dots
var y;

var p=.0008;
var numberOfRows=60;
var numberOfCollumns=60;

function setup() {
  colorMode(HSB, windowWidth, 100, 100);
  createCanvas(windowWidth, windowHeight);
 
  //Initialize grid of dots
  x= new Array(numberOfRows*numberOfCollumns);
  y= new Array(numberOfRows*numberOfCollumns);
  
  var currentRow=0;
  var currentCollumn =0;
  for(var i=0; i<(numberOfRows*numberOfCollumns); i++) {
    x[i]= currentCollumn*(windowWidth/numberOfCollumns);
    y[i]= currentRow*windowHeight/numberOfRows;
    currentRow++;
    if (currentRow==numberOfRows) {
      currentRow=0;
      currentCollumn++;
    }
  }
}

function draw() {
	//Make background black.
  background(0, 0, 0);
  noStroke();
  for (var i=0; i< (numberOfRows*numberOfCollumns); i++) {
   
    //format: fill(hue, saturation, brightness);
    //the code: fill(distance from center, max saturation, max brightness);
    fill(sqrt(pow(windowWidth/2-x[i], 2)+pow(windowHeight/2-y[i], 2)),100,100);
    
    //Ok, I'm going to be honest with you, this was one of the first programs
    //I made, and I coded it poorly and as a result.  I could fix most of it, but
    //I have no idea how this part actually works.
    ellipse(constrain(x[i]+(constrain(mouseX, 100, windowWidth-100)-x[i])*sqrt(pow(constrain(mouseX, 300, 900)-x[i], 2)+pow(mouseY-y[i], 2))*p, x[i]-200, x[i]+200), y[i]+(mouseY-y[i])*sqrt(pow(mouseX-x[i], 2)+pow(mouseY-y[i], 2))*p, 5, 5);
    
    //Move the dots across the page
    if (mouseX<=windowWidth/2) {
      x[i]=x[i]+1;
      x[i]=x[i]%windowWidth;
    } else {
      x[i]=x[i]-1;
      if (x[i]<=0) {
        x[i]=windowWidth;
      }
    }
  }
}