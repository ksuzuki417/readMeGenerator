const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMD = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    //{
        //type: "input",
        //message: "Please write a short description of your project. Be sure to explain what, why and how.",
        //name: "description",
    //},
    {
        type: "input",
        message: "What was your motivation?",
        name: "motivation",
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "reason",
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "solution",
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learnings",
    },
    {
        type: "input",
        message: "What makes your project stand out?",
        name: "uniqueness",
    },
    {
        type: "input",
        message: "If your project has a lot of features, please list them below",
        name: "features",
    },
    {
        type: "input",
        message: "What are steps required to install your project? Please provide a step by step description",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide instructions and examples for use.",
        name: "usage",
    },
    {
        type: "input",
        message: "Please include screenshots as needed",
        name: "screenshots",
    },
    {
        type: "input",
        message: "Please list your collaborators, if any, with links to their GitHub profiles.",
        name: "collaborators",
    },
    {
        type: "list",
        message: "Please choose the appropriate license from the list",
        choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", 
        "MIT License", "BSD 2-Clause", "BSD 3-Clause", "Boost Software License", 
        "Creative Commons Zero", "Eclipse Public License", "GNU Affero General Public License", 
        "GNU General Public License", "GNU Lesser Public License", "Mozilla Public License", 
        "The UnLicense"],
        name: "license",
    },
    {
        type: "input",
        message: "Please enter your GitHub username",
        name: "gitHub",
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email",
    },
];

    
inquirer.prompt(questions)
.then(function(response){
    fs.writeFile("ReadME.md", generateMD(response),
    function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully created!")
    });
})
// function to write README file
//function writeToFile("ReadME.md", response, function(err) {
    //if (err) {
        //return console.log(err);
    //}
    //console.log("ReadME created!");    
//});
//}

// function to initialize program
function init() {
    //return inquirer.prompt(questions)
    //.catch(function (err){
        //console.log(err)
        
};

//}

// function call to initialize program
init();
