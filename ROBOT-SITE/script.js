// ЧАСТЬ 3
const menuBtn = document.getElementById('menu-Btn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const scheduleBtn = document.getElementById('scheduleBtn');
const menuLinks = document.querySelectorAll('.menu-links a');


function openMenu() {
    sideMenu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('menu-open');
}


function closeMenu() {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
}


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});


menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sideMenu.classList.contains('open')) {
        closeMenu();
    }
});


const callBtn = document.querySelector('.callback-btn');
const heroBtn = document.querySelector('.hero-btn');
const whyBtn = document.querySelector('.why-btn');
const callModalOverlay = document.getElementById('callModalOverlay');
const callModal = document.getElementById('callModal');
const closeCallModalBtn = document.getElementById('closeCallModalBtn');
const submitCallBtn = document.getElementById('submitCallBtn');
const phoneInput = document.getElementById('phoneNumber');


function openCallModal() {
    callModalOverlay.classList.add('active');
    callModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
}


function closeCallModal() {
    callModalOverlay.classList.remove('active');
    callModal.classList.remove('active');
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
}


callBtn.addEventListener('click', openCallModal);
if (heroBtn) heroBtn.addEventListener('click', openCallModal);
if (whyBtn) whyBtn.addEventListener('click', openCallModal);
closeCallModalBtn.addEventListener('click', closeCallModal);
callModalOverlay.addEventListener('click', closeCallModal);


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && callModal.classList.contains('active')) {
        closeCallModal();
    }
});


const countrySelectorBtn = document.getElementById('countrySelectorBtn');
const flagDropdown = document.getElementById('flagDropdown');
const selectedCodeSpan = document.getElementById('selectedCode');
const arrowIcon = document.getElementById('arrowIcon');


countrySelectorBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    flagDropdown.classList.toggle('show');

    if (flagDropdown.classList.contains('show')) {
        arrowIcon.style.transform = 'rotate(180deg)';
    } else {
        arrowIcon.style.transform = 'rotate(0deg)';
    }
});


document.querySelectorAll('.flag-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = option.getAttribute('data-code');
        selectedCodeSpan.textContent = code;
        flagDropdown.classList.remove('show');
        arrowIcon.style.transform = 'rotate(0deg)';
    });
});


document.addEventListener('click', (e) => {
    if (!countrySelectorBtn.contains(e.target) && !flagDropdown.contains(e.target)) {
        flagDropdown.classList.remove('show');
        arrowIcon.style.transform = 'rotate(0deg)';
    }
});


phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    
    let formatted = '';
    if (value.length > 0) {
        formatted = '(' + value.slice(0, 3);
    }
    if (value.length >= 4) {
        formatted += ') ' + value.slice(3, 6);
    }
    if (value.length >= 7) {
        formatted += '-' + value.slice(6, 8);
    }
    if (value.length >= 9) {
        formatted += '-' + value.slice(8, 10);
    }
    e.target.value = formatted;
});


submitCallBtn.addEventListener('click', () => {
    const code = selectedCode.textContent;
    const phone = phoneInput.value;
    
    if (!phone || phone.replace(/\D/g, '').length < 10) {
        alert('Пожалуйста, введите полный номер телефона');
        return;
    }
    
    alert(`Заявка отправлена!\n${code} ${phone}\nМы перезвоним вам в ближайшее время.`);
    closeCallModal();
    phoneInput.value = '';
});

// ЧАСТЬ 1
window.addEventListener('scroll', function() {
    const topbar = document.querySelector('.topbar');
    if (window.scrollY > 50) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});


if (scheduleBtn) scheduleBtn.addEventListener('click', openCallModal);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('SW registered', reg))
    .catch(err => console.log('SW error', err));
}