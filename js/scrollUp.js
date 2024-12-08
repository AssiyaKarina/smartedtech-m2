const scrollUpBtn = document.getElementById('scrollUpBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollUpBtn.style.opacity = '1';
        scrollUpBtn.style.visibility = 'visible';
    } else {
        scrollUpBtn.style.opacity = '0';
        scrollUpBtn.style.visibility = 'hidden';
    }
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});