// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return "";
  } else {
    return '* [License](#license)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return "";
  } else {
    return `## License \n ${license}`
  } 
}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `
  
  # ${data.title}



  # Description
  ${data.description}

  # Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${data.install}


  ## Usage
  ${data.usage}


  ${renderLicenseSection(data.license)}
  


  ## Contributing
  ${data.contributors}


  ## Tests
  ${data.test}

 
  ## Questions
  For questions, contact me at:
  #### *Email*: ${data.email}
  #### GitHub: [${data.username}](https//github.com/${data.username})
`
};

module.exports = generateMarkdown;
