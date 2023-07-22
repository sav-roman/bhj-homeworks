let dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'))[0];
let dropdownList = Array.from(document.getElementsByClassName('dropdown__list'))[0];
function dropList() {
    dropdownList.classList.add('dropdown__list_active');
}
dropdownValue.addEventListener('click', dropList);

let dropdownItemArray = Array.from(document.getElementsByClassName('dropdown__link'));

function dropdownItem() {
    dropdownList.classList.remove('dropdown__list_active');
    dropdownValue.textContent = this.textContent;
    return false;
}

dropdownItemArray.forEach(function(el) {
  el.onclick = dropdownItem;
});