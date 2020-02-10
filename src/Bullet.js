import uuidv4 from "uuid/v4";
export default class Bullet {
    constructor(game, car){
        this.id = uuidv4();
        this.game = game;
        this.car = car;
        this.ctx = game.ctx;
        this.speed = 100;
        this.pos = {
            x: this.car.position.x,
            y: this.car.position.y + 1
        };
        this.image = new Image();
        this.image.src = "./images/beams.png";
        this.width = 62;
        this.height = 111;
    }

    fire(){
        this.pos.y -= this.speed;
    }

    updateUi(){
        this.ctx.drawImage(this.image, 203, 300, this.width, this.height, this.pos.x, this.pos.y, 62, 111);
        this.fire();
    }
}