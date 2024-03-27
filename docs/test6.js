/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/images/A_test_image_result_outline_test6.png
const A_test_image_result_outline_test6_namespaceObject = __webpack_require__.p + "images/9a1371b52ccfb3dcaf60.png";
;// CONCATENATED MODULE: ./src/testsJs/test6.js
 // база данных: вопросы и ответы

var stages = [{
  question: ['Какие из следующих продуктов обычно можно есть руками?'],
  answers: [{
    text: 'суп',
    count: 0
  }, {
    text: 'фалафель',
    count: 0
  }, {
    text: 'салат',
    count: 0
  }, {
    text: 'пиццу',
    count: 1
  }]
}, {
  question: ['Как правильно есть гамбургер в ресторане быстрого питания?'],
  answers: [{
    text: 'использовать вилку и нож',
    count: 0
  }, {
    text: 'завернуть в салфетку и есть',
    count: 1
  }, {
    text: 'не трогать руками, есть только ртом',
    count: 0
  }, {
    text: 'держать голыми руками',
    count: 0
  }]
}, {
  question: ['Что из перечисленного разрешено есть руками на официальном ужине?'],
  answers: [{
    text: 'пасту',
    count: 0
  }, {
    text: 'тушеные овощи',
    count: 0
  }, {
    text: 'хлебные палочки',
    count: 0
  }, {
    text: 'булочки',
    count: 1
  }]
}, {
  question: ['Как обычно едят суши?'],
  answers: [{
    text: 'едят руками',
    count: 0
  }, {
    text: 'используют вилку и нож',
    count: 0
  }, {
    text: 'используют палочки для еды',
    count: 1
  }, {
    text: 'накалывают на нож',
    count: 0
  }]
}, {
  question: ['Что обычно считается неприемлемым в ресторане высокой кухни, есть руками?'],
  answers: [{
    text: 'коктейль из криветок',
    count: 0
  }, {
    text: 'картофель фри',
    count: 0
  }, {
    text: 'курица гриль',
    count: 0
  }, {
    text: 'все выше перечисленное',
    count: 1
  }]
}]; // база данных: результаты

var resultTable = [{
  preview: 'Поздравляем! Пицца, бургеры, хот-доги — ваши лучшие друзья!',
  text: 'Вы можете спокойно есть не только уличную еду, но и блюда из мишленовских ресторанов! Наши поздравления: вы практически эксперт вэтой области, можете открывать своё кулинарное шоу и быть второй Юлией Высоцкой!'
}, {
  preview: 'Вы молодец! Но похоже вы всё-таки съели хлебную палочку... ',
  text: 'Вы уже на верном пути, но вам нужно немного лучше узнать о правилах, которые касаются столового этикета! Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
}, {
  preview: 'Вероятно, вы успели уже съесть салат руками на официальном обеде...',
  text: 'Вы на верном пути, однако ваших знаний хватит лишь на то, чтобы не начать пить суп из тарелки. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!!'
}]; //функции

document.addEventListener('DOMContentLoaded', function () {
  initTest();
  chooseAnswer();
});
var currentStage = 0;
var resultCount = 0;

function initTest() {
  var formNote = document.querySelector('.A_form_note');
  var question = document.querySelector('.A_test_subtitle');
  var answers = document.querySelectorAll('.Q_test_variant');
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  formNote.innerHTML = "\u0432\u043E\u043F\u0440\u043E\u0441 ".concat(currentStage + 1, "/").concat(stages.length); //выводим номер вопроса

  question.innerHTML = stages[currentStage].question; //выводим вопрос
  //проверяем количество html-тегов для ответов и выводим в них текст

  for (var i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text; //вывести текст ответа
  } //проверяем количество html-тегов c checkbox


  for (var _i = 0; _i < checkboxes.length; _i++) {
    checkboxes[_i].dataset.count = stages[currentStage].answers[_i].count; //добавить дата-атрибут с баллами
  }
} //при выборе ответа


function chooseAnswer() {
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      //если кликнут чекбокс
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count); //добавляем баллы

        setTimeout(function () {
          updateStage(); //меняем вопросы

          checkbox.checked = false; // "отжимаем чекбокс"
        }, 400);
      }
    });
  });
} //пока не закончатся вопросы в списке


function updateStage() {
  if (currentStage + 1 < stages.length) {
    currentStage++; //повышаем счётчик вопросов

    initTest(); // выводим новые вопросы-ответы
  } else {
    showResult(); // показываем результат
  }
}

function showResult() {
  document.querySelector('#S_TestHeading').remove();
  var block = document.querySelector('#S_TestBlock');
  block.innerHTML = '';
  block.classList.add('result');
  var textBlock = document.createElement('div');
  textBlock.classList.add('W_TestResult');
  var formNote = document.createElement('div');
  var title = document.createElement('div');
  var text = document.createElement('div');
  var imageResult = document.createElement('div');
  imageResult.innerHTML = "<img src=".concat(A_test_image_result_outline_test6_namespaceObject, ">");
  formNote.classList.add('A_resultItog');
  title.classList.add('A_resultTitle');
  text.classList.add('A_resultText');
  imageResult.classList.add('A_resultImage');
  textBlock.appendChild(formNote);
  textBlock.appendChild(title);
  textBlock.appendChild(text);
  block.appendChild(textBlock);
  block.appendChild(imageResult); //добавила класс result к элементам, чтобы можно было переписать стили для показа результат, не меняя структуру

  formNote.innerHTML = 'итог'; // switch работает как if с условиями ИЛИ, но проверяет только одно значение

  switch (resultCount) {
    case 5:
      // если результат равен 5
      title.innerHTML = resultTable[0].preview;
      text.innerHTML = resultTable[0].text;
      break;

    case 4: // если результат равен 4 или 3

    case 3:
      title.innerHTML = resultTable[1].preview;
      text.innerHTML = resultTable[1].text;
      break;

    case 2: // если результат равен 2, 1 или 0

    case 1:
    case 0:
      title.innerHTML = resultTable[2].preview;
      text.innerHTML = resultTable[2].text;
      break;
  }
}
/******/ })()
;