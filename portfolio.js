let projects = [
  {
    imgSRC: "./Images/Screenshot from 2021-05-14 08-43-11.png",
    imgALT: "Glassmorphic Form",
    title: "Glassmorphic Form",
    techStack: "HTML/CSS",
    description: "lorem ipsum hello world",
    netlifyURL: "https://peaceful-franklin-056a5c.netlify.app",
    githubURL: "https://github.com/Jaydenmay-040/Glassmorphism-timeline",
  },

  {
    imgSRC: "./Images/Screenshot from 2021-05-14 09-53-20.png",
    imgALT: "Glassmorphic Timeline",
    title: "Glassmorphic Timeline",
    techStack: "HTML/CSS",
    description: "lorem ipsum Python",
    netlifyURL: "https://serene-ptolemy-3b08d3.netlify.app/",
    githubURL: "https://github.com/Jaydenmay-040/Glassmorphism-timeline",
  },

  {
    imgSRC: "./Images/Screenshot from 2021-05-14 10-07-13.png",
    imgALT: "Sneaker Site",
    title: "Sneaker Site",
    techStack: "HTML/CSS/JS",
    description: "lorem ipsum JS",
    netlifyURL: "https://ecstatic-mestorf-641345.netlify.app/",
    githubURL: "https://github.com/Jaydenmay-040/sneaker-store",
  },

  {
    imgSRC: "./Images/Screenshot from 2021-05-14 10-23-38.png",
    imgALT: "tkinter Adding Numbers",
    title: "tkinter Adding NumbersSome Title",
    techStack: "Python",
    description: "I made this",
    replitURL: "https://replit.com/@Jaydenmay040/tkinter-adding-numbers",
    githubURL: "https://github.com/Jaydenmay-040/tkinter-adding-numbers",
  },

  {
    imgSRC: "https://picsum.photos/300?random=4",
    imgALT: "Javascript Calculator",
    title: "Javascript Calculator",
    techStack: "HTML/CSS/JS",
    description: "lorem ipsum",
    netlifyURL: "",
    githubURL: "https://github.com/Jaydenmay-040/js-calculator",
  },

  {
    imgSRC: "https://picsum.photos/300?random=5",
    imgALT: "Lotto Number Challenge",
    title: "My Project Title 5",
    techStack: "Python",
    description: "This is dynamic",
    replitURL: "",
    githubURL: "https://github.com/Jaydenmay-040/Lotto_Numbers_Challenge",
  },
];

function createCard(card) {
  let createdCard = `<div class="card1" techStack=${card.techStack}>
    <img
      src="${card.imgSRC}"
      alt="${card.imgALT}"
      class="card-img"
    />
    <!-- Card Details -->
    <div class="card-details">
      <h2 class="card-heading">${card.title}</h2>
      <h3 class="card-subtitle">${card.techStack}</h3>
      <p>${card.description}</p>
      <!-- Buttons -->
      <div class="card-buttons">
        <a
          href="${card.netlifyURL}"
          target="_blank"
          class="button"
          ><span
            class="iconify"
            data-icon="simple-icons:netlify"
            data-inline="false"
          ></span
        ></a>
        <a
          href="${card.githubURL}"
          target="_blank"
          class="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
  </div>
    `;
  return createdCard;
}

function renderCards() {
  let cardContainer = document.getElementsByClassName(".card-container");
  for (project of projects) {
    let card = createCard(project);
    cardContainer.innerHTML += card;
  }
}

renderCards();
