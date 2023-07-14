let getHole = index => document.getElementById(`hole${index}`);
let target = document.getElementById(`dead`);
let lost = document.getElementById(`lost`);

function comparison() {
    if(this == document.querySelector('div.hole_has-mole')) {
        target.textContent = Number(target.textContent) + 1;
    } else {
        lost.textContent = Number(lost.textContent) + 1;
    }

    if (target.textContent == 10) {
        target.textContent = 0;
        lost.textContent = 0;
        alert('Победа!');
    }

    if (lost.textContent == 5) {
        target.textContent = 0;
        lost.textContent = 0;
        alert('Вы проиграли!');
    }
}

for(i = 1; i < 10; i++) {
    getHole(i).onclick = comparison;
}