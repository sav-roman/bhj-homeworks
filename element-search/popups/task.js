let modalWin = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
modalWin.classList.add('modal_active');

let closeElement = Array.from(document.getElementsByClassName('modal__close'));
closeElement.forEach(function(el) {
  el.onclick = function() {
    modalWin.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
  }
})

let clickSuccess = Array.from(document.getElementsByClassName('show-success'));
clickSuccess.forEach(function(el) {
    el.onclick = function() {
      modalSuccess.classList.add('modal_active');
      modalWin.classList.remove('modal_active');
    }
  })