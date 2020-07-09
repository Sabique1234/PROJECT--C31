const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var plinko1 = [];
var plinko2 = [];
var plinko3 = [];
var plinko4 = [];
var particles = [];
var divisions = [];
var ground;
var divisionHeight = 300;

var engine, world;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //divisions
  for(var i = 0; i <= width; i = i+80){
    divisions.push(new Division(i,height-divisionHeight/2, 10, divisionHeight));
  }

  //plinko
  //row 1:
  for(var j = 40; j <= width; j = j + 50){
    plinko1.push(new Plinko(j,75));
  }
//row 2:  
  for(var k = 15; k <= width; k = k + 50){
    plinko2.push(new Plinko(k,175));
  }
//row 3:
  for(var l = 40; l <= width; l = l + 50){
    plinko3.push(new Plinko(l,275));
  }
//row 4:
  for(var m = 15; m <= width; m = m + 50){
    plinko4.push(new Plinko(m,375));
  }

  ground = new Ground(240,795,480,10);
}

function draw() {
  background("yellow");

  if(frameCount % 90 === 0){
    
   particles.push(new Particle(random(width/2 - 25, width/2 + 25),10,10));
  }

  Engine.update(engine);

  ground.display();

  //divisions
  for(var i = 0; i < divisions.length; i = i+1){
    divisions[i].display();
  }
  
  //PLINKO:
  //row 1:
  for(var i = 0; i < plinko1.length; i++){
      plinko1[i].display();
    }
  //row 2:  
  for(var i = 0; i < plinko2.length; i++){
      plinko2[i].display();
    }
  //row 3:
    for(var i = 0; i < plinko3.length; i++){
      plinko3[i].display();
    }
  //row 4:
  for(var i = 0; i < plinko4.length; i++){
      plinko4[i].display();
    } 

  for (var k = 0; k < particles.length; k++){
      particles[k].display();
    }
}