function cambiar(parm) {
   alert(parm)
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
   var display, input, filter, lista, li, ul, i, txtValue;
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
   lista.addEventListener("click", saludar)
}	