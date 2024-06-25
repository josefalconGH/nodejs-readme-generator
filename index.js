// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    // Title prompt
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },

    // Description prompt
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },

    // Demo prompt
    {
        type: 'confirm',
        name: 'confirmDemo',
        message: 'Would you like to include a link/gif to/of a demo?',
        default: false
    },
    {
        type: 'input',
        name: 'demo',
        message: 'Please provide a link/gif to/of the demo:',
        when: ({ confirmDemo }) => confirmDemo,
        validate: demoInput => {
            if (demoInput) {
                return true;
            } else {
                console.log('Please enter a demo link!');
                return false;
            }
        }
    },

    // Installation prompt
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project (separate each step with a comma):',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project!');
                return false;
            }
        }
    },

    // Usage prompt
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project (separate each step with a comma):',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information for your project!');
                return false;
            }
        }
    },

    // Tests prompt
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project (separate each step with a comma):',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter test instructions for your project!');
                return false;
            }
        }
    },

    // License prompt
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['Apache', 'GNU 2.0', 'GNU 3.0', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Mozilla', 'EPL 1.0', 'EPL 2.0', 'Creative Commons']
    },

    // Contribution prompt
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project (separate each step with a comma):',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines for your project!');
                return false;
            }
        }
    },

    // Questions prompt
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Your README has been created!'.green);
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the NodeJS README Generator!'.blue);

    inquirer.prompt(questions)
        .then(data => {
            return generateMarkdown(data);
        })
        .then(markdown => {
            writeToFile('./dist/README.md', markdown);
        });
}

// Function call to initialize app
init();
