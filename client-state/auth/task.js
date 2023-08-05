let formD = document.getElementById('signin__form');
let formActive = document.getElementById('signin');
let welcomeForm = document.getElementById('welcome');
let userId = document.getElementById('user_id');

if (localStorage.getItem('id')) {
  userId.textContent = localStorage.getItem('id');
  formActive.classList.remove('signin_active');
  welcomeForm.classList.add('welcome_active');
}

//Очистить localStorage:
//localStorage.removeItem('id');

formD.addEventListener('submit', function(e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === xhr.DONE && xhr.status == 201 && JSON.parse(xhr.responseText).success) {
      userId.textContent = JSON.parse(xhr.responseText).user_id;
      localStorage.setItem('id', userId.textContent);
      formActive.classList.remove('signin_active');
      welcomeForm.classList.add('welcome_active');
    }
    if((xhr.readyState === xhr.DONE && xhr.status == 400) || (xhr.readyState === xhr.DONE && !JSON.parse(xhr.responseText).success)) {
      alert('Неверные логин/пароль');
    }
  })
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  const formData = new FormData(formD);
  xhr.send(formData);
});