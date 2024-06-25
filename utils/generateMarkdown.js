import { readFileSync } from 'fs';
const licenses = JSON.parse(readFileSync('./utils/common-licenses.json', 'utf8'));

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licenses[license]) {
    return licenses[license].badge;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (licenses[license]) {
    return licenses[license].url;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenses[license]) {
    return `This project is licensed under the ${license} license.`;
  }
  else {
    return '';
  }
}

// renderDemo function 
// If there is no demo, return an empty string
function renderDemo(demo) {
  if (demo) {
    return `Here is a link to the demo: ${demo}`;
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {github, license, demo, ...info} = data;

  return `
  # ${info.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Description
  ${info.description}
  ${renderDemo(demo)}

  ## Installation
  ${info.installation}

  ## Usage
  ${info.usage}

  ## Tests
  ${info.tests}

  ## License
  ${renderLicenseBadge(license)}
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}

  ## Contributing
  ${info.contributing}

  ## Questions
  Reach out to me with additional questions! [${github}](https://github.com/${github}) at ${info.email}
  `;
}

module.exports = generateMarkdown;
