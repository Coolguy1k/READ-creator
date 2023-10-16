function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    Licensed under the ${license} license.`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Languages](#languages)
  * [Contributors](#contributors)
  * [Creator](#creator)
  * [Email](#email)
  * [GitHub](#github)
  * [Testing](#testing)
  
  
  ## Description
  ${data.description}

  ## Languages
  ${data.languages}
  
  ## Contributors
  ${data.contributors}

  ## Creator
  ${data.creator}

  ## Email
  ${data.email}

  ## GitHub
  ${data.github}
  
  ## Testing
  ${data.testing}
`;
}

module.exports = generateMarkdown;