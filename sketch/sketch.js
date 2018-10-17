var position = 100
var name = 'Dan&Andrew'
var moving = true
var forwards = true
var counter = 0

function setup() {
  createCanvas(400, 200)
}

function draw() {
  if(forwards == true)
  {
    background(100)
    position = position + 10
    rect(position, 0, 10, 10)

    if (position >= 400)
    {
      forwards = false
      counter++
    } 
  }
  if(forwards == false)
  {
    background(100)
    position = position - 10
    rect(position, 0, 10, 10)
    if(position <= 0)
    {
      forwards = true
      counter ++
    }

  } 
  console.log('The position is ' + position)
  text('My name is ' + name, 10, 30)

  text(moving, 10, 50)
  text(counter, 10, 70)
  console.log(moving)
}


function mousePressed() {
  moving = !moving
}








































function doesNothing(){
  function setup() {
    createCanvas(800, 800)
    background(0, 0, 0)
  }
  
  function draw() {
    if(keyIsPressed){
      if(key == 'r'){
        fill(255, 0, 0)
      }
      if(key == 'g'){
        fill(0, 255, 0)
      }
      if(key == 'b'){
        fill(0, 0, 255)
      }     
      
    
    }
    if (mouseIsPressed) {
      if(key == 't'){
        triangle(mouseX, mouseY, mouseX + 30,  mouseY + 90, mouseX + 75, mouseY + 10)
      } else{
        ellipse(mouseX, mouseY, 30, 30)
      }
    
    } 
    
  } 
}
