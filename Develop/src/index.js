const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./questions");

inquirer.prompt(questions.again);

// .then((answers) => {
//   const template = generateMarkdown(answers);
//   console.log(template);
//   generateFile(template);
// });
