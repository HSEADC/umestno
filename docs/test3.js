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

;// CONCATENATED MODULE: ./src/images/A_test_image_result_outline_test3.png
const A_test_image_result_outline_test3_namespaceObject = __webpack_require__.p + "images/c5a25f906c6a85c0c804.png";
;// CONCATENATED MODULE: ./src/testsJs/test3.js
 // база данных: вопросы и ответы

var stages = [{
  question: ['В каком из следующих мест вообще допустимо снимать обувь?'],
  answers: [{
    text: 'публичные библиотеки',
    count: 0
  }, {
    text: 'официальные рестораны',
    count: 0
  }, {
    text: 'офис',
    count: 0
  }, {
    text: 'частные дома',
    count: 1
  }]
}, {
  question: ['Каков дресс-код в отношении обуви при посещении официального мероприятия?'],
  answers: [{
    text: 'разрешены сандалии или шлепанцы',
    count: 0
  }, {
    text: 'предпочтительны туфли с закрытым носком',
    count: 1
  }, {
    text: 'можно ходить босиком',
    count: 0
  }, {
    text: 'носите удобную повседневную обувь',
    count: 0
  }]
}, {
  question: ['Каков правильный этикет при входе в чей-то дом?'],
  answers: [{
    text: 'при входе сразу снимайте обувь',
    count: 1
  }, {
    text: 'не снимайте обувь, если не требуют',
    count: 0
  }, {
    text: 'снимите обувь и попросите гостевую обувь',
    count: 1
  }, {
    text: 'спросите хозяина, хотят ли они, чтобы вы сняли обувь',
    count: 0
  }]
}, {
  question: ['Каковы типичные ожидания от обуви на деловой встрече или в офисе?'],
  answers: [{
    text: 'если хотите, можете ходить в сланцах',
    count: 0
  }, {
    text: 'подходит профессиональная обувь с закрытым носком',
    count: 1
  }, {
    text: 'можно швырнуть тапочком в босса',
    count: 0
  }, {
    text: 'принято носить тапочки или босиком',
    count: 0
  }]
}, {
  question: ['Каково ожидаемое поведение в отношении обуви при посещении религиозного учреждения?'],
  answers: [{
    text: 'без обуви разрешено ходить только детям',
    count: 0
  }, {
    text: 'обувь всегда следует оставлять на входе',
    count: 0
  }, {
    text: 'перед входом в помещение обычно снимают обувь',
    count: 0
  }, {
    text: 'зависит от религиозного учереждения',
    count: 1
  }]
}]; // база данных: результаты

var resultTable = [{
  preview: 'Ура! Вы молодец, ваши знания не перестают нас удивлять!',
  text: 'Вы можете свободно маневрировать в просторах дресс-кода, которые касаются обуви! Наши поздравления: вы практически эксперт вэтой области, можете запускать свой курс «От тапочек до шпилек»!'
}, {
  preview: 'Похоже на то, что вы все-таки метнули тапочек в босса..',
  text: 'Вы уже на верном пути, но вам нужно немного лучше узнать о правилах, которые касаются дресс-кода! Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
}, {
  preview: 'Вероятно, вы уже успели снять в библиотеке вашу обувь...',
  text: 'Вы на верном пути, однако ваших знаний хватит лишь на то, чтобы не забрести в мечеть в обуви. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
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
  imageResult.innerHTML = "<img src=".concat(A_test_image_result_outline_test3_namespaceObject, ">");
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