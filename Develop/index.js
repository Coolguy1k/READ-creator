const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Name of your Project",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your Project",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select your License",
    choices: ["MIT", "APACHE2.0", "BSD3", "BSD2", "MPL2.0", "Boost1.0", "none"],
  },
  {
    type: "input",
    name: "github",
    message: "Write GitHub username",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your full name",
  },
  {
    type: "input",
    name: "email",
    message: "Valid email address",
  },
  {
    type: "input",
    name: "contributors",
    message: "List of any contributors",
  },
  {
    type: "input",
    name: "languages",
    message: "List of languages and dependencies",
  },
  {
    type: "input",
    name: "testing",
    message: "Walkthrough/Image of project",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Created File");
    writeToFile("./generated/README.md", generateMarkdown({ ...responses }));
  });
}

init();