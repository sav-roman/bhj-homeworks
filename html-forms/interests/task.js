let mainCheckbox = document.querySelector('.interests_main').children[0].children;
let mainCheckbox1 = mainCheckbox[0].querySelector('.interest__check');
let mainCheckbox2 = mainCheckbox[1].querySelector('.interest__check');

let checkboxArr1 = Array.from(mainCheckbox[0].querySelectorAll('.interest__check'));
let checkboxArr2 = Array.from(mainCheckbox[1].querySelectorAll('.interest__check'));

function forEach1(arr) {
    for(let i = 1; i < arr.length; i++) {
        arr[i].checked = !arr[i].checked;
    }
}

mainCheckbox1.addEventListener('change', function() {
    forEach1(checkboxArr1);
});

mainCheckbox2.addEventListener('change', function() {
    forEach1(checkboxArr2);
});