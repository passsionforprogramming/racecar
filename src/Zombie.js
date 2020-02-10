import uuidv4 from "uuid/v4";
export default class Zombie {
    constructor(game){
        this.id = uuidv4();
        this.game = game;
        this.ctx = this.game.ctx;
        this.pos = {
            x: 400,
            y: 100
        };
        this.speed = 5;
        this.img = new Image();
        this.width = 200;
        this.height = 312;
        this.frame = 1;
    }

    animateWalk(){
        if (this.frame > 10) this.frame = 1;
        this.img.src = `./images/walk/go_${this.frame.toString()}.png`;
        this.pos.x -= 1 / 2;
        this.pos.y += this.game.car.getSpeed() / 10;
        this.frame++;
    }

    removeZombie(){
        if (this.pos.y >= 640 || this.pos.x < 0){
            this.game.zombies.splice(this.game.zombies.indexOf(this), 1)
        }
    }

    updateUi(){
        this.ctx.drawImage(this.img, 0, 0, this.width, this.height, this.pos.x, this.pos.y, 50, 78);
        this.animateWalk();
    }
}