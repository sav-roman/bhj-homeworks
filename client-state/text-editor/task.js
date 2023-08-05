let editor = document.getElementById('editor');
let button = document.getElementById('button');
editor.value = localStorage.getItem('editor');
editor.addEventListener('input', function() {
    localStorage.setItem('editor', editor.value);
});
button.addEventListener('click', function() {
    editor.value = '';
    localStorage.removeItem('editor');
});