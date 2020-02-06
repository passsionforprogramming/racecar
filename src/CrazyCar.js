export default class CrazyCar {
    //403 x 766
    constructor(game){
        this.game = game;
        this.ctx = game.ctx
        this.img = new Image();
        this.img.src = `./images/${Math.floor(Math.random() * 4) + 1}.png`;
        this.carWidth = 50;
        this.carHeight = 95;
        this.possiblePosX = [100, 150, 200, 250, 300, 350, 400];
        this.pos = {
            x: this.possiblePosX[Math.floor(Math.random() * 7)],
            y: 10
        }
        this.speed = Math.floor(Math.random() * 11) + 2;
    }

    removeRandomCrazyCar(){
        if (this.pos.y >= 640){
            this.game.onComingCars.splice(this.game.onComingCars.indexOf(this), 1);
        }
    }

    updateUi(){
        this.ctx.drawImage(this.img, 0, 0, 403, 766, this.pos.x, this.pos.y, this.carWidth, this.carHeight);
        this.pos.y += this.speed + (this.game.car.getSpeed() / 10);
        this.removeRandomCrazyCar();
    }
}