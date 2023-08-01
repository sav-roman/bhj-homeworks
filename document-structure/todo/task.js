//Функция добавления строки воода в список:
function addText(text) {
  let pernEl = document.getElementById('tasks__list');
  let htmlEl = '<div class="task"> <div class="task__title">' + text + '</div> <a href="#" class="task__remove">&times;</a></div>'
  pernEl.insertAdjacentHTML("beforeEnd", htmlEl);
  let closeLink = pernEl.lastElementChild.querySelector('a');
  closeLink.addEventListener('click', function(ev) {
    pernEl.lastElementChild.remove();
    ev.preventDefault();
  });
}

//Основная часть:
let enterString = document.getElementById('task__input');
let bottomEnter = document.getElementById('tasks__add');
let textValue;

enterString.addEventListener('input', function(e) {
  textValue = e.target.value;
});

enterString.addEventListener('keyup', function(e) {
  if(e.code === 'Enter') {
    if(enterString.value !== '') {
      addText(textValue);
      enterString.value = '';
      }
  }
});

bottomEnter.addEventListener('click', function() {
  addText(textValue);
});