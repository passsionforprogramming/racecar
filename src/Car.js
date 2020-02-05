export default class Car {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;
        this.image = new Image();
        this.image.src = './images/cars_racer.svg';
    }

    updateUi(){
        this.ctx.drawImage(this.image, 0, 0, 221, 442, 225, 400, 44, 88);
        console.log("this is running");
    }
}