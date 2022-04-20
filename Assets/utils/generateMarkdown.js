// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (this.license === 'true') {
    return `[![license:MIT](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)`
} if (this.license === 'true') {
  return `[![license:ACACHE 2.0](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)`
} if (this.license === 'true') {
  return `[![license:GPL 3.0](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)`
} if (this.license === 'true') {
  return `[![license:BSD 3.0](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)`
}
else {
    return ''
  }
}
// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[https://opensource.org/licenses/MIT]'

  } else if (license === 'ACACHE 2.0') {
    return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)'

  } else if (license === 'GPL 3.0') {
    return '[https://www.gnu.org/licenses/gpl-3.0.en.html]'

  } else if (license === 'BSD 3.0') {
    return '[https://opensource.org/licenses/BSD-3-Clause]'

  } else {
    return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None of the above") {
    return `Project license is under ${license}! `
  } else {
    return "Choose a license, none was picked."
  }
}
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseBadge(data.license)}
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)
  
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#questions)
  ---
  ## Description:
  ${data.description}
  
  ## Installation:
  ${data.install}
  
  ## Usage:
  ${data.how}
  
  ## License: 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contribution: 
  ${data.contribution}
  
  ## Testing: 
  To run tests, run the following command: ${data.test}
  
  ## Questions:
  If you have any questions about the repo, open an issue or contact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github})! Thank You!
  
  ## Contact Information:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](user@example.com) `;
}

module.exports = generateMarkdown;