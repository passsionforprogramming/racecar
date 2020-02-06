import Road from './Road';
import Car from './Car';
import InputHandler from './InputHandler';
import CrazyCar from './CrazyCar';
export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.road = new Road(this);
        this.car = new Car(this);
        new InputHandler({
            road: this.road,
            car: this.car
        });
        this.onComingCars = [];
        this.createRandomCrazyCars();
    }

    createRandomCrazyCars(){
        setInterval(() => {
            const crazyCar = new CrazyCar(this);
            this.onComingCars.push(crazyCar);
        }, 5000);
    }

    updateOncomingCars(){
        this.onComingCars.forEach(onComingCar => onComingCar.updateUi());
    }

    checkCollision(){
        this.onComingCars.forEach(onComingCar => {
            if ((onComingCar.pos.y >= this.car.position.y && onComingCar.pos.y <= (this.car.position.y + this.car.dimensions.y)) && (Math.abs(onComingCar.pos.x - this.car.position.x) <= this.car.dimensions.x)){
                console.log("Collision");
                return true;
            }
            return false;
        })
    }

    updateUi(){
        this.road.updateUi();
        this.car.updateUi();
        this.updateOncomingCars();
        this.checkCollision();
    }
}