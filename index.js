const {prompt} = require("inquirer") 
const db = require("./db")
require("console.table")
function start(){
    loadprompts()
}
//COMPLETE LIST BELOW 
function loadprompts(){
    prompt([
    {
        name: "choice",
        type: "list",
        message:"What would you like to do?",
        choices: [
            {
                name:"View all employees",
                value:"VIEW_EMPLOYEES",
            }
        ]

    }    
    //COMPLETE SWITCH BELOW TO HAVE ALL REQUIRED FUNCS (ADD,REMOVE,EDIT,ETC)
    ]) .then(res =>{
        let choice = res.choice
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewemployees()
                break;
                case "ADD_EMPLOYEES":
                    addemployees()
                    break;
    
            default:
                break;
        }
    })
}