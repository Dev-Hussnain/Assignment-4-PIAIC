"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponantional = void 0;
function exponantional() {
    var question = require("prompt-sync")();
    var a = Number(question("Enter Base Number: "));
    var b = Number(question("Enter The Power: "));
    var ans = Math.pow(a, b);
    console.log(ans);
}
exports.exponantional = exponantional;
