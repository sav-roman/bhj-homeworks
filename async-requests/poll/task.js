const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if(xhr.readyState === xhr.DONE) {
    let result = JSON.parse(xhr.responseText).data;
    let pollTitle = document.getElementById('poll__title');
    pollTitle.textContent = result.title;
    let pollAnswersElement = document.getElementById('poll__answers');
    let pollAnswers = result.answers;
    for(let i = 0; i < pollAnswers.length; i++) {
      let content = '\n <button class="poll__answer">' + pollAnswers[i] + '</button>';
      pollAnswersElement.insertAdjacentHTML('beforeEnd', content);
      let lastEl = pollAnswersElement.lastChild;
      lastEl.addEventListener('click', function(ev) {
        ev.preventDefault();
        alert('Спасибо, ваш голос засчитан!');
      });
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();