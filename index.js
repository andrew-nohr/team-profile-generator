const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

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
                    console.log(team);
            }
        })
    }

    managerQuestions();
}

start();