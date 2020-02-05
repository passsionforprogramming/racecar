import Road from './Road';
import Car from './Car';
export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.road = new Road(this);
        this.car = new Car(this);
    }
    updateUi(){
        this.road.updateUi;
        this.car.updateUi;
    }
}