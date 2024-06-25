// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "%20");
  return `[![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkUrl = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `
    This project is licensed under the ${license} license.
    `;
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

// formatAsUnorderedList function
function formatAsUnorderedList(input) {
  return input.split(',').map(item => `- ${item.trim()}`).join('\n');
}

// formatAsOrderedList function
function formatAsOrderedList(input) {
  return input.split(',').map((item, index) => `${index + 1}. ${item.trim()}`).join('\n');
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
  - [Contribution](#contribution)
  - [Questions](#questions)

  ## Description
  ${info.description}
  ${renderDemo(demo)}

  ## Installation
  ${formatAsOrderedList(info.installation)}

  ## Usage
  ${formatAsUnorderedList(info.usage)}

  ## Tests
  ${formatAsUnorderedList(info.tests)}

  ## License
  ${renderLicenseBadge(license)}
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}

  ## Contribution
  ${formatAsOrderedList(info.contribution)}

  ## Questions
  Reach out to me with additional questions! [${github}](https://github.com/${github}) or at my email: ${info.email}
  `;
}

module.exports = generateMarkdown;
