

// init Swiper:


function carousel() {

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
        observer: true,
        loop: true,
        autoHeight: true,
        loopFillGroupWithBlank: false,
        breakpoints: {
            558 : {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
            },
           
            704 : {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
            },
           1000: {
                slidesPerView: 5,
                spaceBetween: 30,
                slidesPerGroup: 5,
            },
            1300: {
                slidesPerView: 6,
                spaceBetween: 30,
                slidesPerGroup: 6,
            }, 1500: {
                slidesPerView: 7,
                spaceBetween: 30,
                slidesPerGroup: 7,
            }, 
            1800: {
                slidesPerView: 8,
                spaceBetween: 30,
                slidesPerGroup: 8,
            },
            1980: {
                slidesPerView: 9,
                spaceBetween: 30,
                slidesPerGroup: 9,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



    const fila = document.querySelector('.contenedor-carousel');
    const peliculas = document.querySelectorAll('.pelicula');

    const flechaIzquierda = document.getElementById('flecha-izquierda');
    const flechaDerecha = document.getElementById('flecha-derecha');

    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha.addEventListener('click', () => {
        fila.scrollLeft += (fila.offsetWidth);
        console.log(fila.offsetWidth)

        const indicadorActivo = document.querySelector('.indicadores .activo');
        if (indicadorActivo.nextSibling) {
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;

        const indicadorActivo = document.querySelector('.indicadores .activo');
        if (indicadorActivo.previousSibling) {
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    // ? ----- ----- Paginacion ----- -----
    const numeroPaginas = Math.ceil(peliculas.length / 5);
    for (let i = 0; i < numeroPaginas; i++) {
        const indicador = document.createElement('button');

        if (i === 0) {
            indicador.classList.add('activo');
        }

        document.querySelector('.indicadores').appendChild(indicador);
        indicador.addEventListener('click', (e) => {
            fila.scrollLeft = i * fila.offsetWidth;

            document.querySelector('.indicadores .activo').classList.remove('activo');
            e.target.classList.add('activo');
        });
    }

    // ? ----- ----- Hover ----- -----
    peliculas.forEach((pelicula) => {
        pelicula.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });

    fila.addEventListener('mouseleave', () => {
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    });



}

function showArrows() {

    const flechaIzquierda = document.getElementById('flecha-izquierda');
    const flechaDerecha = document.getElementById('flecha-derecha');


    flechaDerecha.style.opacity = "1";
    flechaIzquierda.style.opacity = "1";
}
function hideArrows() {


    const flechaIzquierda = document.getElementById('flecha-izquierda');
    const flechaDerecha = document.getElementById('flecha-derecha');

    flechaDerecha.style.opacity = "0";
    flechaIzquierda.style.opacity = "0";
}
