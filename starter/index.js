//
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },

  {
    type: "input",
    name: "location",
    message: "Where are you from?",
  },

  {
    type: "input",
    name: "profession",
    message: "What is your profession?",
  },

  {
    type: "input",
    name: "hobby",
    message: "What is your favorate sport?",
  },

  {
    type: "input",
    name: "github",
    message: "what is your github?",
  },

  {
    type: "input",
    name: "url",
    message: "what is your github url?",
  },

  {
    type: "input",
    name: "email",
    message: "what is your email address?",
  },

  {
    type: "input",
    name: "title",
    message: "what is the name of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "Please give a brief description of your project",
  },

  {
    type: "list",
    name: "license",
    message: "What kind of license?",
    choices: ["MIT", "APACHE 2.0", "GPL", "None"],
  },

  {
    type: "input",
    name: "installations",
    message: "Which commands should be run to install dependances?",
    default: "npm i",
  },

  {
    type: "input",
    name: "test",
    message: "Which commands should be run to run test?",
    default: "npm test",
  },

  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?", //make sure they have node installed to run this program
  },

  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?", //fork to contribute
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(`Generating README...`);
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

init();
