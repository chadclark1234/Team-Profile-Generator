const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const pageTemplate = require("./page-template.js");

// TEAM OBJECT ARRAY AFTER PROMPTS \\
const team = [];

// FIRST PROMPT STARTS WITH MANAGER \\
inquirer
  .prompt([...questions.employee, ...questions.manager])
  .then((answers) => {
    const aManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.office
    );
    team.push(aManager);
    listQuestions();
  });

// FUNCTION CALLED AFTER MANAGER AND IF MORE EMPLOYEES TO ENTER \\
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
          const aEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          );
          team.push(aEngineer);
          if (answers.again === true) {
            listQuestions();
          } else {
            console.log("Employee Entry Complete");
            let html = pageTemplate(team);
            writeTeam(html);
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
          const aIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          team.push(aIntern);
          if (answers.again === true) {
            listQuestions();
          } else {
            console.log("Employee Entry Complete");
            let html = pageTemplate(team);
            writeTeam(html);
          }
        });
    }
  });
}

// WRITE TEAM TO STRING AND BUILD HTML \\
function writeTeam(data) {
  fs.writeFile("team.html", data, (err) =>
    err ? console.error("error") : console.log("Your team profile is complete!")
  );
}
