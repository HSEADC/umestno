const burgerMenu = document.querySelector('.Q_burgerMenu');
const closeButton = document.querySelector('.Q_Close');
const mobileMenu = document.querySelector('.M_Menu');
const mobileMenuPoints = document.querySelectorAll('.M_mobileMenuPoint');

// Проверяем на мобильную версию
const isMobile = window.innerWidth <= 768; //  Измените 768 на границу между десктопом и мобильной версией, если нужно

//  Управление видимостью Q_burgerMenu и M_mobileMenuPoint
if (isMobile) {
  //  Изначально скрываем меню и элементы
  mobileMenu.style.display = 'none';
  closeButton.style.display = 'none';
  mobileMenuPoints.forEach(point => point.style.display = 'none');

  //  Открытие меню при клике на Q_burgerMenu
  burgerMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'block'; 
    closeButton.style.display = 'block';
    mobileMenuPoints.forEach(point => point.style.display = 'block');
  });

  //  Закрытие меню при клике на Q_Close
  closeButton.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    closeButton.style.display = 'none';
    mobileMenuPoints.forEach(point => point.style.display = 'none');
  });
} else {
  //  Скрываем  Q_burgerMenu и M_mobileMenuPoint  на  desktop
  burgerMenu.style.display = 'none';
  mobileMenuPoints.forEach(point => point.style.display = 'none');
}