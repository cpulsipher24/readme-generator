const inquirer = require('inquirer');
const fs = require('fs');
// Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    // Add more questions for other sections like Installation, Usage, License, etc.
  ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
