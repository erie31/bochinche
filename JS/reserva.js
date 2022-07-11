let nameError = document.getElementById('name-error');
let emailError = document.getElementById ("emailError");
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

function validarEmail (){
   let email = document.getElementById ("emailValidar").value;

   (email.length == 0)? emailError.innerHTML = "Complete este campo": emailError.innerHTML = 'Revisa tu mail antes de reservar'


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
   if(!validarName() || !validarEmail() || !validarTel()){
      
      submitError.innerHTML = "Revisa tus datos";
      setTimeout(function(){submitError.style.display = "none";}, 3000);
      return false
   }
}


   
    btnReserva.addEventListener('click', () =>{        
             
        let nombreLS = document.getElementById("nameValidar").value;
        let emailLS = document.getElementById("emailValidar").value;
        let telefonoLS = document.getElementById("telValidar").value;      
        localStorage.setItem("Nombre", nombreLS);
        localStorage.setItem("Email", emailLS);
        localStorage.setItem("Telefono", telefonoLS);
        document.getElementById("nameValidar").value = "";
        document.getElementById("emailValidar").value = "";
        document.getElementById("telValidar").value = "";
        
        Swal.fire ({
            type:"succes",
            title:"La reserva se realizo con éxito",
            text:"Gracias por elegirnos"
        })
    })   


  
    mostrarLS.addEventListener('click', () =>{                    
       let name = localStorage.getItem("Nombre");
       let mail = localStorage.getItem("Email");
       let tele = localStorage.getItem("Telefono");
       document.getElementById("Nom").innerHTML = name;
        document.getElementById("Emai").innerHTML = mail;
        document.getElementById("Telef").innerHTML = tele;
        
    })   

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_mto2wz9', 'template_8r6dbd3', e.target, 'YOUR_USER_ID')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        }

        const lista = document.querySelector('#comb')

fetch('/data/inflables.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((inflable) => {
            const di = document.createElement('div')
            di.innerHTML = `
                <h2>${inflable.nombre}</h4>
                <p>${inflable.tamaño}</p>
                <p>${inflable.catering}</p>
                <hr/>
            `
   
            lista.append(di)
        })
    })
