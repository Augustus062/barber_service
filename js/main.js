let passarslide = 0;
const slides = document.querySelectorAll('.slides img');

function mostrarSlides(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function moverSlide(n) {
    passarslide += n;
    if (passarslide >= slides.length) {
        passarslide = 0;
    } else if (passarslide < 0) {
        passarslide = slides.length - 1;
    }
    mostrarSlides(passarslide);
}

function iniciarCarroselAutomatico() {
    setInterval(() => {
        moverSlide(1); // Próximo slide
    }, 5000); // 5 segundos
}

// Iniciar o carrossel com a primeira imagem visível
mostrarSlides(passarslide);
iniciarCarroselAutomatico();

// Adiciona funcionalidade aos botões de navegação
document.querySelector('.prox').addEventListener('click', () => moverSlide(1));
document.querySelector('.anterior').addEventListener('click', () => moverSlide(-1));
