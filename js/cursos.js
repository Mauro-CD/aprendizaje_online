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
   

function ordenarAsc(p_array_json, p_key) {
    p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
    });
    
}
function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}

function loadCourse(cursos) {
    cursos=sortJSON(cursos, 'name', 'asc');
    console.log(cursos);
    for (let i = 0; i < cursos.length; i++) {
        let visitas = cursos[i].views
        if (visitas > 2) {
            let a = `<a>`
            let name = `<h3 id=nameCurso${i} class="title-course">${cursos[i].name}</h3>`;
            let image = `<p id=image type="button" ><img id=imageList onclick="getCourse('${cursos[i].id}')" src="${cursos[i].image}"></p>`;
            let description = `<p id=description>${cursos[i].description}</p>`;
            //let boton = `<p type="button" onclick="cambiar('${cursos[i].Descripcion}')"><img src="${cursos[i].Imagen}"></p>`
            let af = `</a>`;
            listado.innerHTML += `<li >${ a +  name + image + description + af}</li>`;
        } 
    };
}
