"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = void 0;
function divide() {
    var question = require("prompt-sync")();
    var a = Number(question("Enter First Number: "));
    var b = Number(question("Enter Second Number: "));
    var ans = a / b;
    console.log(ans);
}
exports.divide = divide;
