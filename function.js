"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = function (num1, num2, num3) {
    return num1 + num2 + num3;
};
console.log("sum=", add(12, 34, 56));
var circle = function (_a) {
    var radius = _a.radius;
    //named parameter
    return 3.14 * radius * radius;
};
console.log(circle({ radius: 8 }));
var multiply = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (p, c) { return p * c; }, 1);
};
console.log(multiply(1, 2, 3, 4, 5));
var even = function (value) { return value % 2 === 0; };
console.log(even(50));
