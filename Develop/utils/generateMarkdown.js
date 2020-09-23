// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Table of Contents
  #1 [Description] (#Description)
  #2 [Installation] (##Installation)
  #3 [Usage] (##Usage)
  #4 [License] (#License)
  #5 [Contributors] (##Contributors)
  #6 [Tests] (##Tests)
  #7 [Questions] (##Questions)

  #Description
  ${response.motivation} ${response.reason} ${response.solution} ${response.learnings} ${response.uniqueness}
  ${response.features}

  ##Installation
  ${response.installation}

  ##Usage
  ${response.usage}

  ##License
  ${response.license}

  ##Contributors
  ${response.collaborators}

  ##Tests
  ${response.screenshots}

  ##Questions (##Questions)

  

  
`;
}

module.exports = generateMarkdown;
