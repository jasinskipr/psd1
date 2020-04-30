document.addEventListener('scroll', () => {
    const yoff = window.pageYOffset;
    if (yoff > 40) {
        document.querySelectorAll('.herro__title')[0].classList.add('herro__title--black');
        document.getElementById('site-bg').classList.add('site-bg--black');
    } else {
        document.querySelectorAll('.herro__title')[0].classList.remove('herro__title--black');
        document.getElementById('site-bg').classList.remove('site-bg--black');
    }
})