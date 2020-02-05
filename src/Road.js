export default class Road {
    constructor(game){
        this.game = game;
        this.ctx = this.game.ctx;
        this.verticalOffset = -640;
        this.image = new Image();
        this.image.src = "../images/background-1.png";
    }

    updateUi(){
        if (this.verticalOffset >= 0) this.verticalOffset = -640;
        this.ctx.drawImage(this.road, 0, verticalOffset);
        this.ctx.drawImage(this.road, 0, verticalOffset + 640);
        this.ctx.drawImage(this.road, 0, verticalOffset + 1280);
        this.verticalOffset += 10;
    }
}