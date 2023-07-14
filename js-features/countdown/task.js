let timer = document.getElementById("timer");
let timerId = setInterval(function() {
    timer.textContent = Number(timer.textContent) - 1;
    if(timer.textContent == 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе');
        location.href = "https://learn.javascript.ru/ebook/demo.zip";
    }
  }, 1000);
