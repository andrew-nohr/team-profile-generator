const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const createTeam = require('./src/template.js');

const team = [];

function start() {
    function managerQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID?"
            },            
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?"
            },            
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?"
            },
        ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            team.push(manager);
            console.log(team);
            newMember();
        })
    }

    function engineerQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's ID?"
            },            
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?"
            },            
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub?"
            },
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            team.push(engineer);
            console.log(team);
            newMember();
        })
    }

    function internQuestions() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID?"
            },            
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?"
            },            
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            },
        ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            team.push(intern);
            console.log(team);
            newMember();
        })
    }

    function newMember() { 
        inquirer.prompt([
            {
                type: 'list',
                name: 'nextMember',
                message: 'What team member would you like to make next?',
                choices: ['Engineer', 'Intern', 'I am done']
            }
        ])
        .then(res => {
            switch(res.nextMember) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                default:
                    createFile();
                    console.log(team);
            }
        })
    }

    function createFile() {
        fs.writeFileSync(distPath, createTeam(team), 'utf-8')
    }

    managerQuestions();
}

start();