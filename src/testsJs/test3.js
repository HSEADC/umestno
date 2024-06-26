import imgResult from '../images/A_test_image_result_outline_test3.png'
import { initTest, chooseAnswer } from './tests.js'
// база данных: вопросы и ответы
const stages = [
  {
    question: ['В каком из следующих мест вообще допустимо снимать обувь?'],
    answers: [
      { text: 'публичные библиотеки', count: 0 },
      {
        text: 'официальные рестораны',
        count: 0
      },
      {
        text: 'офис',
        count: 0
      },
      { text: 'частные дома', count: 1 }
    ]
  },
  {
    question: [
      'Каков дресс-код в отношении обуви при посещении официального мероприятия?'
    ],
    answers: [
      { text: 'разрешены сандалии или шлепанцы', count: 0 },
      {
        text: 'предпочтительны туфли с закрытым носком',
        count: 1
      },
      {
        text: 'можно ходить босиком',
        count: 0
      },
      {
        text: 'носите удобную повседневную обувь',
        count: 0
      }
    ]
  },
  {
    question: ['Каков правильный этикет при входе в чей-то дом?'],
    answers: [
      { text: 'при входе сразу снимайте обувь', count: 1 },
      { text: 'не снимайте обувь, если не требуют', count: 0 },
      { text: 'снимите обувь и попросите гостевую обувь', count: 1 },
      { text: 'спросите хозяина, хотят ли они, чтобы вы сняли обувь', count: 0 }
    ]
  },
  {
    question: [
      'Каковы типичные ожидания от обуви на деловой встрече или в офисе?'
    ],
    answers: [
      { text: 'если хотите, можете ходить в сланцах', count: 0 },
      {
        text: 'подходит профессиональная обувь с закрытым носком',
        count: 1
      },
      {
        text: 'можно швырнуть тапочком в босса',
        count: 0
      },
      {
        text: 'принято носить тапочки или босиком',
        count: 0
      }
    ]
  },
  {
    question: [
      'Каково ожидаемое поведение в отношении обуви при посещении религиозного учреждения?'
    ],
    answers: [
      { text: 'без обуви разрешено ходить только детям', count: 0 },
      { text: 'обувь всегда следует оставлять на входе', count: 0 },
      {
        text: 'перед входом в помещение обычно снимают обувь',
        count: 0
      },
      {
        text: 'зависит от религиозного учереждения',
        count: 1
      }
    ]
  }
]

// база данных: результаты
const resultTable = [
  {
    preview: 'Ура! Вы&nbsp;молодец, ваши знания не&nbsp;перестают нас удивлять!',
    text: 'Вы&nbsp;можете свободно маневрировать в&nbsp;просторах дресс-кода, которые касаются обуви! Наши поздравления: вы&nbsp;практически эксперт вэтой области, можете запускать свой курс &laquo;От&nbsp;тапочек до&nbsp;шпилек&raquo;!'
  },
  {
    preview: 'Похоже на&nbsp;то, что вы&nbsp;все-таки метнули тапочек в&nbsp;босса..',
    text: 'Вы&nbsp;уже на&nbsp;верном пути, но&nbsp;вам нужно немного лучше узнать о&nbsp;правилах, которые касаются дресс-кода! Совершенствуйте ваши знания с&nbsp;нами в&nbsp;разделе &laquo;карточки&raquo;, и&nbsp;всё у&nbsp;вас получится!'
  },
  {
    preview: 'Вероятно, вы&nbsp;уже успели снять в&nbsp;библиотеке вашу обувь...',
    text: 'Вы&nbsp;на&nbsp;верном пути, однако ваших знаний хватит лишь на&nbsp;то, чтобы не&nbsp;забрести в&nbsp;мечеть в&nbsp;обуви. Совершенствуйте ваши знания с&nbsp;нами в&nbsp;разделе &laquo;карточки&raquo;, и&nbsp;всё у&nbsp;вас получится!'
  }
]

//функции
document.addEventListener('DOMContentLoaded', () => {
  initTest(stages)
  chooseAnswer(stages, resultTable, imgResult)
})
