
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    let result = (JSON.parse(xhr.responseText)).response.Valute;
    let loaderEl = document.getElementById('loader');
    let itemEl = document.getElementById('items');
    loaderEl.classList.remove('loader_active');
    for (el in result) {
        let content = '<div class="item"><div class="item"><div class="item__code">' + result[el]['CharCode'] + '</div> <div class="item__value">' + result[el]['Value'] + '</div> <div class="item__currency"> руб.</div></div>';
        itemEl.insertAdjacentHTML('beforeEnd', '<br>' + content);
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();