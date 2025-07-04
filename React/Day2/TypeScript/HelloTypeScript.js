var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var msg = "Bankai TypeScript"
// msg = 100 // gives error in typescrip but allowed in javascript
var msg = "Hello Typscript !";
console.log(msg);
var age = 18;
console.log(age);
var isRaining;
isRaining = true;
var x;
x = 10;
x = 'Hi';
x = [10, 20];
x = false;
function Add(x, y) {
    if (x == 0) {
        return "Bankai"; //wont give error if type annotation is string
    }
    return x + y; // allowed
    // return "H" // gives error
}
;
// Add("Hello","Type"); // not allowed in ts
var ans = Add(10, 20);
// Optional parameter
function printBook(author, title, pages) {
    console.log(author, title, pages);
}
// printBook() //gives error not allowed
printBook("A", "B", 10);
printBook("C", "D"); // allowed as pages are not required parameter
// Default parameter
function printBook2(author, title, pages) {
    if (pages === void 0) { pages = 100; }
    console.log(author, title, pages);
}
// Rest Parameter
function printBook3(author) {
    var title = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        title[_i - 1] = arguments[_i];
    }
    console.log(author, title);
}
printBook3("a", "b", "c", "d");
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "McLaren"; }
        if (speed === void 0) { speed = 200; }
        this.id = 1; // typescript feature
        this.id = 1;
        this.name = name;
    }
    Car.prototype.accelerate = function () {
        return "The Car" + this.name + " is running at " + this.speed + "";
    };
    return Car;
}());
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, canFly, canSubmerge) {
        var _this = _super.call(this) || this;
        _this.canFly = canFly;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + " Can it Fly " + this.canFly + " Can it Submerge - " + this.canSubmerge;
    };
    return JamesBondCar;
}(Car));
console.log(new Car().accelerate());
console.log(new JamesBondCar("A", 100, true, true).accelerate());
