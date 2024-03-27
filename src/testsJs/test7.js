import imgGlasses from '../images/A_test_image_result_outline_test7.png'

// база данных: вопросы и ответы
const stages = [
  {
    question: [
      'Где по правилам дресс-кода уместно носить очки?'
    ],
    answers: [
      { text: 'всегда и везде', count: 0 },
      {
        text: 'их можно носить только зимой \ летом',
        count: 0
      },
      {
        text: 'при погоне от папарацци',
        count: 1
      },
      { text: 'только на улице, когда светит солнце', count: 1 }
    ]
  },
  {
    question: [
      'Каково общее правило ношения очков на официальном ужине?'
    ],
    answers: [
      { text: 'не снимайте очки на протяжении всего приема пищи', count: 0 },
      {
        text: 'снимите их и положите рядом с тарелкой',
        count: 0
      },
      {
        text: 'оденьте их на официанта ',
        count: 0
      },
      {
        text: 'снимите их и уберите в сумочку',
        count: 1
      }
    ]
  },
  {
    question: ['Когда в профессиональной обстановке следует снимать очки?'],
    answers: [
      { text: 'носите их всегда, это круто', count: 0 },
      { text: 'снимайте их как только зайдете в помещение', count: 1 },
      { text: 'в профессиональной обстановке запрещены очки', count: 0 },
      {
        text: 'снимайте их только при встрече с новыми людьми',
        count: 0
      }
    ]
  },
  {
    question: [
      'Как следует поступить в отношении очков при посещении торжественного мероприятия?'
    ],
    answers: [
      { text: 'стоит снять очки, только если на вас направлена камера', count: 0 },
      {
        text: 'не снимать их, потому что вы на спец задании',
        count: 0
      },
      {
        text: 'необходимо снять очки при входе на мероприятие',
        count: 1
      },
      {
        text: 'не снимать их весь вечер, вы скрываетесь от папарацци',
        count: 0
      }
    ]
  },
  {
    question: [
      'Каковы правила ношения очков на свадебной церемонии?'
    ],
    answers: [
      { text: 'снимайте их как только начнется свадьба', count: 1 },
      { text: 'я вообще-то от папарацци прячусь, ау', count: 0 },
      {
        text: 'снимайте очки, если на вас направлена камера',
        count: 0
      },
      {
        text: 'нельзя снимать очки, потому что так требуют новобрачные',
        count: 1
      }
    ]
  }
]

// база данных: результаты
const resultTable = [
  {
    preview:
      'Да вы настоящий профессионал своего дела!',
    text: 'Мы поражены вашими результатами! Вы не только знаток этикета, но и профи в вопросах моды! Можете запускать свой курс «Очки для всевидящего»! Нам кажется, что вы сможете приуспеть в этом больше, чем мы!'
  },
  {
    preview: 'Похоже на то, что все-таки вы не сняли ваши очки на приеме..',
    text: 'Вы уже на верном пути, но вам нужно немного лучше узнать о правилах, которые касаются дресс-кода! Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
  },
  {
    preview:
      'Вероятно, вы не сняли очки при входе на борт самолета...',
    text: 'Вы на верном пути, однако ваших знаний хватит лишь на то, чтобы не надеть очки ночью. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
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

  imageResult.innerHTML = `<img src=${imgGlasses}>`

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
