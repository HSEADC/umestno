import imgInterlocutor from '../images/A_test_image_result_outline_test5.png'

// база данных: вопросы и ответы
const stages = [
  {
    question: [
      'Как вам следует реагировать на разговор в большой компании?'
    ],
    answers: [
      { text: 'прервите их и переведите тему разговора в другое русло', count: 0 },
      {
        text: 'прервите их, чтобы немедленно поделиться своими мыслями',
        count: 0
      },
      {
        text: 'слушайте внимательно и вдумчиво отвечайте',
        count: 1
      },
      { text: 'подождите паузы, а затем поделитесь своим собственным опытом', count: 1 }
    ]
  },
  {
    question: [
      'Как лучше всего начать разговор с человеком, которого вы только что встретили?'
    ],
    answers: [
      { text: 'сразу задавайте личные вопросы для установления связи', count: 0 },
      {
        text: 'поделитесь длинным монологом о своих достижениях',
        count: 0
      },
      {
        text: 'начните беседу с общего разговора о погоде',
        count: 1
      },
      {
        text: 'задавайте неожиданные вопросы, чтобы показать интерес к другому человеку',
        count: 0
      }
    ]
  },
  {
    question: ['Что делать во время разговора, если вы не согласны с чьим-то мнением?'],
    answers: [
      { text: 'изложите свою точку зрения и вступите в схватку на смерть', count: 0 },
      { text: 'избегайте обсуждения этой темы вообще', count: 0 },
      { text: 'настаивайте на своей точке зрения и отвергайте чужую', count: 0 },
      {
        text: 'уважительно выскажите свою позицию и выслушайте собеседника',
        count: 1
      }
    ]
  },
  {
    question: [
      'Как следует справляться с тем, что вас прерывают во время разговора?'
    ],
    answers: [
      { text: 'перебейте его в ответ, да начнется бой', count: 0 },
      {
        text: 'подождите, когда выговоряться, и продолжите свою мысль',
        count: 1
      },
      {
        text: 'дайте человеку выговориться, это всё тянется из детства',
        count: 0
      },
      {
        text: 'укусите того, кто вас перебил',
        count: 0
      }
    ]
  },
  {
    question: [
      'Что считается правильным этикетом разговора при использовании электронных устройств?'
    ],
    answers: [
      { text: 'уделите все свое внимание разговору, держа устройства вне поля зрения', count: 1 },
      { text: 'выбросите свой телефон в окно на глазах у собеседника', count: 0 },
      {
        text: 'положите устройство на стол, чтобы получать уведомления',
        count: 0
      },
      {
        text: 'постоянно проверяйте сообщения и отвечайте на них во время разговора',
        count: 0
      }
    ]
  }
]

// база данных: результаты
const resultTable = [
  {
    preview:
      'Вы прекрасный собеседник!! Рядом с вами приятно находиться!',
    text: 'Вы можете свободно маневрировать в во всех темах для small talk! Наши поздравления: вы практически эксперт в этой области, можете запускать свой курс «Говорим обо всем и ни о чем: как лить воду с умным видом»!'
  },
  {
    preview: 'С вами всегда интересно, но вам не хватает базовых знаний!',
    text: 'Вы уже на верном пути, но вам нужно немного лучше узнать о правилах small talk, а так же расширить свой кругохор! Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
  },
  {
    preview:
      'Упс! Вы явно хороший человек, но не очень собеседник.. ',
    text: 'Вы на верном пути, однако ваших знаний хватит лишь на то, чтобы поздороваться с кем-то и обсудить сегодняшнюю погоду. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
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

  imageResult.innerHTML = `<img src=${imgInterlocutor}>`

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
