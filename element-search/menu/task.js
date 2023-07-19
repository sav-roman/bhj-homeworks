let menuLink = Array.from(document.querySelectorAll('.menu__link'));
menuLink.forEach(function(el) {
  if(el.textContent == "О компании" || el.textContent == "Услуги") {
    el.onclick = function() {
      //=============================================
      menuLink.forEach(function(el) {
        if(el.textContent == "О компании" || el.textContent == "Услуги") {
          let menuElement1 = el.closest('li').children[1];
          menuElement1.classList.remove('menu_active');
        }  
      });
      //=============================================
      let menuElement = el.closest('li').children[1];
      menuElement.classList.add('menu_active');
      return false;
    }
  }
});