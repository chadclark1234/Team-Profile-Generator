const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");
const Manager = require("./lib/Manager");
const pageTemplate = require("./page-template.js");
const team = [];
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
            let html = pageTemplate(team);
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
            let html = pageTemplate(team);
            console.log(html);
          }
        });
    }
  });
}

inquirer
  .prompt([...questions.employee, ...questions.manager])
  .then((answers) => {
    console.log(answers);
    const aManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office
    );
    team.push(aManager);
    console.log(team);
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
