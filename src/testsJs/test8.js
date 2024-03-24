import imgPleasent from '../images/A_test_image_result_outline_test8.png'

// база данных: вопросы и ответы
const stages = [
  {
    question: [
      'Посещая какое-то мероприятие, вы замечаете, что кто-то одиноко стоит в углу. Что вы делаете?'
    ],
    answers: [
      { text: 'кину в него киви', count: 0 },
      {
        text: 'буду всячески надеяться, что к нему кто-то подойдёт',
        count: 0
      },
      {
        text: 'подойду к нему и предложу присоединиться к разговору',
        count: 1
      },
      { text: 'буду игнорировать, и продолжу общаться с друзьями', count: 0 }
    ]
  },
  {
    question: [
      'Что делать, если вы получили приглашение на день рождения друга, но не можете присутствовать?'
    ],
    answers: [
      { text: 'отвечу на предложение с вежливым отказом', count: 1 },
      {
        text: 'напишу другу в телеге, что «сори, бро, завал на работе»',
        count: 0
      },
      {
        text: 'проигнорирую приглашение и не отвечу на него',
        count: 0
      },
      {
        text: 'попрошу перенести празднование, ведь я не смогу присутствовать',
        count: 0
      }
    ]
  },
  {
    question: ['Что делать, если вы случайно пролили напиток на чью-то одежду на светском мероприятии?'],
    answers: [
      { text: 'искренне извиниться и предложить оплатить хим. чистку', count: 1 },
      { text: 'сделать вид, что это были не вы', count: 0 },
      { text: 'вывести все в шутку и извниться, предложив помощь с выведением пятна', count: 1 },
      {
        text: 'запаниковать, закричать и убежать',
        count: 0
      }
    ]
  },
  {
    question: [
      'Что делать, если вы встречаете человека и не можете вспомнить его имя?'
    ],
    answers: [
      { text: 'не называть его имя вообще', count: 0 },
      {
        text: 'называть его «кореш, брат, братишка, чел»',
        count: 0
      },
      {
        text: 'попросить кого-то назвать его имя',
        count: 1
      },
      {
        text: 'пошутить над своей забывчивостью и спросить его имя ещё раз',
        count: 1
      }
    ]
  },
  {
    question: [
      'Что делать, если во время разговора у вас зазвонил телефон?'
    ],
    answers: [
      { text: 'выкинуть свой телефон в окно', count: 0 },
      { text: 'игнорировать звонящего', count: 0 },
      {
        text: 'извиниться и ответить на звонок',
        count: 1
      },
      {
        text: 'моментально ответить на звонок',
        count: 0
      }
    ]
  }
]

// база данных: результаты
const resultTable = [
  {
    preview:
      'Вау, вы очень любезны — настоящая капибара в мире людей!',
    text: 'Вы настолько милы и любезны, что мы поражены! Вы сможете подружиться даже с тапочком! Проведите, пожалуйста, уроки вежливости для нашего копирайтера, а то мы боимся приходить в офис!!'
  },
  {
    preview: 'Похоже на то, что вы оставили без внимания застенчевого гостя..',
    text: 'Вы уже на верном пути, но вам нужно немного лучше узнать о правилах, которые касаются светского этикета и small talk! Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
  },
  {
    preview:
      'Ох-ох! Вы распугали всех своими штуками в радиусе киллометра!',
    text: 'Вы на верном пути, однако ваших знаний хватит лишь на то, чтобы не послать человека матом. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
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

  imageResult.innerHTML = `<img src=${imgPleasent}>`

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
