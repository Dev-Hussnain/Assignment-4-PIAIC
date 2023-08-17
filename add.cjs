"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add() {
    var question = require("prompt-sync")();
    var a = Number(question("Enter First Number: "));
    var b = Number(question("Enter Second Number: "));
    var ans = a + b;
    console.log(ans);
}
exports.add = add;
