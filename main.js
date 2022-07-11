document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.imagen__grande', { delay: 500 });
ScrollReveal().reveal('.anuncios', { delay: 500 });
ScrollReveal().reveal('.primer-banner', { delay: 500 });
ScrollReveal().reveal('.testimonios', { delay: 500 });
ScrollReveal().reveal('.texto1', { delay: 500 });