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

;// CONCATENATED MODULE: ./src/images/A_test_image_result_outline_test5.png
const A_test_image_result_outline_test5_namespaceObject = __webpack_require__.p + "images/45ebf2e732bc4fccf7d1.png";
;// CONCATENATED MODULE: ./src/testsJs/test5.js
 // база данных: вопросы и ответы

var stages = [{
  question: ['Как вам следует реагировать на разговор в большой компании?'],
  answers: [{
    text: 'прервите их и переведите тему разговора в другое русло',
    count: 0
  }, {
    text: 'прервите их, чтобы немедленно поделиться своими мыслями',
    count: 0
  }, {
    text: 'слушайте внимательно и вдумчиво отвечайте',
    count: 1
  }, {
    text: 'подождите паузы, а затем поделитесь своим собственным опытом',
    count: 1
  }]
}, {
  question: ['Как лучше всего начать разговор с человеком, которого вы только что встретили?'],
  answers: [{
    text: 'сразу задавайте личные вопросы для установления связи',
    count: 0
  }, {
    text: 'поделитесь длинным монологом о своих достижениях',
    count: 0
  }, {
    text: 'начните беседу с общего разговора о погоде',
    count: 1
  }, {
    text: 'задавайте неожиданные вопросы, чтобы показать интерес к другому человеку',
    count: 0
  }]
}, {
  question: ['Что делать во время разговора, если вы не согласны с чьим-то мнением?'],
  answers: [{
    text: 'изложите свою точку зрения и вступите в схватку на смерть',
    count: 0
  }, {
    text: 'избегайте обсуждения этой темы вообще',
    count: 0
  }, {
    text: 'настаивайте на своей точке зрения и отвергайте чужую',
    count: 0
  }, {
    text: 'уважительно выскажите свою позицию и выслушайте собеседника',
    count: 1
  }]
}, {
  question: ['Как следует справляться с тем, что вас прерывают во время разговора?'],
  answers: [{
    text: 'перебейте его в ответ, да начнется бой',
    count: 0
  }, {
    text: 'подождите, когда выговоряться, и продолжите свою мысль',
    count: 1
  }, {
    text: 'дайте человеку выговориться, это всё тянется из детства',
    count: 0
  }, {
    text: 'укусите того, кто вас перебил',
    count: 0
  }]
}, {
  question: ['Что считается правильным этикетом разговора при использовании электронных устройств?'],
  answers: [{
    text: 'уделите все свое внимание разговору, держа устройства вне поля зрения',
    count: 1
  }, {
    text: 'выбросите свой телефон в окно на глазах у собеседника',
    count: 0
  }, {
    text: 'положите устройство на стол, чтобы получать уведомления',
    count: 0
  }, {
    text: 'постоянно проверяйте сообщения и отвечайте на них во время разговора',
    count: 0
  }]
}]; // база данных: результаты

var resultTable = [{
  preview: 'Вы прекрасный собеседник!! Рядом с вами приятно находиться!',
  text: 'Вы можете свободно маневрировать в во всех темах для small talk! Наши поздравления: вы практически эксперт в этой области, можете запускать свой курс «Говорим обо всем и ни о чем: как лить воду с умным видом»!'
}, {
  preview: 'С вами всегда интересно, но вам не хватает базовых знаний!',
  text: 'Вы уже на верном пути, но вам нужно немного лучше узнать о правилах small talk, а так же расширить свой кругохор! Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
}, {
  preview: 'Упс! Вы явно хороший человек, но не очень собеседник.. ',
  text: 'Вы на верном пути, однако ваших знаний хватит лишь на то, чтобы поздороваться с кем-то и обсудить сегодняшнюю погоду. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
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
  imageResult.innerHTML = "<img src=".concat(A_test_image_result_outline_test5_namespaceObject, ">");
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