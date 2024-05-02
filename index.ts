#! /usr/bin/env node

import inquirer from "inquirer";

//Printin a Welcome Message.
console.log("\n\tWelcome to \ 'Rashid Project\' CLI Simple Calculator");

//Asking quiestions from user through inquirer.

let answers = await inquirer.prompt([
    {message: "Enter First Number.", type: "number", name: "firstNumber"},
    {message: "Enter Second Number.", type: "number", name: "secondNumber"},
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage"],
    },
]); 

// Conditional statements if-else
if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else if(answers.operator === "Percentage"){
    console.log(answers.firstNumber*100 / answers.secondNumber)
}
else{
    console.log("Invalid Input");
}