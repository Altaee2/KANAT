// وظيفة لإضافة تأثير الظهور عند التمرير
const sections = document.querySelectorAll('.section');
const options = { threshold: 0.3 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});

// وظيفة قائمة الموبايل
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});