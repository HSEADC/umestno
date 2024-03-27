import imgFruits from '../images/A_test_image_result_outline_test4.png'

// база данных: вопросы и ответы
const stages = [
  {
    question: [
      'При употреблении сочных фруктов следует:'
    ],
    answers: [
      { text: 'взять их руками и съесть', count: 0 },
      {
        text: 'использовать нож и вилку, чтобы разрезать и съесть их',
        count: 1
      },
      {
        text: 'использовать только зубочистку, чтобы наколоть фрукт',
        count: 0
      },
      { text: 'использовать только вилку, чтобы съесть фркут', count: 1 }
    ]
  },
  {
    question: [
      'Что делать, если во время еды из фруктов вытек сок?'
    ],
    answers: [
      { text: 'протереть его рукой и облизнуть руку', count: 0 },
      {
        text: 'вытереть сок салфеткой',
        count: 1
      },
      {
        text: 'извиниться и уйти мыть руки',
        count: 1
      },
      {
        text: 'не обращать внимание и продолжать есть',
        count: 0
      }
    ]
  },
  {
    question: ['Правда ли, что при употреблении сочных фруктов допустимо прихлебывать сок?'],
    answers: [
      { text: 'конечно, чем сочнее, тем звонче должен быть звук', count: 0 },
      { text: 'допустимо слегка причмокивать', count: 0 },
      { text: 'конечно нет! запритесь в туалете и ешьте свои фрукты там!', count: 0 },
      {
        text: 'не желательно, но и не критично, если вы слегка прихлебываете',
        count: 1
      }
    ]
  },
  {
    question: [
      'Как следует избавляться от семян и косточек при употреблении в пищу сочных фруктов?'
    ],
    answers: [
      { text: 'положите их на край тарелки', count: 1 },
      {
        text: 'проглотите их вместе с фруктами',
        count: 0
      },
      {
        text: 'используйте отдельную тарелку для семян и косточек',
        count: 0
      },
      {
        text: 'осторожно выплюньте их в салфетку',
        count: 1
      }
    ]
  },
  {
    question: [
      'Куда следует поставить посуду после того, как вы поели сочные фрукты?'
    ],
    answers: [
      { text: 'помойте ее и уберите на место', count: 1 },
      { text: 'попроите хозяина или официанта убрать ее', count: 0 },
      {
        text: 'выбросите тарелку в окно',
        count: 0
      },
      {
        text: 'оставьте ее на столе',
        count: 0
      }
    ]
  }
]

// база данных: результаты
const resultTable = [
  {
    preview:
      'Вы просто великолепный хозяин! Попробуйте как-нибудь устроить приём!',
    text: 'Ваши друзья просто обожают собираться у вас в гостях, чтобы почувствовать атмосферу любви и уюта. О ваших посиделках уже давно ходят легенды, ваши друзья, вероятно, уже рассказали своим знакомым о том, какой вы прекрасный организатор посиделок!'
  },
  {
    preview: 'Вы хороший хозяин! Продолжайте совершенствоваться!',
    text: 'Вы уже достаточно знаете о том, как принимать гостей, но вам нужно ещё немного потрудиться, чтобы быть профи. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
  },
  {
    preview:
      'Гости к вам не спешат... Вы хороший человек, но не очень гостеприимный',
    text: 'Вас, вероятно, очень любят ваши друзья, семья и знакомые. Но у вас не хватает должных знаний в области этикета, чтобы искуссно ориентироваться при приеме гостей в вашем доме. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!'
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

  imageResult.innerHTML = `<img src=${imgFruits}>`

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
