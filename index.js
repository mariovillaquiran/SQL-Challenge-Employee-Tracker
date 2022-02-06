const { prompt } = require("inquirer");
const { first } = require("rxjs");
const db = require("./db");
require("console.table");
function start() {
  loadprompts();
}
function loadprompts() {
  prompt([
    {
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View all employees by department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
        },
        {
          name: "View all employees by manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER",
        },
        {
          name: "Add employee",
          value: "ADD_EMPLOYEES",
        },
        {
          name: "Remove employee",
          value: "REMOVE_EMPLOYEES",
        },
        {
          name: "Update employee role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Update employee manager",
          value: "UPDATE_EMPLOYEE_MANAGER",
        },
        {
          name: "Add a role",
          value: "ADD_ROLE",
        },
        {
          name: "Remove a role",
          value: "REMOVE_ROLE",
        },
        {
          name: "View all departments",
          value: "VIEW_ALL_DEPARTMENTS",
        },
        {
          name: "Remove departments",
          value: "REMOVE_DEPARTMENTS",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewemployees();
        break;
      case "ADD_EMPLOYEES":
        addemployees();
        break;
      case "REMOVE_EMPLOYEES":
        removeemployees();
        break;
      case "VIEW_EMPLOYEES_BY_DEPARTMENT":
        viewemployeesbydepartment();
        break;
      case "VIEW_EMPLOYEES_BY_MANAGER":
        viewemployeesbymanager();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        updateemployeerole();
        break;
      case "UPDATE_EMPLOYEE_MANAGER":
        updateemployeemanager();
        break;
      case "ADD_ROLE":
        addrole();
        break;
      case "REMOVE_ROLE":
        removerole();
        break;
      case "VIEW_ALL_DEPARTMENTS":
        viewalldepartments();
        break;
      case "REMOVE_DEPARTMENTS":
        removedepartments();
        break;
      case "FIND_ALL_ROLES":
        findallroles();
        break;
      case "ADD_DEPARTMENT":
        adddepartment();
        break;
      default:
        quit();
    }
  });
}
function viewemployees() {
  db.findallemployees()
    .then(([row]) => {
      let employees = row;
      console.table(employees);
    })
    .then(() => loadprompts());
}
function addemployees() {
  prompt([
    {
      name: "first_name",
      message: "WHat is your first name?",
    },
    {
      name: "last_name",
      message: "WHat is your last name?",
    },
  ]).then((res) => {
    let firstName = res.first_name;
    let lastName = res.last_name;
    db.findallroles().then(([rows]) => {
      let roles = rows;
      const roleschoice = roles.map(({ id, title }) => ({
        name: title,
        value: id,
      }));
      prompt({
        type: "list",
        name: "roleid",
        nessage: "What is the employee role?",
        choices: rolechoices,
      }).then((res) => {
        let roleid = res.roleid;
        db.findallemployees().then(([rows]) => {
          let employees = rows;
          const managerchoices = employees.map(
            ({ id, first_name, last_name }) => ({
              name: `${first_name} ${last_name}`,
              value: id,
            })
          );
          managerchoices.unshift({ name: "none", value: null });
          prompt({
            type: "list",
            name: "managerid",
            message: "Who is the employee's manager?",
            choices: managerchoices,
          })
            .then((res) => {
              let employee = {
                manager_id: res.managerid,
                role_id: roleid,
                first_name: firstname,
                last_name: lastname,
              };
              db.createemployee(employee);
            })
            .then(() => console.log(`added${firstname} to database`))
            .then(() => loadprompts());
        });
      });
    });
  });
}
function removeemployees() {}
function findallroles() {}
function viewemployeesbydepartment() {}
function viewemployeesbymanager() {}
function updateemployeerole() {}
function updateemployeemanager() {}
function addrole() {}
function removerole() {}
function viewalldepartments() {}
function removedepartments() {
  db.findalldepartments().then(([row]) => {
    let department = row;
    const departmentchoices = department.map(({ id, name }) => ({
      name: name,
      value: id,
    }));
    prompt({
      type: "list",
      name: "departmentId",
      message: "Which department would you like to remove?",
      choices: departmentchoices,
    })
      .then((res) => db.removedepartments(res.departmentId))
      .then(() => console.log("removed department from database"))
      .then(() => loadprompts());
  });
}
function adddepartment() {
  prompt([
    {
      name: "name",
      message: "What is the name of the department",
    },
  ]).then((res) => {
    let name = res;
    db.createdepartment(name)
      .then(() => console.log(`${name.name}todatabase`))
      .then(() => loadprompts());
  });
}

function quit() {}
