// LOADER FUNCTION
window.addEventListener("load", () => {
  document.querySelector(".loaderContainer").classList.add("hide");
});

function togglemenu() {
    document.querySelectorAll(".nav-container").forEach((item) => {
      item.classList.toggle("show-menu");
    });
    document.querySelectorAll(".nav").forEach((item) => {
      item.classList.toggle("show-menu");
    });
    document.querySelector(".navbutton").classList.toggle("show-menu");
  }
  
  document.querySelector(".navbutton").addEventListener("mouseover", () => {
    document.querySelector(".bar-top").classList.add("move");
    document.querySelector(".bar-middle").classList.add("move");
    document.querySelector(".bar-bottom").classList.add("move");
  });
  
  document.querySelector(".navbutton").addEventListener("mouseout", () => {
    document.querySelector(".bar-top").classList.remove("move");
    document.querySelector(".bar-middle").classList.remove("move");
    document.querySelector(".bar-bottom").classList.remove("move");
  });

  // get the element
const text = document.querySelector('.typing-text');

// make a words array
const words = [
  "aspiring frontend developer."
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 7000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}

let links = document.querySelectorAll("a");
let filters = document.querySelectorAll(".filter");

let projects = [
  {
    heading: "Timeline",
    class: "project2",
    techStack: "HTML/CSS",
    description: "Timeline which features experience information cards.",
    liveURL: "https://serene-ptolemy-3b08d3.netlify.app/",
    githubURL: "https://github.com/Jaydenmay-040/Glassmorphism-timeline",
  },
  {
    heading: "Contact Form",
    class: "project3",
    techStack: "HTML/CSS",
    description:
      "Contact form made with HTML/CSS. It sends submissions to a server and the owner gets a email notification",
    liveURL: "https://peaceful-franklin-056a5c.netlify.app",
    githubURL: "https://github.com/Jaydenmay-040/contact-form",
  },
  {
    heading: "JavaScript Music Player",
    class: "project4",
    techStack: "Javascript",
    description:
      "A site made with Javascript to play music. The site also has next, previous, seek and pause functionality",
      liveURL: "https://distracted-kare-0c7c42.netlify.app/",
      githubURL: "https://github.com/Jaydenmay-040/JS_Music_Player",
  },
  {
    heading: "JavaScript Calculator",
    class: "project5",
    techStack: "Javascript",
    description:
      "A simple site made with Javascript to for calculation of numbers, addition, muliplication, subraction and division",
    liveURL: "https://condescending-brown-8c2d51.netlify.app",
    githubURL: "https://github.com/Jaydenmay-040/js-calculator",
  },
  {
    heading: "BMI Calculator",
    class: "project6",
    techStack: "PYTHON",
    description:
      "Program made with tkinter module to calculate Body Mass Index and Ideal Body Mass Index. It then tells you what category you fall under.",
    liveURL: "https://replit.com/join/oieqvhuu-dekapaan",
    githubURL: "https://github.com/dekapaan/python-BMI-calculator",
  },
  {
    heading: "Pokemon Cards",
    class: "project7",
    techStack: "Javascript",
    description:
      " A site that has clickable pokeballs that transform into cards with the respective pokemon's details. The site also has next and previous functionality",
    liveURL: "https://cocky-neumann-949fe8.netlify.app",
    githubURL: "https://github.com/Jaydenmay-040/PokeDex",
  },
  {
    heading: "Tkinter-Adding-Numbers",
    class: "project8",
    techStack: "PYTHON",
    description:
      " Program made with tkinter module to add two digit. It tells you the sum of the digits",
    liveURL: "https://replit.com/@Jaydenmay040/tkinter-adding-numbers#.replit",
    githubURL: "https://github.com/Jaydenmay-040/tkinter-adding-numbers",
  },
  {
    heading: "Vuejs Live Weather App",
    class: "project9",
    techStack: "Vuejs",
    description:
      " A site made with a quasar and vuejs to provide weather conditions, current location, search bar and a functional day or night background changer according to current time",
    liveURL: "https://vuejs-live-weather-app.netlify.app/#/",
    githubURL: "https://github.com/Jaydenmay-040/Weather_App",
  },
  {
    heading: "CSS Cigarette",
    class: "project10",
    techStack: "HTML/CSS",
    description:
      " A simple site made with HTML and CSS that contains a cigarette and neon text",
    liveURL: "https://cigarette-css.netlify.app/",
    githubURL: "https://github.com/Jaydenmay-040/cigarette_css",
  },
  {
    heading: "New Portfolio",
    class: "project11",
    techStack: "HTML/CSS",
    description:
      " A parallax portfolio currently in the making.",
    liveURL: "https://jayden-may-portfolio-ii.netlify.app/",
    githubURL: "https://github.com/Jaydenmay-040/personalPortfolio",
  },
];

function newCard(card) {
  let newCard = `
  <div class="project ${card.class} fade" techStack=${card.techStack}>
    <div>
    <p class="project-heading">${card.heading}</p>
    <p class="project-tool">${card.techStack}</p>
    <p class="project-description">
      ${card.description}
    </p>
    </div> 
    <div class="project-buttons">
      <a href=${card.liveURL} target="_blank"
        >Live</a
      ><a
        href=${card.githubURL}
        target="_blank"
        >Github</a
      >
    </div>
  </div>
  `;

  return newCard;
}

function displayCards() {
  let container = document.querySelector(".projects_container");
  for (project of projects) {
    let card = newCard(project);
    container.innerHTML += card;
  }
}

displayCards();

function filterProjects(category) {
  let projects = document.getElementsByClassName("project");
  if (category == "All") {
    for (project of projects) {
      project.style.display = "flex";
    }
    return;
  }
  for (project of projects) {
    project.style.display = "none";
  }
  let selected = document.querySelectorAll(`[techStack='${category}']`);
  console.log(selected);
  for (project of selected) {
    project.style.display = "flex";
  }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 12000); // Change image every 2 seconds
}