function activePhrase() {
  let arr = Array.from(document.getElementsByClassName('rotator')[0].children);
  let index = arr.findIndex(function(el){
    return el.classList.contains('rotator__case_active');
  });
  return index;
}

function setPhrase(index) {
  let actIndex = activePhrase();
  Array.from(document.getElementsByClassName('rotator')[0].children)[actIndex].classList.remove('rotator__case_active');
  Array.from(document.getElementsByClassName('rotator')[0].children)[index].classList.add('rotator__case_active');
  Array.from(document.getElementsByClassName('rotator')[0].children)[index].style.color = colorSet();
}

function colorSet() {
    let activeInd = activePhrase();
    let activeEl = Array.from(document.getElementsByClassName('rotator')[0].children)[activeInd];
    return activeEl.getAttribute('data-color');
}

setInterval(function() {
  let activeInd = activePhrase();
  let arrLenth = Array.from(document.getElementsByClassName('rotator')[0].children).length;
  if (activeInd == arrLenth - 1) {
    //=============
    setPhrase(0);
  }
  if (activeInd < arrLenth - 1) {
    //=============
    setPhrase(activeInd + 1);
  }
}, 1000);