var r = 50
var g = 200
var b = 100 


function setup() {
  createCanvas(1200,400);
  
}

function draw() {
  r = map(mouseX,0,1200,50,90)
  g = map(mouseX,0,1200,200,250)
  b = map(mouseX,0,1200,100,250)
background(r,g,b)
ellipse(mouseX,200,20,20)
}