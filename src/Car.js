import Bullet from './Bullet';
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
        this.bullets = [];
        this.speed = 0;
        this.maxSpeed = 270;
        this.image = new Image();
        this.image.src = './images/cars_racer.svg';
        this.populateBullets();
        this.ammoDisplay = document.querySelector(".level");
        this.gunSound = new Audio("./sounds/gun_sound.wav");
    }

    populateBullets(){
        for (let i = 0; i < 100; i++){
            this.bullets.push(new Bullet(this.game, this));
        }
    }

    shoot(){
        if (this.bullets.length > 0){
            let bullet = this.bullets.pop();
            bullet.pos.x = this.position.x;
            this.game.bullets.push(bullet);
        }
        this.gunSound.play();
    }

    setSpeed(speed){
        if (speed >= this.maxSpeed){
            this.speed = this.maxSpeed;
        } else if (speed <= 0){
            this.speed = 0;
        } else {
            this.speed = speed;
        }
        document.querySelector(".speed").innerHTML = this.speed;
    }

    getSpeed(){
        return this.speed;
    }

    moveLeft(){
        this.position.x -= 20;
        if (this.position.x <= 150) this.position.x = 150;
    }

    moveRight(){
        this.position.x += 20;
        if (this.position.x >= 435) this.position.x = 435;
    }

    reset(){
        this.position = {
            x: 225,
            y: 450
        };
        this.setSpeed(0);
    }

    renderAmmo(){
        this.ammoDisplay.innerHTML = this.bullets.length.toString();
    }

    

    updateUi(){
        this.ctx.drawImage(this.image, 0, 0, 221, 442, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
        this.renderAmmo();
    }
}