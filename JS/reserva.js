/* class Inflables {
    constructor(nombre, tamaño, precio){
       this.nombre = nombre;
       this.tamaño = tamaño;
       this.precio = precio;
    }
 
 }
 const bochinchito = new Inflables ("Bochinchito", "Chico", 500)
 const bochinche = new Inflables ("Bochinche", "Grande", 600)
 const bochincheXl = new Inflables ("BochincheXl", "Gigante", 800)
 
 
 const articulo = prompt ("Ingresa el articulo deseado")
 let tiempo = prompt ("Ingresa la cantidad de dias de alquiler")
 class Combo {
    constructor (articulo,precio,tiempo){
       this.articulo  = articulo.toUpperCase();
       this.precio  = parseFloat(precio);
       this.tiempo = parseFloat(tiempo)
      let costoAlquiler = () => this.precio * this.tiempo;
    }
       
   
 }
 
 
 const comboBochinche = [];
 let   cantidad     = 4;
 
 do{
    let entrada = prompt("Arma tu combo, un item a la vez");
    comboBochinche.push(entrada.toUpperCase());
    console.log(comboBochinche.length);
 }while(comboBochinche.length != cantidad)
 
 const nuevoCombo = comboBochinche.concat(["¡Consultar por Catering!","Envio sin cargo"]);
 
 alert(nuevoCombo.join("\n")); */

let nameError = document.getElementById('name-error');
let ciudadError = document.getElementById ("ciudadError");
let telError = document.getElementById ("telError");

function validarName (){
    let name = document.getElementById ("nameValidar").value;

    if(name.length == 0){
        nameError.innerHTML = "Complete este campo";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
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