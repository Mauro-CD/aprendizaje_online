// var elementos = document.getElementsByName("pregunta");

// for(var i=0; i<elementos.length; i++) {
//   console.log(" Elemento: " + elementos[i].value + "\n Seleccionado: " + elementos[i].checked);
// }


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
}
