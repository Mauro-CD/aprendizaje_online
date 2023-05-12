let carousel = document.getElementById('cursos-carousel');

fetch('./json/cursos.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(response => loadCarousel(response))
   


function verificaAnterior(i, l) {
    let resultado = Number
    if ( i < 1 ) {
        return resultado = l
    } else { 
        return resultado = i-1
    }

}

function verificaSiguiente(i, l) {
    let resultado = Number
    if ( i < l ) {
        return resultado = i+1
    } else { 
        return resultado = 0
    }

}

function loadCarousel(cursos) {
    // carousel.innerHTML += `<ol class="carousel__viewport">`;
    let ol1 = `<ol class="carousel__viewport">`;
    let ol2 = `<aside class="carousel__navigation"><ol class="carousel__navigation-list">`
    for (let i = 0; i < cursos.length; i++) {
        let visitas = cursos[i].views
        if (visitas > 2) {
            let li = `<li id="carousel__slide${i}" tabindex="0" class="carousel__slide">`;
            let image = `<img id=imagecarousel src="${cursos[i].image}">`;
            let ni = verificaAnterior(i,cursos.length-1);
            let nf = verificaSiguiente(i,cursos.length-1);
            let div = `<div class="carousel__snapper"><a href="#carousel__slide${ni}" class="carousel__prev">Anterior</a><a href="#carousel__slide${nf}" class="carousel__next">Siguiente</a></div>`;
            ol1 = ol1 + `${ li + image + div }</li>`;
            ol2 = ol2 + `<li class="carousel__navigation-item"><a href="#carousel__slide${i}" class="carousel__navigation-button">Ir a diapositiva ${i}</a></li>`
        } 
    };
    ol1 = ol1 + `</ol>`
    ol2 = ol2 + `</aside>`
    carousel.innerHTML += `<section class="carousel" aria-label="Galeria">` + ol1 + ol2 + `</section>`;  
}