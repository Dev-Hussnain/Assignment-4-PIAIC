export function exponantional() {
    let question = require("prompt-sync")();
    let a = Number(question("Enter Base Number: "))
    let b = Number(question("Enter The Power: "))
    let ans = a ** b 
    console.log(ans)
}