import Road from './Road';
import Car from './Car';
import InputHandler from './InputHandler';
export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.road = new Road(this);
        this.car = new Car(this);
        new InputHandler({
            road: this.road,
            car: this.car
        });
    }
    updateUi(){
        this.road.updateUi();
        this.car.updateUi();
    }
}