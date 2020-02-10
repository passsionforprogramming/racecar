import Road from './Road';
import Car from './Car';
import InputHandler from './InputHandler';
import CrazyCar from './CrazyCar';
import Stats from './Stats';
import Zombie from './Zombie';
import Bullet from './Bullet';
import Explosion from './Explosion';
export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.paused = false;
        this.road = new Road(this);
        this.car = new Car(this);
        this.stats = new Stats(this);
        new InputHandler({
            road: this.road,
            car: this.car,
            bullet: this.bullet
        });
        this.onComingCars = [];
        this.zombies = [];
        this.bullets = [];
        this.explosions = [];
        this.createRandomCrazyCars();
        this.createZombies();
        this.accelerateRef = document.getElementById("accelerate");
        this.crashSound = new Audio('./sounds/Car-crash-sound-effect.mp3');
        this.zombie = new Zombie(this);
        this.explosionSound = new Audio('./sounds/explosion.wav');
    }

    createRandomCrazyCars(){
        if (this.paused) return;
        setInterval(() => {
            const crazyCar = new CrazyCar(this);
            this.onComingCars.push(crazyCar);
        }, 10000);
    }

    renderBullets(){
        this.bullets.forEach(bullet => bullet.updateUi());
    }

    renderExplosions(){
        this.explosions.forEach(explosion => explosion.updateUi());
    }

    createZombies(){
        if (this.paused) return;
        setInterval(() => {
            const zombie = new Zombie(this);
            this.zombies.push(zombie)
        }, 5000)
    }

    updateZombies(){
        this.zombies.forEach(zombie => zombie.updateUi());
    }

    updateOncomingCars(){
        this.onComingCars.forEach(onComingCar => onComingCar.updateUi());
    }

    checkCollision(){
        this.onComingCars.forEach(onComingCar => {
            if (((onComingCar.pos.y + onComingCar.height) >= this.car.position.y && onComingCar.pos.y <= (this.car.position.y + this.car.dimensions.y)) && (Math.abs(onComingCar.pos.x - this.car.position.x) <= this.car.dimensions.x)){
                console.log("Collision");
                this.paused = true;
                const crashDiv = document.querySelector(".crash");
                crashDiv.classList.add("show");
                this.accelerateRef.pause();
                this.crashSound.play();
                document.addEventListener("keydown", e => {
                    this.reset(e);
                })
            }
        })

        this.zombies.forEach(zombie => {
            if (((zombie.pos.y) >= this.car.position.y && zombie.pos.y <= (this.car.position.y + this.car.dimensions.y)) && (Math.abs(zombie.pos.x - this.car.position.x) <= this.car.dimensions.x)) {
                console.log("Collision");
                this.paused = true;
                const crashDiv = document.querySelector(".crash");
                crashDiv.classList.add("show");
                this.accelerateRef.pause();
                this.crashSound.play();
                document.addEventListener("keydown", e => {
                    this.reset(e);
                })
            }
        })

        const mergedObjects = this.zombies.concat(this.onComingCars);
        mergedObjects.forEach(obj => {
            this.bullets.forEach(bullet => {
                if (((obj.pos.y + obj.height) >= bullet.pos.y && obj.pos.y <= (bullet.pos.y + bullet.height)) && (Math.abs(obj.pos.x - bullet.pos.x) <= bullet.width + 50)){
                    console.log("This is the type", obj instanceof Zombie);
                    if (obj instanceof Zombie){
                        this.zombies.splice(this.zombies.findIndex(zombie => zombie.id === obj.id));
                        this.explosions.push(new Explosion({
                            game: this,
                            xPosition: obj.pos.x,
                            yPosition: obj.pos.y
                        }));
                        this.explosionSound.play();
                    }
                    if (obj instanceof CrazyCar) {
                        this.onComingCars.splice(this.onComingCars.findIndex(crazyCar => crazyCar.id === obj.id));
                        this.explosions.push(new Explosion({
                            game: this,
                            xPosition: obj.pos.x,
                            yPosition: obj.pos.y
                        }));
                        this.explosionSound.play();
                    }
                }
            });
        });

    }

    winGame(){
        this.paused = true;
    }

    reset(e){
        if (e.keyCode !== 32) return;
        this.onComingCars = [];
        this.zombies = [];
        this.car.reset();
        this.paused = false;
        const crashDiv = document.querySelector(".crash");
        crashDiv.classList.contains("show") && crashDiv.classList.remove("show");
        const winDiv = document.querySelector(".win");
        winDiv.classList.contains("show") && winDiv.classList.remove("show");
        this.stats.reset();
        this.accelerateRef.pause();
    }

    playAcceleration() {
        if (this.car.getSpeed() > !this.accelerateRef.paused) {
            this.accelerateRef.play();
        } else if (this.car.getSpeed() === 0) {
            this.accelerateRef.pause();
        }
    }

    updateUi(timestamp){
        if (this.paused) return;
        this.road.updateUi();
        this.car.updateUi();
        this.updateOncomingCars();
        this.playAcceleration();
       this.checkCollision();
       this.stats.updateUi(timestamp);
       this.updateZombies();
       this.renderBullets();
       this.renderExplosions();
    }
}