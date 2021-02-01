const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");

function listQuestions() {
  inquirer.prompt(questions.employeeList).then((answers) => {
    const role = answers.role;
    if (role === "Engineer") {
      inquirer
        .prompt([
          ...questions.employee,
          ...questions.engineer,
          ...questions.again,
        ])
        .then((answers) => {
          if (answers.again === true) {
            // inquirer.prompt(questions.employee);
            listQuestions();
          } else {
            console.log("Employee Entry Complete");
          }
        });
    } else if (role === "Intern") {
      inquirer
        .prompt([
          ...questions.employee,
          ...questions.intern,
          ...questions.again,
        ])
        .then((answers) => {
          if (answers.again === true) {
            // inquirer.prompt(questions.employee);
            listQuestions();
          } else {
            console.log("Employee Entry Complete");
          }
        });
    }
  });
}

inquirer
  .prompt([...questions.employee, ...questions.manager])
  .then((answers) => {
    // if (answers.again === true) {
    listQuestions();
    // }
  });

// inquirer.prompt(questions.employee).then((answers) => {
//   const role = answers.role;
//   console.log(role);
// });

// .then((answers) => {
//   const template = generateMarkdown(answers);
//   console.log(template);
//   generateFile(template);
// });
