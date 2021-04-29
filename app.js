const Manager = require("./LIB/Manager");
const Engineer = require("./LIB/Engineer");
const Intern = require("./LIB/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./LIB/html.renderer");
const Employee = require("./LIB/Employee");

const teamMembers = [];

const promptUser = () =>
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the employee'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select the employees role',
            default: 'Intern',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employees ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employees email address',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Managers office number',
            when: (answer) => answer.role === "Manager"
        },
        {
            type: 'input',
            name: "gitHub",
            message: 'Enter the Engineers GitHub username',
            when: (answer) => answer.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter Interns school name',
            when: (answer) => answer.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'additionalEmployee',
            message: 'Will you be adding any additional employees?',
        },

    ])
        .then((answers) => {
            switch (answers.role) {
                case 'Manager':
                    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    teamMembers.push(manager);
                    console.log('Employee added successfully');
                    break;
                case 'Engineer' :
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
                    teamMembers.push(engineer);
                    console.log('Employee added successfully');
                    break;
                case 'Intern':
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    teamMembers.push(intern);
                    console.log('Employee added successfully');
                    break;
            }

            if (answers.additionalEmployee) {
                promptUser();
            
            } else {
                const renderHtml = render(teamMembers);
                fs.writeFile(outputPath, renderHtml, (err) => {
                    if (err) {
                        console.log(err);
                    }else{
                        console.log('Your new html is ready to view in output folder');
                    }
                })
            }
        })
promptUser();