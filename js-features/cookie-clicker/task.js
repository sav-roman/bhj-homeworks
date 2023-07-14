let cookieImage = document.getElementById('cookie');
let counter1 = document.getElementById('clicker__counter');
let timeClick = document.getElementById('clicker__speed');
let switch1 = 50;
let timeCounter = 0;

function changeSize() {
    let tObj = new Date();
    switch1 = switch1 * (-1);
    cookieImage.width = cookieImage.width - switch1;
    counter1.textContent = Number(counter1.textContent) + 1;
    if (timeCounter) {
        timeClick.textContent = (1000 / (tObj.getTime() - timeCounter)).toFixed(2);
        timeCounter = tObj.getTime();
    } else {
        timeCounter = tObj.getTime();
    }  
}

cookieImage.onclick = changeSize;