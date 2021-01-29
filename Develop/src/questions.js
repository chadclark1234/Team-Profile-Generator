const questions = {
  employee: [
    {
      type: "input",
      name: "firstName",
      message: "Enter employees first name",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter employees last name",
    },
    {
      type: "list",
      name: "role",
      message: "Enter the employees role",
      choices: ["Intern", "Engineer", "Manager"],
    },
  ],
  manager: [
    {
      type: "input",
      name: "office",
      message: "Enter the managers office number",
    },
  ],
  engineer: [
    {
      type: "input",
      name: "github",
      message: "Enter the engineers GitHub account",
    },
  ],
  intern: [
    {
      type: "input",
      name: "school",
      message: "Enter the employees school",
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
