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

;// CONCATENATED MODULE: ./src/images/A_test_image_result_outline_test9.png
const A_test_image_result_outline_test9_namespaceObject = __webpack_require__.p + "images/14789e8acb08f63bf2e9.png";
;// CONCATENATED MODULE: ./src/testsJs/tests.js
var currentStage = 0;
var resultCount = 0;

function initTest(stages) {
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


function chooseAnswer(stages, resultTable, imgResult) {
  var checkboxes = document.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      //если кликнут чекбокс
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count); //добавляем баллы

        setTimeout(function () {
          updateStage(stages, resultTable, imgResult); //меняем вопросы

          checkbox.checked = false; // "отжимаем чекбокс"
        }, 400);
      }
    });
  });
} //пока не закончатся вопросы в списке


function updateStage(stages, resultTable, imgResult) {
  if (currentStage + 1 < stages.length) {
    currentStage++; //повышаем счётчик вопросов

    initTest(stages); // выводим новые вопросы-ответы
  } else {
    showResult(resultTable, imgResult); // показываем результат
  }
}

function showResult(resultTable, imgResult) {
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
  imageResult.innerHTML = "<img src=".concat(imgResult, ">");
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


;// CONCATENATED MODULE: ./src/testsJs/test9.js

 // база данных: вопросы и ответы

var stages = [{
  question: ['При встрече с Дедом Морозом важно:'],
  answers: [{
    text: 'пожать ему руку',
    count: 1
  }, {
    text: 'кинуть в него пачку M&M',
    count: 0
  }, {
    text: 'улыбнуться и поздороваться',
    count: 1
  }, {
    text: 'дать пять',
    count: 0
  }]
}, {
  question: ['Как правильно обращаться к Деду Морозу?'],
  answers: [{
    text: 'назвать его по имени',
    count: 0
  }, {
    text: 'назвать его «мистер Клаус» или «мистер Мороз»',
    count: 1
  }, {
    text: 'назвать его Гринч',
    count: 0
  }, {
    text: 'назвать его «Санта» или дедушка',
    count: 0
  }]
}, {
  question: ['При встрече с Санта-Клаусом вежливо терпеливо ждать в очереди?'],
  answers: [{
    text: 'нет, я должен(а) быть самым(ой) первым(ой) на колени к Санте!!',
    count: 0
  }, {
    text: 'конечно, ведь дети же стоят, и я постою',
    count: 1
  }, {
    text: 'а куда очередь?',
    count: 0
  }, {
    text: 'он в моей квартире, откуда тут очередь...',
    count: 0
  }]
}, {
  question: ['Как выразить свои пожелания Деду Морозу?'],
  answers: [{
    text: 'написать письмо заранее и отправить по почте',
    count: 1
  }, {
    text: '«вы кто такой? я вас не звал, идите..»',
    count: 0
  }, {
    text: '«где мой Райан Гослинг?»',
    count: 0
  }, {
    text: 'громко заявить о своих мечтах у него на коленях',
    count: 1
  }]
}, {
  question: ['Стоит ли благодарить Деда Мороза после встречи с ним?'],
  answers: [{
    text: 'его уже арестовали за незаконное проникновение в мой дом',
    count: 0
  }, {
    text: 'это не обязательно',
    count: 0
  }, {
    text: 'только если мне подарят Райна Гослинга',
    count: 0
  }, {
    text: 'обязательно',
    count: 1
  }]
}]; // база данных: результаты

var resultTable = [{
  preview: 'Да&nbsp;вы&nbsp;настоящий эльф! Вы&nbsp;не&nbsp;раз попадали в&nbsp;список хороших людей!',
  text: 'Вы&nbsp;самый добрый человек, и&nbsp;это понравилось Деду Морозу! Наши поздравления: вы&nbsp;практически эксперт вэтой области, надеемся, что мы&nbsp;остались у&nbsp;вас на&nbsp;хорошем счету, и&nbsp;вы&nbsp;расскажете дедушке, что мы&nbsp;тоже хорошо себя вели в&nbsp;этом году!'
}, {
  preview: 'Похоже на&nbsp;то, что кто-то кинул конфеты в&nbsp;дедушку..',
  text: 'Фух! Еще немного и&nbsp;вы&nbsp;бы попали в&nbsp;список самых плохих мальчиков и&nbsp;девочек! Совершенствуйте ваши знания с&nbsp;нами в&nbsp;разделе &laquo;карточки&raquo;, и&nbsp;в&nbsp;следующем году вы&nbsp;с&nbsp;легкостью будете в&nbsp;правильном списке!'
}, {
  preview: 'Да&nbsp;вы&nbsp;самый настоящий Гринч! Вы&nbsp;украли у&nbsp;нас Рождество и&nbsp;Новый Год!',
  text: 'Вы&nbsp;стараетесь быть лучше, однако в&nbsp;этом году умудрились опять попасть в&nbsp;список плохишей. Совершенствуйте ваши знания с&nbsp;нами в&nbsp;разделе &laquo;карточки&raquo;, и&nbsp;в&nbsp;следующем году вы&nbsp;с&nbsp;легкостью будете в&nbsp;правильном списке!'
}]; //функции

document.addEventListener('DOMContentLoaded', function () {
  initTest(stages);
  chooseAnswer(stages, resultTable, A_test_image_result_outline_test9_namespaceObject);
});
/******/ })()
;