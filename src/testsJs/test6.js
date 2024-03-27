import imgHandFree from '../images/A_test_image_result_outline_test6.png'

// база данных: вопросы и ответы
const stages = [
  {
    question: [
      'Какие из следующих продуктов обычно можно есть руками?'
    ],
    answers: [
      { text: 'суп', count: 0 },
      {
        text: 'фалафель',
        count: 0
      },
      {
        text: 'салат',
        count: 0
      },
      { text: 'пиццу', count: 1 }
    ]
  },
  {
    question: [
      'Как правильно есть гамбургер в ресторане быстрого питания?'
    ],
    answers: [
      { text: 'использовать вилку и нож', count: 0 },
      {
        text: 'завернуть в салфетку и есть',
        count: 1
      },
      {
        text: 'не трогать руками, есть только ртом',
        count: 0
      },
      {
        text: 'держать голыми руками',
        count: 0
      }
    ]
  },
  {
    question: ['Что из перечисленного разрешено есть руками на официальном ужине?'],
    answers: [
      { text: 'пасту', count: 0 },
      { text: 'тушеные овощи', count: 0 },
      { text: 'хлебные палочки', count: 0 },
      {
        text: 'булочки',
        count: 1
      }
    ]
  },
  {
    question: [
      'Как обычно едят суши?'
    ],
    answers: [
      { text: 'едят руками', count: 0 },
      {
        text: 'используют вилку и нож',
        count: 0
      },
      {
        text: 'используют палочки для еды',
        count: 1
      },
      {
        text: 'накалывают на нож',
        count: 0
      }
    ]
  },
  {
    question: [
      'Что обычно считается неприемлемым в ресторане высокой кухни, есть руками?'
    ],
    answers: [
      { text: 'коктейль из криветок', count: 0 },
      { text: 'картофель фри', count: 0 },
      {
        text: 'курица гриль',
        count: 0
      },
      {
        text: 'все выше перечисленное',
        count: 1
      }
    ]
  }
]

// база данных: результаты
const resultTable = [
  {
    preview:
      'Поздравляем! Пицца, бургеры, хот-доги — ваши лучшие друзья!',
    text: 'Вы можете спокойно есть не только уличную еду, но и блюда из мишленовских ресторанов! Наши поздравления: вы практически эксперт вэтой области, можете открывать своё кулинарное шоу и быть второй Юлией Высоцкой!'
  },
  {
    preview: 'Вы молодец! Но похоже вы всё-таки съели хлебную палочку... ',
    text: 'Вы уже на верном пути, но вам нужно немного лучше узнать о правилах, которые касаются столового этикета! Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
  },
  {
    preview:
      'Вероятно, вы успели уже съесть салат руками на официальном обеде...',
    text: 'Вы на верном пути, однако ваших знаний хватит лишь на то, чтобы не начать пить суп из тарелки. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!!'
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

  imageResult.innerHTML = `<img src=${imgHandFree}>`

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
