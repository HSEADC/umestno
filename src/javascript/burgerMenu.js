const burgerMenu = document.querySelector('.Q_burgerMenu');
const closeButton = document.querySelector('.Q_Close');
const mobileMenu = document.querySelector('.M_Menu');

// Проверка на мобильную версию
const isMobile = window.innerWidth <= 768; //  Измените 768 на границу между десктопом и мобильной версией, если нужно

//  Управление видимостью Q_burgerMenu и M_mobileMenuPoint
if (isMobile) {
  //  Изначально скрываем меню и элементы
  mobileMenu.classList.add('hidden');
  closeButton.classList.add('hidden');
  document.querySelectorAll('.M_mobileMenuPoint').forEach(point => {
    point.classList.add('hidden');
  });

  //  Появление  Q_burgerMenu при загрузке страницы
  burgerMenu.classList.remove('hidden');

  //  Открытие меню при клике на Q_burgerMenu
  burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden'); 
    burgerMenu.classList.add('hidden');
    closeButton.classList.remove('hidden');
    document.querySelectorAll('.M_mobileMenuPoint').forEach(point => {
      point.classList.remove('hidden');
    });
  });

  //  Закрытие меню при клике на Q_Close
  closeButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    burgerMenu.classList.remove('hidden');
    closeButton.classList.add('hidden');
    document.querySelectorAll('.M_mobileMenuPoint').forEach(point => {
      point.classList.add('hidden');
    });
  });
} else {
  //  Скрываем  Q_burgerMenu и M_mobileMenuPoint  на  desktop
  burgerMenu.classList.add('hidden');
  document.querySelectorAll('.M_mobileMenuPoint').forEach(point => {
    point.classList.add('hidden');
  });
}