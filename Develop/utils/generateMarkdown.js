// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Table of Contents
  1 [Description] (#description)
  2 [Installation] (#installation)
  3 [Usage] (#usage)
  4 [License] (#license)
  5 [Contributors] (#contributors)
  6 [Tests] (#tests)
  7 [Questions] (#questions)

  # Description
  ${response.motivation} ${response.reason} ${response.solution} ${response.learnings} ${response.uniquness}
  ${response.features}

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## Screenshots
  ${response.screenshots}

  ## Contributors
  ${response.collaborators}

  ## License
  ${response.license}
`;
}

module.exports = generateMarkdown;
