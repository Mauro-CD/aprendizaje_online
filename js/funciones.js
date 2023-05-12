let cursoSelecionado = document.getElementById('cursos-selecionado');

function getCourse(id) {
   console.log("cargar")
   document.getElementById("principal").style.display = "none";
   fetch('./json/cursos.json', {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  })
     .then(response => response.json())
     .then(response => load(response,id))
     
}

function load(curso,id) {
   let i = 0;
   let idNumber = Number(id);
   let exista = false;
   let cursoEncontrado = null;
   while (i < curso.length && !exista ) { // muestra 0, luego 1, luego 2
      console.log(i);
      if (curso[i].id === idNumber) {
         console.log("existe");
         exista = true;
         cursoEncontrado = curso[i];
      };
      i++
    }
    if (exista) {
      let cursoHTML = `<section><h2>${cursoEncontrado.name}</h2><ul>`
      for (let i = 0; i < cursoEncontrado.modulos.length; i++) {
     
         let li = `<li><h3>Modulo ${i+1}: ${cursoEncontrado.modulos[i].titulo}</h3><ul>`;
         cursoHTML = cursoHTML + li
         for (let n = 0; n < cursoEncontrado.modulos[i].contenido.length; n++) {
     
            let li = `<a>Leccion ${n+1}: ${cursoEncontrado.modulos[i].contenido[n]}</a>`;
            cursoHTML = cursoHTML + `<li>${li}</li>`
         }
         cursoHTML = cursoHTML + `</ul></li>`
      }
      cursoHTML = cursoHTML + `</ul></section>`;
      let pie = `<section><h2>Detalles del curso</h2><ul><li><strong>Instructor:</strong> ${cursoEncontrado.instructor}</li><li><strong>Duracion:</strong> ${cursoEncontrado.duracion}</li></ul><button name="Inscribirme" onclick="inscripcion()">Inscribirme en el curso</button></section>`
      cursoSelecionado.innerHTML = cursoHTML + pie
      document.getElementById("secundario").style.display = "block";
    } else {
      alert("No se encontro el curso")
    }
}

function inscripcion() {
   alert("Se inscribe al curso");
   document.getElementById("secundario").style.display = "none";
   document.getElementById("principal").style.display = "block";
}

function loadCourse(cursos) {
   for (let i = 0; i < cursos.length; i++) {
       let visitas = cursos[i].views
       if (visitas > 2) {
           let a = `<a href="#">`
           let name = `<h3>${cursos[i].name}</h3>`;
           let image = `<p type="button" onclick="cambiar('${cursos[i].description}')"><img src="${cursos[i].image}"></p>`;
           let description = `<p>${cursos[i].description}</p>`;
           //let boton = `<p type="button" onclick="cambiar('${cursos[i].Descripcion}')"><img src="${cursos[i].Imagen}"></p>`
           let af = `</a>`;
           listado.innerHTML += `<li>${ a +  name + image + description + af}</li>`;
       } 
   };
}


function search(){
   let display, input, filter, lista, li, i, txtValue;
   input = document.getElementById("buscar");
   filter = input.value.toUpperCase();
   lista = document.getElementById("prueba");
   li = lista.getElementsByTagName("li");

   for(i=0; i< li.length; i++){				
      display = "none";
      h3 = li[i].getElementsByTagName("h3")[0];
         if(h3){
            txtValue = h3.textContent || h3.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                  display = "";
            }
         }
      li[i].style.display = display;
   }
}	


