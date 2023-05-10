let listado = document.getElementById('cursos-lista');

//fetch('http://127.0.0.1:5500/cursos.json', {
fetch('./json/cursos.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(response => loadCourse(response))
   

function loadCourse(cursos) {
    for (let i = 0; i < cursos.length; i++) {
        let visitas = cursos[i].views
        if (visitas > 2) {
            let a = `<a href="#">`
            let name = `<h3 id=name >${cursos[i].name}</h3>`;
            let image = `<p id=image type="button" onclick="cambiar('${cursos[i].description}')"><img src="${cursos[i].image}"></p>`;
            let description = `<p id=description>${cursos[i].description}</p>`;
            //let boton = `<p type="button" onclick="cambiar('${cursos[i].Descripcion}')"><img src="${cursos[i].Imagen}"></p>`
            let af = `</a>`;
            listado.innerHTML += `<li>${ a +  name + image + description + af}</li>`;
        } 
    };
}
