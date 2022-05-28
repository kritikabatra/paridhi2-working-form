var Canvas;
var backgroundImg,player1,player2,player3,track;
var carrotImg,powerCoinImg,lifeImg;
var stone1,stone2;
var database,gameState;
var form,player,playerCount;
var allplayers , player1,player2,player3,carrot,powerCoin,stone1,stone2;
var players = [];

function preload(){
    backgroundImg= loadImage("./assets/background.jpeg");
    player1 = loadAnimation("./assets/player1a.png","./assets/player1b.png");
    player2 = loadAnimation("./assets/player2a.png","./assets/player2b.png");
    player3 = loadAnimation("./assets/player3a.png","./assets/player3b.png");
    track = loadImage("./assets/track2.jpeg");
    carrotImg = loadImage("./assets/carrot.png");
    powerCoinImg = loadImage("./assets/goldCoin.png");
    lifeImg = loadImage("./assets/life.png");
    stone1 = loadImage("./assets/stone1.png");
    stone2 = loadImage("./assets/stone2.png");

}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImg);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}