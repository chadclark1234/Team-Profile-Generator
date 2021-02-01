const questions = {
  employee: [
    {
      type: "input",
      name: "name",
      message: "Enter employees name",
      default: "John Doe",
    },
    {
      type: "input",
      name: "id",
      message: "Enter employees id",
      default: "2",
    },
    {
      type: "input",
      name: "email",
      message: "Enter the employees email",
      default: "test@test.com",
    },
  ],
  employeeList: [
    {
      type: "list",
      name: "role",
      message: "Enter the employees role",
      choices: ["Intern", "Engineer"],
    },
  ],
  manager: [
    {
      type: "input",
      name: "office",
      message: "Enter the managers office number",
      default: "25",
    },
  ],
  engineer: [
    {
      type: "input",
      name: "github",
      message: "Enter the engineers GitHub account",
      default: "john@github.com",
    },
  ],
  intern: [
    {
      type: "input",
      name: "school",
      message: "Enter the employees school",
      default: "Harvard",
    },
  ],
  again: [
    {
      type: "confirm",
      name: "again",
      message: "Would you like to add another employee?",
      default: true,
    },
  ],
};

module.exports = questions;
