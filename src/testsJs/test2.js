import imgSit from '../images/A_test_image_result_outline_test2.png'

// база данных: вопросы и ответы
const stages = [
  {
    question: [
      'Где следует разместить почетного гостя во время официального званого обеда?'
    ],
    answers: [
      { text: 'справа от хозяина', count: 1 },
      {
        text: 'рядом с самым младшим гостем',
        count: 0
      },
      {
        text: 'в центре стола',
        count: 0
      },
      { text: 'близко к входу', 
        count: 0 }
    ]
  },
  {
    question: [
      'Где обычно должен сидеть организатор встречи на деловой встрече?'
    ],
    answers: [
      { text: 'на противоположном конце от главного гостя', count: 0 },
      {
        text: 'в центре стола',
        count: 0
      },
      {
        text: 'рядом с самым сладшим гостем',
        count: 0
      },
      {
        text: 'во главе стола',
        count: 1
      }
    ]
  },
  {
    question: ['Где должны сидеть родители жениха и невесты на свадьбе?'],
    answers: [
      { text: 'ближе всех к танцполу', count: 0 },
      { text: 'дальше всех от жениха и невесты', count: 0 },
      { text: 'за дргуим столом с остальными родственниками', count: 0 },
      {
        text: 'за соседним столом, рядом с новобрачными',
        count: 1
      }
    ]
  },
  {
    question: [
      'Куда в ресторане следует положить женскую сумочку во время еды?'
    ],
    answers: [
      { text: 'на отдельном крючке, где висит пальто', count: 0 },
      {
        text: 'на полу, рядом со столом',
        count: 1
      },
      {
        text: 'за спиной',
        count: 1
      },
      {
        text: 'на пустом стуле рядом с дамой',
        count: 0
      }
    ]
  },
  {
    question: [
      'При посещении театрального представления, где принято сидеть, если вы приходите раньше других?'
    ],
    answers: [
      { text: 'на заднем ряду, чтобы было больше места для ног', count: 0 },
      { text: 'на своем месте', count: 1 },
      {
        text: 'в середине ряда для удобства доступа',
        count: 0
      },
      {
        text: 'В первом ряду для лучшего обзора',
        count: 0
      }
    ]
  }
]

// база данных: результаты
const resultTable = [
  {
    preview:
      'Все с легкостью нашли свои места благодаря вашей рассадке!',
    text: 'Все легко нашли свои места, продемонстрировав свои знания правильного этикета и рассадки. Мероприятие прошло гладко, гости наслаждались вечером без какой-либо путаницы в рассадке.'
  },
  {
    preview: 'Произошла небольшая путаница, но все решилось без драк!',
    text: 'Несмотря на первоначальное замешательство, гости сотрудничали и уважительно решили дилемму рассадки. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!!'
  },
  {
    preview:
      'Ой-ой-ой, кто-то из гостей потерял своё место..',
    text: 'У некоторых гостей были проблемы с рассадкой мест, что привело к нескольким неловким моментам.  Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
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

  imageResult.innerHTML = `<img src=${imgSit}>`

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
