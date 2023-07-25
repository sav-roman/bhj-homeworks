//Индекс активного элемента:
function activeIndex() {
  const arrEl = Array.from(document.getElementsByClassName('book__control')[0].children);
  return arrEl.findIndex((el) => el.classList.contains('font-size_active'));
}

//Удаление активного элемента:
function deactivateEl(ind) {
  const arrEl = Array.from(document.getElementsByClassName('book__control')[0].children);
  arrEl[ind].classList.remove('font-size_active');
}

//Функция проверяет у элемента с id = 'book', наличие классов book_fs-big и book_fs-small и удаляет их
function bookClassDel() {
  let book = document.getElementById('book');
  if(book.classList.contains('book_fs-big')) {
    book.classList.remove('book_fs-big');
  }
  if(book.classList.contains('book_fs-small')) {
    book.classList.remove('book_fs-small');
  }
}

//Основная часть:
const arrEl = Array.from(document.getElementsByClassName('book__control')[0].children);
arrEl.forEach(function(el){
  el.addEventListener('click', function(event) {
    deactivateEl(activeIndex());
    el.classList.add('font-size_active');
    let atrEl = el.getAttribute('data-size');
    bookClassDel();
    if(atrEl == 'small') {
      book.classList.add('book_fs-small');
    } else if (atrEl == 'big') {
      book.classList.add('book_fs-big');
    }
    event.preventDefault();
  });
});