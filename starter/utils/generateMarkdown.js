// function to generate markdown for README

function renderLicenseBadge(license){
  if (license !== "None"){
    return `![Github License](https://img.shields.io/badge/License-${license})-blue.svg)`
}
return ''


function generateMarkdown(data) {
 // console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description

`;
}

module.exports = generateMarkdown;

}
