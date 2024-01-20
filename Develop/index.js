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
// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md generated successfully!')
    );
  }
  
// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      // Use the answers to dynamically generate the content of the README
      const readmeContent = `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  // Add more sections based on user input
  
  `;
  
      // Call the writeToFile function to create the README file
      writeToFile('README.md', readmeContent);
    });
  }
  
  // Function call to initialize app
  init();