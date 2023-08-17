//IMPORTING DIFFERENT MODULES

const showBanner = require('node-banner');

//Importing Calculator Functionality
import { modulus } from "./modulus.js";
import { add } from "./add.js";
import { sub } from "./sub.js";
import { divide } from "./divide.js";
import { multiply } from "./multiply.js";
import { exponantional } from "./exponentional.js";

//Appling Banner:

let banner = showBanner("Calculator By Hussnain")
//Using Prompt-Sync using know what Fncinality they what to perform
do{let prompt = require("prompt-sync")();
let question = prompt("Which function do you want to perform: ");
if(question == "Addition" || question == "addition" || question == "Add" || question == "add"){
    add()
} else if(question == "Subtract" || question == "subtract" || question == "Sub" || question == "sub"){
    sub()
} else if(question == "Multiply" || question == "multiply"){
    multiply()
} else if(question == "Division" || question == "division" || question == "Divide" || question == "divide"){
    divide()
} else if(question == "Modulus" || question == "modulus"){
    modulus()
} else if(question == "Exponentional" || question == "exponentional"){
    exponantional()
} else {
    console.log(`Please Select A Calculator Function:
1.Addition
2.Subtract
3.Multiply
4.Division
5.Modulus
6.Exponentional`)
}
let prompt2 = require("prompt-sync")()
var restart = prompt2("Do You Want to restart It: ")
} while(restart == "yes" || restart == "Yes" || restart == "y" || restart == "Y")