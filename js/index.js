import {cursos} from './listados-de-cursos.js';


let listado = document.getElementById('cursos-lista');

for (let i = 0; i < cursos.length; i++) {
    let visita = cursos[i].Visita
    if (visita > 2) {
        let a = `<a href="#">`
        let Curso = `<h3>${cursos[i].Curso}</h3>`;
        let Imagen = `<p type="button" onclick="cambiar('${cursos[i].Descripcion}')"><img src="${cursos[i].Imagen}"></p>`;
        let Descripcion = `<p>${cursos[i].Descripcion}</p>`;
        //let boton = `<p type="button" onclick="cambiar('${cursos[i].Descripcion}')"><img src="${cursos[i].Imagen}"></p>`
        let af = `</a>`;
        listado.innerHTML += `<li>${ a +  Curso + Imagen + Descripcion + af}</li>`;
    } 
};
