import imgBareFoot from '../images/A_test_image_result_outline_test3.png'

// база данных: вопросы и ответы
const stages = [
  {
    question: [
      'В каком из следующих мест вообще допустимо снимать обувь?'
    ],
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
    preview:
      'Ура! Вы молодец, ваши знания не перестают нас удивлять!',
    text: 'Вы можете свободно маневрировать в просторах дресс-кода, которые касаются обуви! Наши поздравления: вы практически эксперт вэтой области, можете запускать свой курс «От тапочек до шпилек»!'
  },
  {
    preview: 'Похоже на то, что вы все-таки метнули тапочек в босса..',
    text: 'Вы уже на верном пути, но вам нужно немного лучше узнать о правилах, которые касаются дресс-кода! Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
  },
  {
    preview:
      'Вероятно, вы уже успели снять в библиотеке вашу обувь...',
    text: 'Вы на верном пути, однако ваших знаний хватит лишь на то, чтобы не забрести в мечеть в обуви. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
  }
]

//функции
document.addEventListener('DOMContentLoaded', () => {
  initTest()
  chooseAnswer()
})

let currentStage = 0
let resultCount = 0

function initTest() {
  const formNote = document.querySelector('.A_form_note')
  const question = document.querySelector('.A_test_subtitle')
  const answers = document.querySelectorAll('.Q_test_variant')
  const checkboxes = document.querySelectorAll('input[type=checkbox]')

  formNote.innerHTML = `вопрос ${currentStage + 1}/${stages.length}` //выводим номер вопроса
  question.innerHTML = stages[currentStage].question //выводим вопрос

  //проверяем количество html-тегов для ответов и выводим в них текст
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text //вывести текст ответа
  }

  //проверяем количество html-тегов c checkbox
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].dataset.count = stages[currentStage].answers[i].count //добавить дата-атрибут с баллами
  }
}

//при выборе ответа
function chooseAnswer() {
  const checkboxes = document.querySelectorAll('input[type=checkbox]')

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      //если кликнут чекбокс
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count) //добавляем баллы
        setTimeout(() => {
          updateStage() //меняем вопросы
          checkbox.checked = false // "отжимаем чекбокс"
        }, 400)
      }
    })
  })
}

//пока не закончатся вопросы в списке
function updateStage() {
  if (currentStage + 1 < stages.length) {
    currentStage++ //повышаем счётчик вопросов
    initTest() // выводим новые вопросы-ответы
  } else {
    showResult() // показываем результат
  }
}

function showResult() {
  document.querySelector('#S_TestHeading').remove()

  const block = document.querySelector('#S_TestBlock')
  block.innerHTML = ''
  block.classList.add('result')

  const textBlock = document.createElement('div')
  textBlock.classList.add('W_TestResult')

  const formNote = document.createElement('div')
  const title = document.createElement('div')
  const text = document.createElement('div')
  const imageResult = document.createElement('div')

  imageResult.innerHTML = `<img src=${imgBareFoot}>`

  formNote.classList.add('A_resultItog')
  title.classList.add('A_resultTitle')
  text.classList.add('A_resultText')
  imageResult.classList.add('A_resultImage')

  textBlock.appendChild(formNote)
  textBlock.appendChild(title)
  textBlock.appendChild(text)

  block.appendChild(textBlock)
  block.appendChild(imageResult)

  //добавила класс result к элементам, чтобы можно было переписать стили для показа результат, не меняя структуру

  formNote.innerHTML = 'итог'

  // switch работает как if с условиями ИЛИ, но проверяет только одно значение
  switch (resultCount) {
    case 5: // если результат равен 5
      title.innerHTML = resultTable[0].preview
      text.innerHTML = resultTable[0].text
      break

    case 4: // если результат равен 4 или 3
    case 3:
      title.innerHTML = resultTable[1].preview
      text.innerHTML = resultTable[1].text
      break

    case 2: // если результат равен 2, 1 или 0
    case 1:
    case 0:
      title.innerHTML = resultTable[2].preview
      text.innerHTML = resultTable[2].text
      break
  }
}
