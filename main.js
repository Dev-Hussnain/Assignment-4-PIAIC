"use strict";
//IMPORTING DIFFERENT MODULES
Object.defineProperty(exports, "__esModule", { value: true });
var showBanner = require('node-banner');
//Importing Calculator Functionality
var modulus_js_1 = require("./modulus.js");
var add_js_1 = require("./add.js");
var sub_js_1 = require("./sub.js");
var divide_js_1 = require("./divide.js");
var multiply_js_1 = require("./multiply.js");
var exponentional_js_1 = require("./exponentional.js");
//Appling Banner:
var banner = showBanner("Calculator By Hussnain");
//Using Prompt-Sync using know what Fncinality they what to perform
do {
    var prompt_1 = require("prompt-sync")();
    var question = prompt_1("Which function do you want to perform: ");
    if (question == "Addition" || question == "addition" || question == "Add" || question == "add") {
        (0, add_js_1.add)();
    }
    else if (question == "Subtract" || question == "subtract" || question == "Sub" || question == "sub") {
        (0, sub_js_1.sub)();
    }
    else if (question == "Multiply" || question == "multiply") {
        (0, multiply_js_1.multiply)();
    }
    else if (question == "Division" || question == "division" || question == "Divide" || question == "divide") {
        (0, divide_js_1.divide)();
    }
    else if (question == "Modulus" || question == "modulus") {
        (0, modulus_js_1.modulus)();
    }
    else if (question == "Exponentional" || question == "exponentional") {
        (0, exponentional_js_1.exponantional)();
    }
    else {
        console.log("Please Select A Calculator Function:\n1.Addition\n2.Subtract\n3.Multiply\n4.Division\n5.Modulus\n6.Exponentional");
    }
    var prompt2 = require("prompt-sync")();
    var restart = prompt2("Do You Want to restart It: ");
} while (restart == "yes" || restart == "Yes" || restart == "y" || restart == "Y");
