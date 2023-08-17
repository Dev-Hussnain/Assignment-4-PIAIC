"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = void 0;
function multiply() {
    var question = require("prompt-sync")();
    var a = Number(question("Enter First Number: "));
    var b = Number(question("Enter Second Number: "));
    var ans = a * b;
    console.log(ans);
}
exports.multiply = multiply;
