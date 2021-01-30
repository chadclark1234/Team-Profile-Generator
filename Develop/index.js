const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");

inquirer.prompt(questions);

// .then((answers) => {
//   const template = generateMarkdown(answers);
//   console.log(template);
//   generateFile(template);
// });
