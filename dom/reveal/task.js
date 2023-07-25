let isInViewport = function(el) {
    const viewportHeight = window.innerHeight * 0.7;
    const elementTop = el.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false;
}

const div = Array.from(document.getElementsByClassName('reveal'));

div.forEach(function(element) {
    document.addEventListener('scroll', function(){
        if(isInViewport(element)) {
            element.classList.add('reveal_active');
        }
    });
})