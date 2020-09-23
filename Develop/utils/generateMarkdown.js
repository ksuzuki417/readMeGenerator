// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title} ![License](https://img.shields.io/badge/License-${response.license}-blue)

  ### Table of Contents
  ### [1. Description](#Description)
  ### [2. Installation](##Installation)
  ### [3. Usage](##Usage)
  ### [4. License](#License)
  ### [5. Contributors](##Contributors)
  ### [6. Tests](##Tests)
  ### [7. Questions](##Questions)

  ## Description
  ${response.motivation} ${response.reason} ${response.solution} ${response.learnings} ${response.uniqueness}
  ${response.features}

  ## Installation 
  ${response.installation}

  ## Usage
  ${response.usage} \n
  ${response.screenshots} \n 
  [Click Here for a Demo](${response.demoLink})

  ## License
  ${response.license}

  ## Contributors
  ${response.collaborators}

  ## Tests
  ${response.test}

  ## Questions
  GitHub Profile: https://github.com/${response.gitHub}\n
  For additional information, please reach out to me at ${response.email}.
`;
}

module.exports = generateMarkdown;
