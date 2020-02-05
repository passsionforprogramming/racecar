export default class InputHandler {
    constructor(options){
        this.road = options.road;
        this.car = options.car;
        this.receiveInput();
    }

    receiveInput(){
        document.addEventListener('keydown', e => {
            switch(e.keyCode){
                case 38:  //up
                this.car.setSpeed(this.car.getSpeed() + 2);
                break;
                case 40: //down
                    this.car.setSpeed(this.car.getSpeed() - 5);
                break;
                case 37: //left
                this.car.moveLeft();
                break;
                case 39: //right
                this.car.moveRight();
                break;
            }
        })
    }
}