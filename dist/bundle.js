/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Car.js":
/*!********************!*\
  !*** ./src/Car.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Car; });
class Car {
    constructor(game){
        this.game = game;
        this.ctx = game.ctx;
        this.dimensions = {
            x: 44,
            y: 88
        }
        this.position = {
            x: 225,
            y: 450
        };
        this.speed = 0;
        this.maxSpeed = 270;
        this.image = new Image();
        this.image.src = './images/cars_racer.svg';
    }

    setSpeed(speed){
        if (speed >= this.maxSpeed){
            console.log("Maxspeed hit");
            this.speed = this.maxSpeed;
        } else if (speed <= 0){
            this.speed = 0;
            console.log("This is the speed", this.speed);
        } else {
            this.speed = speed;
        }
        document.querySelector(".speed").innerHTML = this.speed;
    }

    getSpeed(){
        return this.speed;
    }

    moveLeft(){
        this.position.x -= 10;
        if (this.position.x <= 150) this.position.x = 150;
    }

    moveRight(){
        this.position.x += 10;
        if (this.position.x >= 435) this.position.x = 435;
    }

    reset(){
        this.position = {
            x: 225,
            y: 450
        };
        this.setSpeed(0);
    }

    

    updateUi(){
        this.ctx.drawImage(this.image, 0, 0, 221, 442, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
    }
}

/***/ }),

/***/ "./src/CrazyCar.js":
/*!*************************!*\
  !*** ./src/CrazyCar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CrazyCar; });
class CrazyCar {
    //403 x 766
    constructor(game){
        this.game = game;
        this.ctx = game.ctx
        this.img = new Image();
        this.img.src = `./images/${Math.floor(Math.random() * 4) + 1}.png`;
        this.carWidth = 50;
        this.carHeight = 95;
        this.possiblePosX = [100, 150, 200, 250, 300, 350, 400];
        this.pos = {
            x: this.possiblePosX[Math.floor(Math.random() * 7)],
            y: 10
        }
        this.speed = Math.floor(Math.random() * 11) + 2;
    }

    removeRandomCrazyCar(){
        if (this.pos.y >= 640){
            this.game.onComingCars.splice(this.game.onComingCars.indexOf(this), 1);
        }
    }

    updateUi(){
        this.ctx.drawImage(this.img, 0, 0, 403, 766, this.pos.x, this.pos.y, this.carWidth, this.carHeight);
        this.pos.y += this.speed + (this.game.car.getSpeed() / 10);
        this.removeRandomCrazyCar();
    }
}

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _Road__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Road */ "./src/Road.js");
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Car */ "./src/Car.js");
/* harmony import */ var _InputHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputHandler */ "./src/InputHandler.js");
/* harmony import */ var _CrazyCar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CrazyCar */ "./src/CrazyCar.js");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stats */ "./src/Stats.js");






class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.paused = false;
        this.road = new _Road__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.car = new _Car__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.stats = new _Stats__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        new _InputHandler__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
            const crazyCar = new _CrazyCar__WEBPACK_IMPORTED_MODULE_3__["default"](this);
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

/***/ }),

/***/ "./src/InputHandler.js":
/*!*****************************!*\
  !*** ./src/InputHandler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputHandler; });
class InputHandler {
    constructor(options){
        this.road = options.road;
        this.car = options.car;
        this.receiveInput();
        this.brakeAudio = document.getElementById("brake");
    }

    receiveInput(){
        document.addEventListener('keydown', e => {
            switch(e.keyCode){
                case 38:  //up
                this.car.setSpeed(this.car.getSpeed() + 2);
                break;
                case 40: //down
                    this.car.setSpeed(this.car.getSpeed() - 5);
                    this.brakeAudio.play();
                break;
                case 37: //left
                this.car.moveLeft();
                break;
                case 39: //right
                this.car.moveRight();
                break;
            }

            document.addEventListener("keyup", e => {
                switch(e.keyCode){
                    case 40: 
                    this.brakeAudio.pause();
                    break;
                }
            })
                
            
        })
    }
}

/***/ }),

/***/ "./src/Road.js":
/*!*********************!*\
  !*** ./src/Road.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Road; });
class Road {
    constructor(game){
        this.game = game;
        this.ctx = this.game.ctx;
        this.verticalOffset = -640;
        this.image = new Image();
        this.image.src = "./images/background-1.png";
    }

    updateUi(){
        if (this.verticalOffset >= 0) this.verticalOffset = -640;
        this.ctx.drawImage(this.image, 0, this.verticalOffset);
        this.ctx.drawImage(this.image, 0, this.verticalOffset + 640);
        this.ctx.drawImage(this.image, 0, this.verticalOffset + 1280);
        this.verticalOffset += (this.game.car.getSpeed() / 10);
    }
}

/***/ }),

/***/ "./src/Stats.js":
/*!**********************!*\
  !*** ./src/Stats.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
class Stats {
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
        //console.log(test);
        if (deltaTime >= 1000){
            this.lastTime = currentTime;
            let velocityPerSecond = this.game.car.getSpeed() / 36000;
            this.distanceDriven += velocityPerSecond;
            this.milesLeftDisplay.innerHTML = (this.totalDistance - this.distanceDriven).toFixed(2);
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Car */ "./src/Car.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _Road__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Road */ "./src/Road.js");



const canvas = document.getElementById("race-game");
const context = canvas.getContext("2d");
const game = new _Game__WEBPACK_IMPORTED_MODULE_1__["default"](context);

// const road = new Image();
// let verticalOffset = -640;
// road.src = "./images/background-1.png";
// const carImage = new Image();
// carImage.src = "./images/cars_racer.svg";
// const car = new Car(game);
// const road = new Road(game);

requestAnimationFrame(gameLoop);

function gameLoop(timestamp){
    game.updateUi(timestamp);
    requestAnimationFrame(gameLoop);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map