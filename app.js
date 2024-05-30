"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const projects = await getProjects(); // Call the getProjects function
  console.log(projects); // Log the projects to the console
  displayProjectsGrid(projects); // Call the displayProjectsGrid function
}

async function getProjects() {
  const response = await fetch(
    "https://examheadless.sofiaalessiod.dk/wp-json/wp/v2/projects?acf_format=standard"
  ); // Fetch the data from the URL
  const data = await response.json(); // Parse the data as JSON into readable JavaScript objects (array of objects)
  return data; // Return the data
}

function displayProjectsGrid(projects) {
  const projectsGrid = document.querySelector("#projects-grid"); // It selects the HTML element with the id projects-grid and store it in the projectsGrid variable

  for (const project of projects) {
    projectsGrid.insertAdjacentHTML(
      "beforeend",
      /*html*/ ` 
          <article class="grid-item"> 
            <img src="${project.acf.image}" alt="${project.acf.name}" /> 
            <h2>${project.acf.title}</h2>
            <h4>${project.acf.client}</h4>
            <h4>${project.acf.type}</h4>
            <h4>${project.acf.deliverables}</h4>
            <p>${project.acf.description}</p>
            <a href="${project.acf.link}">${project.acf.link}</a>
          </article>
        `
    );
  }
}
// we are inserting HTML for each project into the 'projectsGrid' element
// above we are basically indicating the size and decoration of each of those lines of text, as well as indicating that the url is a clickable link
