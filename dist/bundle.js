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

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./src/Bullet.js":
/*!***********************!*\
  !*** ./src/Bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bullet; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);

class Bullet {
    constructor(game, car){
        this.id = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
        this.game = game;
        this.car = car;
        this.ctx = game.ctx;
        this.speed = 100;
        this.pos = {
            x: this.car.position.x,
            y: this.car.position.y + 1
        };
        this.image = new Image();
        this.image.src = "./images/beams.png";
        this.width = 62;
        this.height = 111;
    }

    fire(){
        this.pos.y -= this.speed;
    }

    updateUi(){
        this.ctx.drawImage(this.image, 203, 300, this.width, this.height, this.pos.x, this.pos.y, 62, 111);
        this.fire();
    }
}

/***/ }),

/***/ "./src/Car.js":
/*!********************!*\
  !*** ./src/Car.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Car; });
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet */ "./src/Bullet.js");

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
        this.bullets = [];
        this.speed = 0;
        this.maxSpeed = 270;
        this.image = new Image();
        this.image.src = './images/cars_racer.svg';
        this.populateBullets();
        this.ammoDisplay = document.querySelector(".level");
    }

    populateBullets(){
        for (let i = 0; i < 100; i++){
            this.bullets.push(new _Bullet__WEBPACK_IMPORTED_MODULE_0__["default"](this.game, this));
        }
    }

    shoot(){
        if (this.bullets.length > 0){
            let bullet = this.bullets.pop();
            bullet.pos.x = this.position.x;
            this.game.bullets.push(bullet);
        }
    }

    setSpeed(speed){
        if (speed >= this.maxSpeed){
            this.speed = this.maxSpeed;
        } else if (speed <= 0){
            this.speed = 0;
        } else {
            this.speed = speed;
        }
        document.querySelector(".speed").innerHTML = this.speed;
    }

    getSpeed(){
        return this.speed;
    }

    moveLeft(){
        this.position.x -= 20;
        if (this.position.x <= 150) this.position.x = 150;
    }

    moveRight(){
        this.position.x += 20;
        if (this.position.x >= 435) this.position.x = 435;
    }

    reset(){
        this.position = {
            x: 225,
            y: 450
        };
        this.setSpeed(0);
    }

    renderAmmo(){
        this.ammoDisplay.innerHTML = this.bullets.length.toString();
    }

    

    updateUi(){
        this.ctx.drawImage(this.image, 0, 0, 221, 442, this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
        this.renderAmmo();
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
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);

class CrazyCar {
    //403 x 766
    constructor(game){
        this.game = game;
        this.id = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
        this.ctx = game.ctx
        this.img = new Image();
        this.img.src = `./images/${Math.floor(Math.random() * 4) + 1}.png`;
        this.width = 50;
        this.height = 95;
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
        this.ctx.drawImage(this.img, 0, 0, 403, 766, this.pos.x, this.pos.y, this.width, this.height);
        this.pos.y += this.speed + (this.game.car.getSpeed() / 10);
        this.removeRandomCrazyCar();
    }
}

/***/ }),

/***/ "./src/Explosion.js":
/*!**************************!*\
  !*** ./src/Explosion.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Explosion; });
class Explosion {
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
/* harmony import */ var _Zombie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Zombie */ "./src/Zombie.js");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Bullet */ "./src/Bullet.js");
/* harmony import */ var _Explosion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Explosion */ "./src/Explosion.js");








