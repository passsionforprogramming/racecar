export default class Explosion {
    constructor(options){
    this.game = options.game;
    this.ctx = this.game.ctx;
    this.sheetWidth = 640
    this.sheetHeight = 384
    this.pos = {
        x: options.xPosition,
        y: options.yPosition
    };
    this.img = new Image();
    this.img.src = "./images/fire/fire1_64.png";
    this.frameCount = 10;
    this.width = this.sheetWidth / this.frameCount;
    this.cols = 6;
    this.rows = 10
    this.height = this.sheetHeight / this.rows;
    this.currentFrame = 0;
    this.col = 0;
    }

    setPos(x, y){
        this.pos = {
            x, y
        }
    }

    getPos(){
        return this.pos;
    }

    removeExplosion() {
        if (this.pos.y >= 640 || this.pos.x < 0) {
            this.game.explosions.splice(this.game.explosions.indexOf(this), 1)
        }
    }

    updateFrame(){
        if (this.currentFrame === 10){
            this.col++;
            if (this.col > 6){
                this.col = 0;
            }
        }
    this.currentFrame = ++this.currentFrame % this.cols;
    this.srcX = this.currentFrame * this.width;
    this.srcY = this.col * this.height;
    this.pos.y += this.game.car.getSpeed() / 10;
    }

    updateUi(){
        this.updateFrame();
        this.ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.pos.x, this.pos.y, this.width, this.height);
    }
}

