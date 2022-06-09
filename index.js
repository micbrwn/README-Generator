const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


function questions () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'ttle',
        },
        {
            type: 'input',
            message: 'Breifly describle your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the required steps to install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What are the instructions for using your project? How do you you use it?',
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: 'If applicable, what is the license name?',
            choices: ['Mozillila', 'Open Software', 'PostgreSQL', 'N/A', 'Other'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'If applicable, what are the github usernames of the contributors?',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'What commands are required to run tests?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        }
    ])
    
};

function init() {
    questions()
    .catch((err) => console.log(err))
    .then( data => { 
        return writeToFile('README.md', data)
    })
    .then( () => console.log('README Created Successfully!!'))
    .catch((err) => console.log(err))
};

function writeToFile(fileName, data) {
    const createREADME = generateMarkdown.generateMarkdown(data);

    writeFile(fileName, createREADME);
};

init();