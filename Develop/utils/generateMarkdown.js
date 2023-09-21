// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return '## License\n\nThis project is licensed under the [MIT License](https://opensource.org/licenses/MIT).';
    case 'Apache-2.0':
      return '## License\n\nThis project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
    case 'GPL-3.0':
      return '## License\n\nThis project is licensed under the [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0).';
    
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ##Description
  ${data.description}
  ##Installation
  ${data.installation}
  ##Usage
  ${data.usage}
  ##Contributors
  ${data.contributors}
  ##License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ##Links
  ${data.links}

`;
}

module.exports = generateMarkdown;
