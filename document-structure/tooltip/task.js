let linkHasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

// Функция создания подсказки:
function tooltipLoader(element) {
  let tooltipAtr = element.getAttribute('title');
  elCoor = element.getBoundingClientRect();
  element.insertAdjacentHTML('afterEnd', '<div></div>');
  element.nextElementSibling.textContent = tooltipAtr;
  element.nextElementSibling.classList.add('tooltip');
  element.nextElementSibling.classList.add('tooltip_active');
  element.nextElementSibling.style = "position: absolute; left: " + elCoor.left + "px; top: " + (elCoor.top + 20 + window.pageYOffset) + "px;";
}

//Основной код:
linkHasTooltip.forEach(function(el) {
    el.addEventListener('click', function(ev) {
      if(el.nextElementSibling === null) {
        tooltipLoader(el);
      } else {
          if(el.nextElementSibling.classList.contains('tooltip_active') && el.nextElementSibling.classList.contains('tooltip')) {
            el.nextElementSibling.classList.remove('tooltip_active');
          } else if(!el.nextElementSibling.classList.contains('tooltip_active') && el.nextElementSibling.classList.contains('tooltip')) {
              el.nextElementSibling.classList.add('tooltip_active');
          } else if(!el.nextElementSibling.classList.contains('tooltip')) {
            tooltipLoader(el);
          }
      }
      ev.preventDefault();
    });
});