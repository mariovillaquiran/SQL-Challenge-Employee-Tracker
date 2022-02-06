const connection = require("./connection");
class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findallemployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
    //create for all in index.js
  }
  createdepartment(department) {
    return this.connection
      .promise()
      .query("INSERT into department set ?", department);
  }
  removedepartments(departmentId) {
    return this.connection
      .promise()
      .query("DELETE from department where id = ?", departmentId);
  }
  createemployee(employee){
      return this.connection.promise().query(
          "INSERT into employee set ?", employee
      );
  }
}
module.exports = new DB(connections);
