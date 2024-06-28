/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var burgerMenu = document.querySelector('.Q_burgerMenu');
var closeButton = document.querySelector('.Q_Close');
var mobileMenu = document.querySelector('.M_Menu');
var mobileMenuPoints = document.querySelectorAll('.M_mobileMenuPoint'); // Проверяем на мобильную версию

var isMobile = window.innerWidth <= 768; //  Измените 768 на границу между десктопом и мобильной версией, если нужно
//  Управление видимостью Q_burgerMenu и M_mobileMenuPoint

if (isMobile) {
  //  Изначально скрываем меню и элементы
  mobileMenu.style.display = 'none';
  closeButton.style.display = 'none';
  mobileMenuPoints.forEach(function (point) {
    return point.style.display = 'none';
  }); //  Открытие меню при клике на Q_burgerMenu

  burgerMenu.addEventListener('click', function () {
    mobileMenu.style.display = 'block';
    closeButton.style.display = 'block';
    mobileMenuPoints.forEach(function (point) {
      return point.style.display = 'block';
    });
  }); //  Закрытие меню при клике на Q_Close

  closeButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    closeButton.style.display = 'none';
    mobileMenuPoints.forEach(function (point) {
      return point.style.display = 'none';
    });
  });
} else {
  //  Скрываем  Q_burgerMenu и M_mobileMenuPoint  на  desktop
  burgerMenu.style.display = 'none';
  mobileMenuPoints.forEach(function (point) {
    return point.style.display = 'none';
  });
}
/******/ })()
;