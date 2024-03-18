const answerOptionButtons = document.getElementsByClassName('A_AnswerOption');

const stages = {
  stage1: [
    {
      question:['У вас в гостях оказались ваши друзья, а ваша квартира похожа на апокалипсис. Что же делать?!'],
      answers: [
        { text: 'отшутиться, что это устроил ваш домашний эльф', count:1 },
        { text: 'а почему, собственно, мы пришли ко мне, а не к тебе?', count:0 },
        { text: 'а почему я забыла про этот бардак? это ко мне домушник залез, явно искать что-то!!', count:0 },
        { text: 'ой, поможешь навести порядок?', count:1 },
      ],
    },
    {
      question: ['К вам неожиданно пришли гости, а у вас в холодильнике осталась только недопитая бутылка вина и баночка томатной пасты. Что бы вам сделать?'],
      answers: [
        { text: 'вместе пойдём в магазин, а что делать?', count:0 },
        { text: 'будем импровизировать вместе из того, что вообще осталось съедобного в доме, не хотите ли чаю?', count:1 },
        { text: 'попрошу их зайти в другой раз, потому что никак не смогу угостить их, нет, ну а что?', count:0 },
        { text: 'закажу что-нибудь готовое, а в это время мы сможем поговорить', count:1 },
      ],
    },
    {
      question: ['Вы заметили, что ваша компания заскучала. Ваши действия:'],
      answers: [
        { text: 'а хотите посмотреть мои детские фотографии?', count:1 },
        { text: 'будем молчать, если им так комфортно', count:0 },
        { text: 'ну, пришло время закругляться, все по домам?', count:0 },
        { text: 'расскажу забавную историю, чтобы заполнить неловкую паузу', count:1 },
      ],
    },
    {
      question:['Ваша тусовка в самом разгаре, но вы очень устали и хотите спать. Что бы сделали в этот момент?'],
      answers: [
        { text: 'пойду спать, а они пусть веселятся', count:0 },
        { text: 'громко сообщу о том, что у меня нет сил и хочу спать, так что «до свидания, гости, дорогие»', count:0 },
        { text: 'буду всё время жаловаться друзьям о том, как я хочу спать и вообще завтра рано вставать', count:0 },
        { text: 'останусь вместе с ними, это же разгар всего вечера, а вдруг они что-то интересное расскажут?', count:1 },
      ],
    },
    {
      question:['Наконец-то ваши гости решили, что это был классный вечер, но хорошего всегда понемногу, и решили расходиться. Вы в это время:'],
      answers: [
        { text: 'предложу посидеть ещё, всё же так классно прошло', count:1 },
        { text: 'я вообще-то сплю уже, ау', count:0 },
        { text: 'прощаясь с гостями, я скажу о том, как мне понравился вечер, вот бы ещё разок так собраться', count:1 },
        { text: 'буду зевать, провожая всех, ведь я просто без сил после такого дня', count:0 },
      ],
    },
  ],
};

const resultTable = [
  {
    preview: 'Вы просто великолепный хозяин! Попробуйте как-нибудь устроить приём!',
    text: 'Ваши друзья просто обожают собираться у вас в гостях, чтобы почувствовать атмосферу любви и уюта. О ваших посиделках уже давно ходят легенды, ваши друзья, вероятно, уже рассказали своим знакомым о том, какой вы прекрасный организатор посиделок!',
  },
  {
    preview: 'Вы хороший хозяин! Продолжайте совершенствоваться!',
    text: 'Вы уже достаточно знаете о том, как принимать гостей, но вам нужно ещё немного потрудиться, чтобы быть профи. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!',
  },
  {
    preview: 'Гости к вам не спешат... Вы хороший человек, но не очень гостеприимный',
    text: 'Вас, вероятно, очень любят ваши друзья, семья и знакомые. Но у вас не хватает должных знаний в области этикета, чтобы искуссно ориентироваться при приеме гостей в вашем доме. Совершенствуйте ваши знания с нами в разделе «карточки», и всё у вас получится!',
  },
];