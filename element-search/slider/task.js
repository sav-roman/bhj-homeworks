//возвращает индекс активного элемента (картинка которого показывается) или -1 если его нет
function activItemNum() {
  let result = -1;
  const arrayItems = Array.from(document.getElementsByClassName('slider__item'));
  for(let i = 0; i < arrayItems.length; i++) {
    if (arrayItems[i].className  == 'slider__item slider__item_active') {
      result = i;
      return result;
    }
  }
  return result;
}
//=======================================
//активирует картинку по индексу
const images = Array.from(document.getElementsByClassName('slider__item'));
const sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
function activateItem(ind) {
  images[ind].classList.add('slider__item_active');
  sliderDot[ind].classList.add('slider__dot_active');
}
//=======================================
//деактивирует картинку по индексу
function deactivateItem(ind) {
  images[ind].classList.remove('slider__item_active');
  sliderDot[ind].classList.remove('slider__dot_active');
}
//=======================================
//основная логика
let sliderPrev = document.getElementsByClassName('slider__arrow_prev')[0];
let sliderNext = document.getElementsByClassName('slider__arrow_next')[0];

//кнопка вперед
sliderNext.onclick = function() {
  let index = activItemNum();
  if(index != -1) {
    deactivateItem(index);
  }
  if(index < images.length - 1) {
    activateItem(index + 1);
  }
  if(index >= images.length - 1) {
    activateItem(0);
  }
}

//кнопка назад
sliderPrev.onclick = function() {
  let index = activItemNum()
  if(index != -1) {
    deactivateItem(index);
  }
  if(index > 0) {
    activateItem(index - 1);
  }
  if(index <= 0) {
    activateItem(images.length - 1);
  }
}

//функция для кружка
sliderDot.forEach(function(el) {
  el.onclick = function() {
    let index = activItemNum();
    if(index != -1) {
      deactivateItem(index);
    }
    el.classList.add('slider__dot_active');
    images[sliderDot.indexOf(el)].classList.add('slider__item_active');
  }
})