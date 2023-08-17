export function multiply() {
    let question = require("prompt-sync")();
    let a = Number(question("Enter First Number: "))
    let b = Number(question("Enter Second Number: "))
    let ans = a * b 
    console.log(ans)
}