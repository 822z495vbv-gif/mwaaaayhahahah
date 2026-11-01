
// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// SCROLL ANIMATIONS
// Content stays visible if animations are unavailable.

const revealElements = document.querySelectorAll(
  ".section-heading, .lore-card, .movie-card, .random-card, .ending-box"
);

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js-ready");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => observer.observe(element));
}

// RANDOM BUTTON

const randomFacts = [
  {
    face: "🤨",
    title: "Hmm. Interesting.",
    text: "Wala lang. Gusto ko lang makita kung pipindutin mo."
  },
  {
    face: "😭",
    title: "HELLOOO?",
    text: "You're still here? HAHAHA welcome back."
  },
  {
    face: "🐸",
    title: "Breaking news.",
    text: "A frog has officially visited this website. That's the news."
  },
  {
    face: "🫵",
    title: "Ikaw nga.",
    text: "Yes, ikaw. Sino pa ba? Wala namang ibang tao dito."
  },
  {
    face: "🧍",
    title: "Awkward silence.",
    text: "So... how's your day? HAHAHA."
  },
  {
    face: "🎀",
    title: "Congratulations!",
    text: "You have successfully wasted a few seconds. You're welcome."
  },
  {
    face: "💀",
    title: "Last na talaga.",
    text: "Okay, one more click. Promise. (Maybe.)"
  }
];

const randomButton = document.getElementById("randomButton");
const randomFace = document.getElementById("randomFace");
const randomTitle = document.getElementById("randomTitle");
const randomText = document.getElementById("randomText");

let previousIndex = -1;

randomButton.addEventListener("click", () => {
  let nextIndex;

  do {
    nextIndex = Math.floor(Math.random() * randomFacts.length);
  } while (nextIndex === previousIndex);

  previousIndex = nextIndex;

  const fact = randomFacts[nextIndex];

  randomFace.textContent = fact.face;
  randomTitle.textContent = fact.title;
  randomText.textContent = fact.text;

  randomButton.textContent = "AGAIN AGAIN";
});

// RANDOM ANSWERS

const answerResult = document.getElementById("answerResult");

document.querySelectorAll(".answer-button").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.dataset.answer;

    if (answer === "good") {
      answerResult.textContent = "AYEEE, at least hindi sayang effort ko 😭";
    } else {
      answerResult.textContent = "Grabe naman. Developer is crying rn. 💀";
    }
  });
});

// FOOTER YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();
