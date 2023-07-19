let sliderPrev = document.getElementsByClassName('slider__arrow_prev')[0];
let sliderNext = document.getElementsByClassName('slider__arrow_next')[0];
let images = Array.from(document.getElementsByClassName('slider__item'));
let sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
let currentNum = 0;


sliderPrev.onclick = function() {
  currentNum -= 1;
  if(currentNum >= 0) {
    images[currentNum].classList.add('slider__item_active');
    sliderDot[currentNum].classList.add('slider__dot_active');
    if(currentNum !== images.length - 1) {
      images[currentNum + 1].classList.remove('slider__item_active');
      sliderDot[currentNum + 1].classList.remove('slider__dot_active');
    }
  } 
  if (currentNum < 0) {
    currentNum = images.length - 1;
    images[0].classList.remove('slider__item_active');
    images[currentNum].classList.add('slider__item_active');
    sliderDot[0].classList.remove('slider__dot_active');
    sliderDot[currentNum].classList.add('slider__dot_active');
  }
}

sliderNext.onclick = function() {
  currentNum += 1; 
  if(currentNum !== images.length) {
    if(currentNum !== 0) {
      images[currentNum - 1].classList.remove('slider__item_active');
      sliderDot[currentNum - 1].classList.remove('slider__dot_active');
    }
    images[currentNum].classList.add('slider__item_active');
    sliderDot[currentNum].classList.add('slider__dot_active');
  }
  if(currentNum === images.length) {
    currentNum = 0;
    images[images.length - 1].classList.remove('slider__item_active');
    images[currentNum].classList.add('slider__item_active');
    sliderDot[images.length - 1].classList.remove('slider__dot_active');
    sliderDot[currentNum].classList.add('slider__dot_active');
  }
}

sliderDot.forEach(function(el) {
  el.onclick = function() {
    let dotActivElements = Array.from(document.getElementsByClassName('slider__dot_active'));
    dotActivElements.forEach(function(el1) {
      el1.classList.remove('slider__dot_active');
    })
    let imageActivElements = Array.from(document.getElementsByClassName('slider__item_active'));
    imageActivElements.forEach(function(el2) {
      el2.classList.remove('slider__item_active');
    })
    el.classList.add('slider__dot_active');
    images[sliderDot.indexOf(el)].classList.add('slider__item_active');
  }
})