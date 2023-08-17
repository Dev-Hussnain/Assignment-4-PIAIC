"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub = void 0;
function sub() {
    var question = require("prompt-sync")();
    var a = Number(question("Enter First Number: "));
    var b = Number(question("Enter Second Number: "));
    var ans = a - b;
    console.log(ans);
}
exports.sub = sub;
