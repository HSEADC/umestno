/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var heading = document.querySelector('.A_heading.animation p');
var texts = ["про тебя", "про тебя", "про нас", "про всех"];
var i = 0;
setInterval(function () {
  heading.textContent = texts[i++];

  if (i >= texts.length) {
    i = 0;
  }
}, 1500);
var tagText = document.querySelector('.A_tagText p');
var mainNumber = document.querySelector('.A_mainNumber p');
var tagTexts = ["светский этикет", "деловой этикет", "столовый этикет", "цифровой этикет", "речевой этикет", "дресс-код", "антиэтикет"];
var j = 0; // Новый счетчик для новой анимации

setInterval(function () {
  tagText.textContent = tagTexts[j];
  mainNumber.textContent = j + 1;
  j = (j + 1) % tagTexts.length;
}, 1500);
/******/ })()
;