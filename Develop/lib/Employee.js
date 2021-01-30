class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName = () => this.name;

  getId = () => this.id;

  getEmail = () => this.email;
}
getRole = () => "Employee";

// let testOB = new Employee("Alice", 100, "test@test.com");
// console.log(testOB);
// console.log(testOB.getEmail());

module.exports = Employee;
