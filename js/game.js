import { words, colors } from "./data.js";
import { cut, shuffle } from "./utils.js";
const buttonWrapper = document.getElementById("buttons");
const startEl = document.getElementById("start");
const layoutNumber = Math.floor(Math.random() * colors.length);
const layoutColor = colors[layoutNumber];
const degree = localStorage.getItem("degree") || "easy";
const gameWords =shuffle( [
  ...cut(
    words[degree].map((el, id) => {
      return {
        word: el.en,
        id,
      };
    }),
    10
  ),
  ...cut(
    words[degree].map((el, id) => {
      return {
        word: el.uz,
        id,
      };
    }),
    10
  ),
]);
const beginning = Date.now();
let timeout;

let foundedIds = [];
let lastFoundedIds = 0;
let clickedButton = null;

const buttonTypes = ["orange", "red", "blue", "white"];

document.body.style.background = `linear-gradient(to top left, ${layoutColor[0]} , ${layoutColor[1]}, ${layoutColor[2]})`;

const displayButtons = () => {
  gameWords.forEach(({ word, id }) => {
    buttonWrapper.innerHTML += `<button class="button3d ${
      buttonTypes[Math.floor(Math.random() * buttonTypes.length)]
    }" data-id="${id}"  ><span>${word}</span></button>`;
  });
};

buttonWrapper.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  buttonClick(button);
});

const buttonClick = (button) => {
  console.log(foundedIds);
  if (button?.classList.contains("active")) {
    if (foundedIds.includes(button.dataset.id)) return;

    clickedButton = null;
    button.classList.remove("active");
    return;
  }
  button.classList.add("active");

  if (clickedButton) {
    if (clickedButton.dataset.id === button.dataset.id) {
      foundedIds.push(clickedButton.dataset.id);
      clickedButton = null;
      if (foundedIds.length === 10) {
        const end = Date.now();
  
        localStorage.setItem("ball", foundedIds.length);
        localStorage.setItem("time", end - beginning);
        window.location = "/";
      }
      return;
    } else {
      clickedButton.classList.remove("active");
      button.classList.remove("active");
    }
    clickedButton = null;
    return;
  }
  clickedButton = button;
};

startEl.onclick = (e) => {
  console.dir(e.target.localName);
  if (e.target.localName === "button") {
    startEl.classList.remove("active");
  }

  setInterval(() => {
    if (foundedIds.length === lastFoundedIds) {
      const end = Date.now();

      localStorage.setItem("ball", foundedIds.length);
      localStorage.setItem("time", end - beginning);
      window.location = "/";
    }
    lastFoundedIds = foundedIds.length;
  }, 12000);
};

displayButtons();
