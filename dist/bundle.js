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
        this.image = new Image();
        this.image.src = './images/cars_racer.svg';
    }

    updateUi(){
        this.ctx.drawImage(this.image, 0, 0, 221, 442, 225, 400, 44, 88);
        console.log("this is running");
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



class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.road = new _Road__WEBPACK_IMPORTED_MODULE_0__["default"](this);
        this.car = new _Car__WEBPACK_IMPORTED_MODULE_1__["default"](this);
        // new InputHandler({
        //     road: this.road,
        //     car: this.car
        // });
    }
    updateUi(){
        this.road.updateUi();
        this.car.updateUi();
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
        this.cart = options.car;
    }

    receiveInput(){
        document.addEventListener('keydown', e => {
            console.log(e.keyCode);
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
        this.verticalOffset += 10;
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

function gameLoop(){
    game.updateUi();
    requestAnimationFrame(gameLoop);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map