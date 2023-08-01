//Функция, на вход которой подается номер товара, его количество и ссылка на изображение, а она 
//добавляет его в корзину:
function addItem(dataId, itemValue, itemImg) {
  curItem = 0;
  arrIt = Array.from(document.querySelector('.cart__products').children);
  for(it of arrIt) {
    if(it.getAttribute('data-id') == dataId) {
      curItem = it;
    }
  }
  if (curItem) {
    //увеличиваем счетчик уже имеющегося элемента на itemValue
    curItem.querySelector('.cart__product-count').textContent = Number(curItem.querySelector('.cart__product-count').textContent.trim()) + Number(itemValue);
  } else {
    //добавляем разметку нового элемента
    let htmlEl = '<div class="cart__product" data-id="' + dataId + '"> <img class="cart__product-image" src="' + itemImg + '"> <div class="cart__product-count">' + itemValue + '</div> </div>';
    document.querySelector('.cart__products').insertAdjacentHTML("beforeEnd", htmlEl);
  }
}

//Функция увеличения товара на 1:
function plusOne(el) {
    el.previousElementSibling.textContent = Number(el.previousElementSibling.textContent.trim()) + 1;
}
//Функция уменьшения товара на 1:
function minusOne(el) {
    if(Number(el.nextElementSibling.textContent.trim()) > 1) {
      el.nextElementSibling.textContent = Number(el.nextElementSibling.textContent.trim()) - 1;
    }
}
//Основная часть:
  // +1:
let plusArr = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
plusArr.forEach(function(el) {
    el.addEventListener('click', function() {
        plusOne(el);
    })
})
  // -1:
let minusArr = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
minusArr.forEach(function(el) {
    el.addEventListener('click', function() {
        minusOne(el);
    })
})
  //Добавить в корзину:
let addProduct = Array.from(document.querySelectorAll('.product__add'));
addProduct.forEach(function(el) {
    el.addEventListener('click', function() {
        let itemValue = el.parentElement.querySelector('.product__quantity-value').textContent.trim();
        let itemImg = el.parentElement.parentElement.previousElementSibling.src;
        let dataId = el.parentElement.parentElement.parentElement.getAttribute('data-id');
        addItem(dataId, itemValue, itemImg);
    })
})
