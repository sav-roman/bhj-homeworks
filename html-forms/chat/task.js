//Кнопка открытия чата:
let chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', function() {
  chatWidget.classList.add('chat-widget_active');
});

//Функция добавления сообщения пользователя
function messageClientAdd(message) {
    const messages = document.querySelector( '.chat-widget__messages' );
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${currentTime()}</div>
      <div class="message__text">
      ${message}
      </div>
    </div>
    `;
}

//Функция ответ робота:
function messageRobotAdd() {
    const messages = document.querySelector( '.chat-widget__messages' );
    //Варианты ответов:
    const robotMessages = [
      'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
      'Добрый день! До свидания!',
      'Где ваша совесть?',
      'Кто тут?',
      'Мы ничего не будем вам продавать!',
      'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    ];
    let rendomMessage = robotMessages[Math.floor(Math.random() * robotMessages.length)];
    //console.log(Math.floor(Math.random() * robotMessages.length));
    messages.innerHTML += `
    <div class="message">
        <div class="message__time">${currentTime()}</div>
        <div class="message__text">
        ${rendomMessage}
        </div>
    </div>
    `;
}

//Функция текущего времени в нужном формате:
function currentTime() {
  let data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();
  return hour + ':' + minutes;
}
//================================!!!!!!!!!!!!!!

//Чат, строка ввода:
let chatWidgetInput = document.getElementById('chat-widget__input');
let textValue;
chatWidgetInput.addEventListener('input', function(e) {
  textValue = e.target.value;
});

chatWidgetInput.addEventListener('keyup', function(e) {
  if(e.code === 'Enter') {
    if(chatWidgetInput.value !== '') {
      messageClientAdd(textValue);
      chatWidgetInput.value = '';
      messageRobotAdd();
    }
  }
});