// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "Please name your Project"
    }, 

    {
        type: "input",
        name: "description",
        message: "Please describe the purpose of and functionality of your project",
    }, 

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    }, 

    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for the use of your project"
    }, 

    {
        type: "input",
        name: "contributors",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    }, 


    {
        type: "checkbox",
        name: "license",
        message: "Please select a license that is applicable for your project",
        choices: ["MIT", "APACHE-2.0", "GPL-3.0","None"]
    }, 

    {
        type: "input",
        name: "links",
        message: "Please provide your projects' Github Link and/or Deployed Link if availble"
    }, 




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README File...");
        writeToFile("../README.md", generateMarkdown({...responses}));
    })
}

// Function call to initialize app
init();

module.exports = generateMarkdown;