class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.paused = false;
        this.road = new _Road__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.car = new _Car__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        this.stats = new _Stats__WEBPACK_IMPORTED_MODULE_4__["default"](this);
        new _InputHandler__WEBPACK_IMPORTED_MODULE_2__["default"]({
            road: this.road,
            car: this.car,
            bullet: this.bullet
        });
        this.onComingCars = [];
        this.zombies = [];
        this.bullets = [];
        this.explosions = [];
        this.createRandomCrazyCars();
        this.createZombies();
        this.accelerateRef = document.getElementById("accelerate");
        this.crashSound = new Audio('./sounds/Car-crash-sound-effect.mp3');
        this.zombie = new _Zombie__WEBPACK_IMPORTED_MODULE_5__["default"](this);
        this.explosionSound = new Audio('./sounds/explosion.wav');
    }

    createRandomCrazyCars(){
        if (this.paused) return;
        setInterval(() => {
            const crazyCar = new _CrazyCar__WEBPACK_IMPORTED_MODULE_3__["default"](this);
            this.onComingCars.push(crazyCar);
        }, 10000);
    }

    renderBullets(){
        this.bullets.forEach(bullet => bullet.updateUi());
    }

    renderExplosions(){
        this.explosions.forEach(explosion => explosion.updateUi());
    }

    createZombies(){
        if (this.paused) return;
        setInterval(() => {
            const zombie = new _Zombie__WEBPACK_IMPORTED_MODULE_5__["default"](this);
            this.zombies.push(zombie)
        }, 5000)
    }

    updateZombies(){
        this.zombies.forEach(zombie => zombie.updateUi());
    }

    updateOncomingCars(){
        this.onComingCars.forEach(onComingCar => onComingCar.updateUi());
    }

    checkCollision(){
        this.onComingCars.forEach(onComingCar => {
            if (((onComingCar.pos.y + onComingCar.height) >= this.car.position.y && onComingCar.pos.y <= (this.car.position.y + this.car.dimensions.y)) && (Math.abs(onComingCar.pos.x - this.car.position.x) <= this.car.dimensions.x)){
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

        this.zombies.forEach(zombie => {
            if (((zombie.pos.y) >= this.car.position.y && zombie.pos.y <= (this.car.position.y + this.car.dimensions.y)) && (Math.abs(zombie.pos.x - this.car.position.x) <= this.car.dimensions.x)) {
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

        const mergedObjects = this.zombies.concat(this.onComingCars);
        mergedObjects.forEach(obj => {
            this.bullets.forEach(bullet => {
                if (((obj.pos.y + obj.height) >= bullet.pos.y && obj.pos.y <= (bullet.pos.y + bullet.height)) && (Math.abs(obj.pos.x - bullet.pos.x) <= bullet.width + 50)){
                    console.log("This is the type", obj instanceof _Zombie__WEBPACK_IMPORTED_MODULE_5__["default"]);
                    if (obj instanceof _Zombie__WEBPACK_IMPORTED_MODULE_5__["default"]){
                        this.zombies.splice(this.zombies.findIndex(zombie => zombie.id === obj.id));
                        this.explosions.push(new _Explosion__WEBPACK_IMPORTED_MODULE_7__["default"]({
                            game: this,
                            xPosition: obj.pos.x,
                            yPosition: obj.pos.y
                        }));
                        this.explosionSound.play();
                    }
                    if (obj instanceof _CrazyCar__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                        this.onComingCars.splice(this.onComingCars.findIndex(crazyCar => crazyCar.id === obj.id));
                        this.explosions.push(new _Explosion__WEBPACK_IMPORTED_MODULE_7__["default"]({
                            game: this,
                            xPosition: obj.pos.x,
                            yPosition: obj.pos.y
                        }));
                        this.explosionSound.play();
                    }
                }
            });
        });

    }

    winGame(){
        this.paused = true;
    }

    reset(e){
        if (e.keyCode !== 32) return;
        this.onComingCars = [];
        this.zombies = [];
        this.car.reset();
        this.paused = false;
        const crashDiv = document.querySelector(".crash");
        crashDiv.classList.contains("show") && crashDiv.classList.remove("show");
        const winDiv = document.querySelector(".win");
        winDiv.classList.contains("show") && winDiv.classList.remove("show");
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
       this.updateZombies();
       this.renderBullets();
       this.renderExplosions();
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
        this.bullet = options.bullet;
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
                case 32:
                case 13:
                    this.car.shoot();
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

/***/ }),

/***/ "./src/Zombie.js":
/*!***********************!*\
  !*** ./src/Zombie.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Zombie; });
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_0__);

class Zombie {
    constructor(game){
        this.id = uuid_v4__WEBPACK_IMPORTED_MODULE_0___default()();
        this.game = game;
        this.ctx = this.game.ctx;
        this.pos = {
            x: 400,
            y: 100
        };
        this.speed = 5;
        this.img = new Image();
        this.width = 200;
        this.height = 312;
        this.frame = 1;
    }

    animateWalk(){
        if (this.frame > 10) this.frame = 1;
        this.img.src = `./images/walk/go_${this.frame.toString()}.png`;
        this.pos.x -= 1 / 2;
        this.pos.y += this.game.car.getSpeed() / 10;
        this.frame++;
    }

    removeZombie(){
        if (this.pos.y >= 640 || this.pos.x < 0){
            this.game.zombies.splice(this.game.zombies.indexOf(this), 1)
        }
    }

    updateUi(){
        this.animateWalk();
        this.ctx.drawImage(this.img, 0, 0, this.width, this.height, this.pos.x, this.pos.y, 50, 78)
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