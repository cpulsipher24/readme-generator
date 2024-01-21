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
  {
    type: 'input',
    name: 'installation',
    message: 'How do users install your application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should users use your application?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can users contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions for running tests:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
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
    // Generate content for the README based on user input
    const licenseBadge = `![License](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-blue.svg)`;

    const readmeContent = `
# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

// ... rest of the README content

## License
This project is licensed under the ${answers.license} license.

// ... rest of the README content
`;

    // Call the writeToFile function to create the README file
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
