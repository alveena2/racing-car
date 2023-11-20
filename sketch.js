var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var fuelImage;
var coinImage;
var fuelGroup;
var coinGroup

//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImage=loadImage("./assets/fuel.png");
  coinImage=loadImage("./assets/goldCoin.png")
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  backgroundImage=bgImg
}

//BP
function draw() {
  background(bgImg);
  
  if(playerCount===2){
    game.update(1);
  }
  if (gameState === 1) {
    game.play();
  }

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
