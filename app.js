const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template");

// const pageHTML = generatePage(Name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio Complette! Check out index.html to see the output");
// });

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
        }
        return false;
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github Username (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a Github username!");
        }
        return false;
      },
    },
    {
      type: "confirm",
      name: "confirmAbout",
      message:
        'Would you like to enter some information about yourself for an "About" section?',
      default: true,
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself",
      validate: (messageInput) => {
        if (messageInput) {
          return true;
        } else {
          console.log("Please provide Information on yourself");
        }
        return false;
      },
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

//promptUser().then((answers) => console.log(answers));

const promptProject = (portfolioData) => {
  console.log(`
  =================
  Add a New project
  =================
  `);

  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name ",
        message: "What is the name of your Project? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name for you project!");
          }
          return false;
        },
      },
      {
        type: "input",
        name: "name",
        message: "Provide a description of the project (Required)",
        validate: (messageInput) => {
          if (messageInput) {
            return true;
          } else {
            console.log("Please enter a description for your project!");
          }
          return false;
        },
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply?",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "JQuery",
          "BootStrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "link",
        message: "enter the Github link to your project (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please provide a Github link for your project!");
          }
          return false;
        },
      },
      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },
      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another Project",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser().then(promptProject).then(console.log);
