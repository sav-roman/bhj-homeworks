let tab = Array.from(document.getElementsByClassName('tab'));
let tabContent = Array.from(document.getElementsByClassName('tab__content'));

tab.forEach(function(el) {
    function activateTab() {
      let indexTab = tab.findIndex(el => el.className == 'tab tab_active');
      let indextabContent = tabContent.findIndex(el => el.className == 'tab__content tab__content_active');
      tab[indexTab].classList.remove('tab_active');
      tabContent[indextabContent].classList.remove('tab__content_active');
      el.classList.add('tab_active');
      indexTab = tab.findIndex(el => el.className == 'tab tab_active');
      tabContent[indexTab].classList.add('tab__content_active');
    }
    el.onclick = activateTab;
});