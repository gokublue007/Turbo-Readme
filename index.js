// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js'); // calling js file in utils

// Created an array of questions for user input
const questions = [
    // 1. Name of GitHub 
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github user name?',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log('Please enter your GitHub username to continue . . .');
                return false;
            }
        }
    },
    // 2. Your email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Enter a email address to continue . . .');
                return false;
            }
        }
    },
    // 3. Name of project
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?', 
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Enter the name of the project to continue . . .');
                return false;
            }
        }
    },
    // 4. Discription of Project
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project: ',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Enter a project description to continue . . . ');
                return false;
            }
        }
    },
    // 5. Licensing avaiable
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license that will best suit your project.',
        choices: ['MIT','APACHE 2.0','GPL 3.0', 'BSD 3', 'None of the above'],
        validate: licence => {
            if (licence) {
                return true;
            } else {
                console.log('Select a license for the project to continue . . ..');
                return false;
            }
        }
        
    },
    // 6. Install command for the code
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log('Provide information on how to install command for the project to continue . . .');
                return false;
            }
        }
    },
    // 7. Test Instructions 
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        validate: test => {
            if (test) {
                return true;
            } else {
                console.log('Enter command to run tests to continue . . .');
                return false;
            }
        }
    },
    
    // 8. How to use the repo
    { 
        type: 'input',
        name: 'how',
        message: 'What does the user need to know about using the repo?',
        validate: how => {
            if (how) {
                return true;
            } else {
                console.log('Enter what user needs to know to continue . . .');
                return false;
            }
        }
    },
    // 9. How to give contrubution to repo
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contrubuting to the repo?',
        validate: contribution => {
            if (contribution) {
                return true;
            } else {
                console.log('Please enter your email and name to continue . . .');
                return false;
            }
        }
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    console.log("Generating README . . .");
});
};

// Function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
