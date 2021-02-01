const projects = [ {
  title: "Product Cards", 
  screenshot: "https://i.ibb.co/mBq31gX/Screen-Shot-2021-01-31-at-7-33-59-PM.png", 
  description: "These are my product cards", 
  technologiesUsed: "HTML, CSS, JavaScript, Version Control with Github",
  available: true,
  url: "https://hrswanproductcards.netlify.app/", 
  githubUrl: "https://github.com/thedigitalmenagerie/product-cards"
}
];

const printToDom = (divId, textToPrint) => { 
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint; 
}

const createProjectCards = (projects) => {
  let domString = ''; 
      projects.forEach((item, i) => {
        if (item.available === true) {
        domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
        <div class="card-body">
          <h4 class="card-title justify-content-center text-center">${item.title}</h4>
          <img src =${item.screenshot} class="card-image img-thumbnail p-2">
          <p class="card-text">${item.description}</p>
          <p class="card-text">${item.technologiesUsed}</p>
          <a href='#' class="card-link">${item.url}</a>
          <a href='#' class="card-link">${item.githubUrl}</a>
        </div>
      </div>`;
      }
    })
    printToDom('#projectsPage', domString);
    }
    
  


  const init = () => { 
    createProjectCards(projects); 
  }
  
  init();
