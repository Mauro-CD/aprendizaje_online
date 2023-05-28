// var elementos = document.getElementsByName("pregunta");

// for(var i=0; i<elementos.length; i++) {
//   console.log(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
// }

<<<<<<< HEAD

function validar(){
  if (document.formu.nombre.value.length == 0) {
    alert("Ingrese su Nombre")
    document.formu.nombre.focus()
    return 0;
  }

  if (document.formu.lastname.value.length == 0) {
    alert("Ingrese su Apellido")
    document.formu.lastname.focus()
    return 0;
  }

  if (document.formu.correoElectronico.value.length == 0){
    alert ("Ingrese su correo electrónico")
    document.formu.correoElectronico.focus()
    return 0;
  }


 


 
  
 


  if (document.formu.pass.value.length < 8 || document.formu.pass.value.length > 20) {
    alert("La contraseña debe tener entre 8 y 20 caracteres")
    document.formu.pass.focus()
    return 0;
  }

  if (document.formu.pass.value !== document.formu.pass2.value) {
    alert("La contraseña no coincide")
    document.formu.pass.focus()
    return 0;
  }

  alert("Muchas gracias por registrarse");
  document.formu.submit();
=======
function registro() {
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let emailValidate = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    if (name.length > 1) {
        document.getElementById('invalidName').style.display="none";
    } else {
        document.getElementById('invalidName').style.display="block";
        return 1;
    }
    if (lastname.length > 1) {
        document.getElementById('invalidLastname').style.display="none";
    } else {
        document.getElementById('invalidLastname').style.display="block";
        return 1;
    }
    if (emailValidate.test(email)) {
        document.getElementById('invalidMail').style.display="none";
    } else {
        document.getElementById('invalidMail').style.display="block";
        return 1;
    }
    if ( password === password2 && password.length > 5 ) {
        document.getElementById('invalidPassword').style.display="none";
    } else {
        document.getElementById('invalidPassword').style.display="block";
        return 1;
    }
>>>>>>> 50bf293b2e0f3bf99331d6267e8f8932a662711c
}
