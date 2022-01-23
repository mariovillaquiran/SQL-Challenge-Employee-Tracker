const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");
function start() {
  loadprompts();
}
//COMPLETE LIST BELOW
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

    //COMPLETE SWITCH BELOW TO HAVE ALL REQUIRED FUNCS (ADD,REMOVE,EDIT,ETC)
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

      default:
        quit();
    }
  });
}
function viewemployees(){
    db.findallemployees()
    .then(([row])=>{
        let employees = row
        console.table(employees)
    })
    .then(()=>loadprompts())
}