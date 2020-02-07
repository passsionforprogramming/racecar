import Road from './Road';
import Car from './Car';
import InputHandler from './InputHandler';
import CrazyCar from './CrazyCar';
import Stats from './Stats';

export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.paused = false;
        this.road = new Road(this);
        this.car = new Car(this);
        this.stats = new Stats(this);
        new InputHandler({
            road: this.road,
            car: this.car
        });
        this.onComingCars = [];
        this.createRandomCrazyCars();
        this.accelerateRef = document.getElementById("accelerate");
        this.crashSound = new Audio('./sounds/Car-crash-sound-effect.mp3');
    }

    createRandomCrazyCars(){
        if (this.paused) return;
        setInterval(() => {
            const crazyCar = new CrazyCar(this);
            this.onComingCars.push(crazyCar);
        }, 2000);
    }

    updateOncomingCars(){
        this.onComingCars.forEach(onComingCar => onComingCar.updateUi());
    }

    checkCollision(){
        this.onComingCars.forEach(onComingCar => {
            if (((onComingCar.pos.y + onComingCar.carHeight) >= this.car.position.y && onComingCar.pos.y <= (this.car.position.y + this.car.dimensions.y)) && (Math.abs(onComingCar.pos.x - this.car.position.x) <= this.car.dimensions.x)){
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
    }

    winGame(){
        this.paused = true;
    }

    reset(e){
        if (e.keyCode !== 32) return;
        this.onComingCars = [];
        this.car.reset();
        this.paused = false;
        const crashDiv = document.querySelector(".crash");
        crashDiv.classList.remove("show");
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
    }
}