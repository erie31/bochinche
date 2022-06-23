let nameError = document.getElementById('name-error');
let ciudadError = document.getElementById ("ciudadError");
let telError = document.getElementById ("telError");

function validarName (){
    let nombre = document.getElementById ("nameValidar").value;

    if(nombre.length == 0){
        nameError.innerHTML = "Complete este campo";
        return false;
    }
    if(!nombre.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
       nameError.innerHTML = "Escriba su nombre completo"
        return false;
    }
    nameError.innerHTML = 'Válido'
    return true;

}

function validarCiudad (){
   let ciudad = document.getElementById ("ciudadValidar").value;

   if(ciudad.length == 0){
       ciudadError.innerHTML = "Complete este campo";
       return false;
   }
   ciudadError.innerHTML = 'Válido'
   return true;

}

function validarTel (){
   let tel = document.getElementById ("telValidar").value;

   if(tel.length == 0){
       telError.innerHTML = "Complete este campo";
       return false;
   }
   if(tel.length !== 10){
      telError.innerHTML = "Escriba su número de telefono (diez digitos)"
       return false;
   }
   if (!tel.match (/^[0-9]{10}$/)){
   telError.innerHTML = 'ej:3402000000 (solo numeros)'
   return false;
   }
   telError.innerHTML = "Válido"
   return true;
}

function validateForm(){
   if(!validarName() || !validarCiudad() || !validarTel()){
      
      submitError.innerHTML = "Revisa tus datos";
      setTimeout(function(){submitError.style.display = "none";}, 3000);
      return false
   }
}

/* let nombre;
let nombreLS = JSON.stringify(localStorage.setItem(nombre))

if (nombreLS) {
    nombre = nombreLS
} else {
   nombre = prompt("Ingrese su nombre")
} */


$(document).ready(function(){    
    $('#btnReserva').click(function(){        
             
        let nombreLS = document.getElementById("nameValidar").value;
        let ciudadLS = document.getElementById("ciudadValidar").value;
        let telefonoLS = document.getElementById("telValidar").value;      
        localStorage.setItem("Nombre", nombreLS);
        localStorage.setItem("Ciudad", ciudadLS);
        localStorage.setItem("Telefono", telefonoLS);
        document.getElementById("nameValidar").value = "";
        document.getElementById("ciudadValidar").value = "";
        document.getElementById("telValidar").value = "";
    })   
})

let mostrarLS = document.getElementById ("mostrar")    
    mostrarLS.addEventListener('click', () =>{                    
       let nombre = localStorage.getItem("Nombre");
       let ciudad = localStorage.getItem("Ciudad");
       let telefono = localStorage.getItem("Telefono");
       document.getElementById("nameValidar").innerHTML = nombre;
        document.getElementById("ciudadValidaro").innerHTML = ciudad;
        document.getElementById("telValidar").innerHTML = telefono;
        
    })   

