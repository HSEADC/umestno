const heading = document.querySelector('.A_heading.animation p');
const texts = ["про тебя", "про тебя", "про нас", "про всех"];
let i = 0;

setInterval(() => {
  heading.textContent = texts[i++];
  if (i >= texts.length) {
    i = 0; 
  }
}, 1500);

const tagText = document.querySelector('.A_tagText p');
const mainNumber = document.querySelector('.A_mainNumber p');

const tagTexts = [
  "светский этикет",
  "деловой этикет",
  "столовый этикет",
  "цифровой этикет",
  "речевой этикет",
  "дресс-код",
  "антиэтикет"
];

let j = 0; // Новый счетчик для новой анимации

setInterval(() => {
  tagText.textContent = tagTexts[j];
  mainNumber.textContent = j + 1; 

  j = (j + 1) % tagTexts.length;
}, 1500);