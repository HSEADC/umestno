import imgSanta from '../images/A_test_image_result_outline_test9.png'

// база данных: вопросы и ответы
const stages = [
  {
    question: [
      'При встрече с Дедом Морозом важно:'
    ],
    answers: [
      { text: 'пожать ему руку', count: 1 },
      {
        text: 'кинуть в него пачку M&M',
        count: 0
      },
      {
        text: 'улыбнуться и поздороваться',
        count: 1
      },
      { text: 'дать пять', count: 0 }
    ]
  },
  {
    question: [
      'Как правильно обращаться к Деду Морозу?'
    ],
    answers: [
      { text: 'назвать его по имени', count: 0 },
      {
        text: 'назвать его «мистер Клаус» или «мистер Мороз»',
        count: 1
      },
      {
        text: 'назвать его Гринч',
        count: 0
      },
      {
        text: 'назвать его «Санта» или дедушка', 
        count: 0
      }
    ]
  },
  {
    question: ['При встрече с Санта-Клаусом вежливо терпеливо ждать в очереди?'],
    answers: [
      { text: 'нет, я должен(а) быть самым(ой) первым(ой) на колени к Санте!!', count: 0 },
      { text: 'конечно, ведь дети же стоят, и я постою', count: 1 },
      { text: 'а куда очередь?', count: 0 },
      {
        text: 'он в моей квартире, откуда тут очередь...',
        count: 0
      }
    ]
  },
  {
    question: [
      'Как выразить свои пожелания Деду Морозу?'
    ],
    answers: [
      { text: 'написать письмо заранее и отправить по почте', count: 1 },
      {
        text: '«вы кто такой? я вас не звал, идите..»', 
        count: 0
      },
      {
        text: '«где мой Райан Гослинг?»',
        count: 0
      },
      {
        text: 'громко заявить о своих мечтах у него на коленях',
        count: 1
      }
    ]
  },
  {
    question: [
      'Стоит ли благодарить Деда Мороза после встречи с ним?'
    ],
    answers: [
      { text: 'его уже арестовали за незаконное проникновение в мой дом', count: 0 },
      { text: 'это не обязательно', count: 0 },
      {
        text: 'только если мне подарят Райна Гослинга',
        count: 0
      },
      {
        text: 'обязательно',
        count: 1
      }
    ]
  }
]

// база данных: результаты
const resultTable = [
  {
    preview:
      'Да вы настоящий эльф! Вы не раз попадали в список хороших людей!',
    text: 'Вы самый добрый человек, и это понравилось Деду Морозу! Наши поздравления: вы практически эксперт вэтой области, надеемся, что мы остались у вас на хорошем счету, и вы расскажете дедушке, что мы тоже хорошо себя вели в этом году!'
  },
  {
    preview: 'Похоже на то, что кто-то кинул конфеты в дедушку..',
    text: 'Фух! Еще немного и вы бы попали в список самых плохих мальчиков и девочек! Совершенствуйте ваши знания с нами в разделе «карточки», и в следующем году вы с легкостью будете в правильном списке!'
  },
  {
    preview:
      'Да вы самый настоящий Гринч! Вы украли у нас Рождество и Новый Год!',
    text: 'Вы стараетесь быть лучше, однако в этом году умудрились опять попасть в список плохишей. Совершенствуйте ваши знания с нами в разделе «карточки», и в следующем году вы с легкостью будете в правильном списке!'
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

  imageResult.innerHTML = `<img src=${imgSanta}>`

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
