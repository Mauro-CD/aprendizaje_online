function valida(){


    

    if (document.contacto.nombre.value.length == 0) {
      alert("Ingrese su Nombre")
      document.contacto.nombre.focus()
      return 0;
    }
  
    
  
    if (document.contacto.email.value.length == 0){
      alert ("Ingrese su correo electrónico")
      document.contacto.email.focus()
      return 0;
    }
  

    

 

    telefono = document.contacto.telefono.value
            telefono = validarEntero(telefono)
            document.contacto.telefono.value = telefono
            if (telefono == "") {
                alert("Indique su número de teléfono.")
                document.contacto.telefono.focus()
                return 0;
            }
   
    
  
    
  
  if (document.contacto.message.value.length == 0){
    alert ("Por favor deje su mensaje")
    document.contacto.message.focus()
    return 0;

  }
   
  
    alert("Muchas gracias por contactarse");
    document.contacto.submit();
  }

  function validarEntero(valor) {
    valor = parseInt(valor)

    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}