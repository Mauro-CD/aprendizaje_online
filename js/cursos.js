var cursos = [
    {Curso: 'Curso de Dibujo tecnico 1',
    Imagen: 'img/dibujo-tecnico.jpg',
    Descripcion: 'Introduccion a dibujo tecnico',
    Visita: 3},
    {Curso: 'Fisica',
    Imagen: 'img/fisica.jpg',
    Descripcion: 'Introduccion Fisica',
    Visita: 3},
    {Curso: 'Matematica I',
    Imagen: 'img/matematica.jpg',
    Descripcion: 'Introduccion Matematica',
    Visita: 10},
    {Curso: 'Quimica',
    Imagen: 'img/quimica.jpg',
    Descripcion: 'Introduccion Quimica',
    Visita: 3}
    ]
    

// Obteniendo el cuerpo de la tabla a donde añadiremos nuestros datos
let tableBody = document.getElementById('cursos-lista');

// Recorriendo los datos de ejemplo
for (let i = 0; i < cursos.length; i++) {
    let visita = cursos[i].Visita
    if (visita > 2) {
        let a = `<a href="#">`
        let Curso = `<h3>${cursos[i].Curso}</h3>`;
        let Imagen = `<img src="${cursos[i].Imagen}">`;
        let Descripcion = `<p>${cursos[i].Descripcion}</p>`;
        let af = `</a>`;
        tableBody.innerHTML += `<li>${ a +  Curso + Imagen + Descripcion + af}</li>`;
    } 
}


