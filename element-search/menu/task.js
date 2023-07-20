let menuLink = Array.from(document.querySelectorAll('.menu__link'));

menuLink.forEach(function(el) {
  if((el.closest('li')).querySelector('a') && (el.closest('li')).querySelector('ul')) {
    el.onclick = function() {
      //=============================================
      menuLink.forEach(function(el1) {
        if((el1.closest('li')).querySelector('a') && (el1.closest('li')).querySelector('ul') && el1 != el) {
          let menuElement1 = el1.closest('li').children[1];
          menuElement1.classList.remove('menu_active');
        }
      });
      //=============================================
      let menuElement = el.closest('li').children[1];
      menuElement.classList.toggle('menu_active');
      return false;
    } 
  }
});