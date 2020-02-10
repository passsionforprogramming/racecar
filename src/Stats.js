export default class Stats {
    constructor(game){
        this.game = game;
        this.timeDisplay = document.querySelector(".time-num");
        this.startTime = Date.now();
        this.lastTime = Date.now();
        this.totalDistance = 7;
        this.distanceDriven = 0;
        this.milesLeftDisplay = document.querySelector(".miles");
    }

    setTimeElapsed(){
        const timeElapsed = Date.now() - this.startTime;
        const time = new Date(timeElapsed);
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const milliseconds = Math.floor(time.getMilliseconds() / 10);
        this.timeDisplay.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${milliseconds}`;
    }

    setMiLeft(timestamp){
        let currentTime = Date.now();
        let deltaTime = currentTime - this.lastTime;
        
        const test = new Date(timestamp).getSeconds();
        if (deltaTime >= 1000){
            this.lastTime = currentTime;
            let velocityPerSecond = this.game.car.getSpeed() / 36000;
            this.distanceDriven += velocityPerSecond;
            this.milesLeftDisplay.innerHTML = (this.totalDistance - this.distanceDriven).toFixed(2);
        }
    }

    gameWon(){
        if (this.distanceDriven == this.totalDistance){
            const winDiv = document.querySelector(".win");
            this.game.paused = true;
            winDiv.classList.add("show");
            document.addEventListener("keydown", e => {
                this.game.reset(e);
            })
        }
    }

    reset(){
        this.startTime = Date.now();
    }

    updateUi(timestamp){
        this.setTimeElapsed(timestamp);
        this.setMiLeft(timestamp);
    }
}