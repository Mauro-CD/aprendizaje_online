// var elementos = document.getElementsByName("pregunta");
 
// for(var i=0; i<elementos.length; i++) {
//   console.log(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
// }

function registro() {
    let name = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    if ( password === password2 ) {
        alert("clave correcta")
    } else {
        alert("La contraseña no coincide")
    }
}
