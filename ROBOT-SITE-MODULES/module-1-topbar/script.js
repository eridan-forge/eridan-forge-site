// ЧАСТЬ 1
window.addEventListener('scroll', function() {
    const topbar = document.querySelector('.topbar');
    if (window.scrollY > 50) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});