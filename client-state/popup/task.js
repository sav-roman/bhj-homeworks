let windowEl = document.getElementById('subscribe-modal');
let closeButt = document.querySelector('.modal__close_times');

//Функция полученя значения Cookie по имени:
function getCookie(name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(p => p.startsWith(name + '='));
  return cookie;
}

//Закрытие окна по клику:
closeButt.addEventListener('click', function() {
  windowEl.classList.remove('modal_active'); 
  document.cookie = 'openWindow' + '=' + encodeURIComponent('true');
});

//Очистить cookie:
//document.cookie = 'openWindow=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';

if(getCookie('openWindow')) {
  windowEl.classList.remove('modal_active');
} else {
  windowEl.classList.add('modal_active');
}