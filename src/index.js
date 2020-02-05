import Car from './Car';
import Game from './Game';
import Road from './Road';
const canvas = document.getElementById("race-game");
const context = canvas.getContext("2d");
const game = new Game(context);

// const road = new Image();
// let verticalOffset = -640;
// road.src = "./images/background-1.png";
// const carImage = new Image();
// carImage.src = "./images/cars_racer.svg";
// const car = new Car(game);
// const road = new Road(game);

requestAnimationFrame(gameLoop);

function gameLoop(){
    game.updateUi();
    requestAnimationFrame(gameLoop);
}