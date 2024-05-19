import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.sentence.trim().split(" ");
//Print the array of words to the console
console.log(words);
//Print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
