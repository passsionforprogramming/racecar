export default class Car {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;
        this.dimensions = {
            x: 44,
            y: 88
        }
        this.position = {
            x: 225,
            y: 450
        };
        this.speed = 0;
        this.maxSpeed = 200;
        this.image = new Image();
        this.image.src = './images/cars_racer.svg';
    }

    setSpeed(speed){
        if (speed >= this.maxSpeed){
            console.log("Maxspeed hit");
            this.speed = this.maxSpeed;
        } else if (speed <= 0){
            this.speed = 0;
            console.log("This is the speed", this.speed);
        } else {
            this.speed = speed;
        }
        document.querySelector(".speed").innerHTML = this.speed;
    }

    getSpeed(){
        return this.speed;
    }

    moveLeft(){
        this.position.x -= 10;
        if (this.position.x <= 150) this.position.x = 150;
    }

    moveRight(){
        this.position.x += 10;
        if (this.position.x >= 435) this.position.x = 435;
    }

    updateUi(){
        this.ctx.drawImage(this.image, 0, 0, 221, 442, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
    }
}