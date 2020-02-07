function setup() {
   var myCanvas = createCanvas (800, 250);
    frameRate(8);
    noStroke();
    myCanvas.parent(mySketch)
  }
  
  function draw() {
    background(0);
    fill("#FF346A");
    ellipse(mouseY,mouseX,50,50);
   if (mouseX<=300 && mouseY<=300){
     fill(mouseX,mouseX,mouseY);
     rect(mouseX,mouseY,50,50);
   }
   
   if (mouseX>=200 && mouseY>=200){
     fill(35,243,123);
     rect(mouseX,mouseY,50,50);
   }
   
   if (mouseX>=200 && mouseY<=200){
   fill(random(100),random(135),random(253));
   rect(mouseX,mouseY,50,50);
   }
   if (mouseX<=200 && mouseY>=200){
    fill(random(255),random(100),random(132));
    rect(mouseX,mouseY,50,50);
   }
  }