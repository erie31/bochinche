/*  class Inflables {
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
 
 alert(nuevoCombo.join("\n"));  */

 let comboMes = {
   nombreInflable: "Bochinche",
   tamaño: "Grande",
   catering: "Catering XL",
   precioCombo: 2500,
      comienzoCombo: function (){
      console.log("El combo del mes "+ this.nombreInflable+ " de tamaño" + this.tamaño+ " incluye"+ this.catering+ " por solo" + this.precioCombo);
   }
   
 };
 console.log(comboMes.comienzoCombo());