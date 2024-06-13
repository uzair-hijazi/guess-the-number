#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "numberGuessedByUser",
        type: "number",
        message: "Kindly guess any number between 1-10 and write it here: ",
    }
]);
if (answers.numberGuessedByUser === randomNumber){
    console.log("Congratulations! You have guessed the right number");
} 
else
{
    console.log("Alas! You have guessed the wrong number");
}
console.log("THE END");