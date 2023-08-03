let setIntervalVol = -1;
function progressFunc(val) {
  const progress = document.getElementById('progress');
  if(setIntervalVol != -1) {
    clearInterval(setIntervalVol);
  }
  setIntervalVol = setInterval(() => {
    if(progress.value == val) {
      clearInterval(setIntervalVol);
    }
    if(progress.value < val) {    
        progress.value = progress.value + 0.025;
      }
  }, 50);
}

document.forms.form.addEventListener('submit', function(e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', function() {
    progressFunc(xhr.readyState * 0.25);
  })

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  const formData = new FormData(document.forms.form);
  xhr.send(formData);
});


