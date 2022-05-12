const fs = require("fs");

const profileDataArgs = process.argv.slice(2);

const generatePage = require("./src/page-template");

// const Name = profileDataArgs[0];
// const github = profileDataArgs[1];

const [Name, github] = profileDataArgs;

// const printProfileData = (profileDataArr) => {
//   //this...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   //Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//     `;
// };

fs.writeFile("./index.html", generatePage(Name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio Complette! Check out index.html to see the output");
});
