export default class InputHandler {
    constructor(options){
        this.road = options.road;
        this.cart = options.car;
    }

    receiveInput(){
        document.addEventListener('keydown', e => {
            console.log(e.keyCode);
        })
    }
}