/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function () {
  var alcoCheckbox = document.getElementById('alco');
  var noneAlcoCheckbox = document.getElementById('none_alco');
  var cards = document.querySelectorAll('#S_ShortCardBlock .O_CardForLearningWithHastag:not(.M_BlockSeparator)');
  alcoCheckbox.addEventListener('click', function () {
    filterCards('alco');
  });
  noneAlcoCheckbox.addEventListener('click', function () {
    filterCards('non_alco');
  });

  function filterCards(tag) {
    cards.forEach(function (card) {
      var cardTag = card.getAttribute('data-tage');

      if (tag === 'alco' && cardTag === 'alco' || tag === 'non_alco' && cardTag === 'none_alco') {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  alcoCheckbox.addEventListener('change', function () {
    if (alcoCheckbox.checked && noneAlcoCheckbox.checked) {
      cards.forEach(function (card) {
        card.style.display = 'flex';
      });
    } else if (!alcoCheckbox.checked && !noneAlcoCheckbox.checked) {
      cards.forEach(function (card) {
        card.style.display = 'flex';
      });
    }
  });
  noneAlcoCheckbox.addEventListener('change', function () {
    if (noneAlcoCheckbox.checked && alcoCheckbox.checked) {
      cards.forEach(function (card) {
        card.style.display = 'flex';
      });
    } else if (!noneAlcoCheckbox.checked && !alcoCheckbox.checked) {
      cards.forEach(function (card) {
        card.style.display = 'flex';
      });
    }
  });
});
/******/ })()
;