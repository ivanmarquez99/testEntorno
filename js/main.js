

/*Ejercicio 1: Desarrollo de los cambios de estilos. */
var buttonwhite = document.getElementById("botonWhite");
var estilo = document.getElementById("estilos");
buttonwhite.addEventListener("click", function() {
    estilo.href = "css/whitestyle.css";
});

var buttonblack = document.getElementById("botonBlack");
buttonblack.addEventListener("click", function() {
    estilo.href = "css/blackstyle.css";
});


/* Ejercicio 2: Generar una funcion que haga mostrar la contraseña.*/
var check = document.getElementById("checkboxPassword");
var inputpassword = document.getElementById("inputPassword");

check.addEventListener("click", function() {
    if(check.checked==true) {
        inputpassword.type = "text";
    } else {
        inputpassword.type = "password";
    }
})

/* Ejercicio 3: Comprobar contraseña vacía. */
function analizarContrasenia(){
    
    var password = document.getElementById('inputPassword');

    if(password.value === null || password.value === '' ){
        document.getElementById("mensajePasswordEmpty").innerHTML= "No se ha ingresado contraseña. Por favor, ingrese una contraseña";
        reset();
    }
    else {
        analizarSecuencia();

    //quitarMensajePassVacia();
    //guardarPasswordsIngresadas(password.value);
    //analizarSecuencia();
    }

    return false;
}
 
function quitarMensajePassVacia(){
 
    document.getElementById('mensajePasswordEmpty').innerHTML= ("");
   
}

function reset(){ 
   /*Ejercicio 4: Reiniciar campos. */

   var progress = document.getElementsByClassName('progress-bar');
   var resultados = document.getElementsByClassName('card-body');
   for (var i=0; i< progress.length; i++) {
    progress[i].style.width="0%";
   }

   for (var i=0; i<resultados.length-2; i++){
    resultados[i].innerHTML= " ";
   }

}


function analizarSecuencia(){
   var secuenciaArmada=armarEstructuraCadena();
   var infoPasswordAnalizada=calcularCantidadesPassword(secuenciaArmada);
//    mostrarInfoPassword(infoPasswordAnalizada);
   
}
function armarEstructuraCadena(){
    var total = document.getElementById("cantTotalCaracteres");
    var cadenaIngresada= document.getElementById("inputPassword").value;
    var caracter,secuencia=[];
    var i=0; 

   /* Ejercicio 5. */
   for (var i = 0; i < cadenaIngresada.length; i++) {
       var caracter = cadenaIngresada[i];
       secuencia.push(caracter);
     }
     total.innerHTML = secuencia.length;
    return secuencia;

   }


/* Funcion que suma cada caracter. */
function calcularCantidadesPassword(secuenciaArmada){

   var infoPassword={
       cantTotalCaracteres : 0,
       cantCaracteresEspeciales:0,
       cantConsecutivos:0,
       cantDistintos:0,
       cantIguales:0,
       
       cantLetras:0,
       cantLetrasMayusculas:0,
       cantLetrasMinusculas:0,

       cantNum:0,
   }


   var i=0,cantIguales=0,cantConsecutivos=0,cantDistintos=0;
   var cantLetras=0,cantNum=0,cantCaracteresEspeciales=0;
   var cantLetrasMayusculas=0, cantLetrasMinusculas=0;
   var cantCaracteres=secuenciaArmada.length;
   while( i < cantCaracteres -1){
       if(sonIguales(secuenciaArmada[i],secuenciaArmada[i+1])){
            cantIguales++;
       }
       else{
           if(sonConsecutivos(secuenciaArmada[i],secuenciaArmada[i+1])){
                console.log("Hay consecutivos");
               cantConsecutivos++;
           }
           else{
               
               cantDistintos++;
               
           }

       }
       if(esLetra(secuenciaArmada[i])){
           if(esLetraMayuscula(secuenciaArmada[i]))
               cantLetrasMayusculas++;
           else
               cantLetrasMinusculas++;
           cantLetras++;
       }
       else{
           if(esNumero(secuenciaArmada[i])){
               cantNum++;
           }
           else
               cantCaracteresEspeciales++;
       }
       i++;
   }

   if(i==cantCaracteres-1){ 
       if(esLetra(secuenciaArmada[i])){
           if(esLetraMayuscula(secuenciaArmada[i]))
               cantLetrasMayusculas++;
           else
               cantLetrasMinusculas++;
           cantLetras++;
       }
       else{
           if(esNumero(secuenciaArmada[i])){
               cantNum++;
           }
           else
               cantCaracteresEspeciales++;
       }

   }

   
   infoPassword.cantTotalCaracteres = cantCaracteres;
   infoPassword.cantCaracteresEspeciales= cantCaracteresEspeciales;
   infoPassword.cantConsecutivos= cantConsecutivos;
   infoPassword.cantDistintos= cantDistintos;
   infoPassword.cantIguales= cantIguales;
       
   infoPassword.cantLetras= cantLetras;
   infoPassword.cantLetrasMayusculas=cantLetrasMayusculas;
   infoPassword.cantLetrasMinusculas=cantLetrasMinusculas;

   infoPassword.cantNum=cantNum;

   return infoPassword;
}

function sonIguales(elem1,elem2){
   /*Ejercicio 7: Comprobar que dos elementos sean iguales */
   if (elem1 == elem2) {
    return true;
   }
   return false;
}

function sonConsecutivos(elem1,elem2){
   var consecutivos=false;
   
   if( esNumero(elem1) && esNumero(elem2)){
       
       if(consecutivosNumericos(elem1,elem2))
       { 
           
           consecutivos=true;
       }
   }
   else{
       if(esLetra(elem1) && esLetra(elem2))
           if(consecutivosLetras(elem1,elem2)){

               consecutivos=true;
           }
       
   }

   return consecutivos;

}

function esNumero(caracter){
   var esNum=false;
   var codCaracter=caracter.charCodeAt();

   if(codCaracter >= 48 && codCaracter <=57)
       esNum=true;

   return esNum;
}

function consecutivosNumericos(elem1,elem2){
  /*Ejercicio 8: Comprobar dos numeros consecutivos. */
  if (elem1.charCodeAt()+1 == elem2.charCodeAt()) {
    return true;
  }
  return false;
}


function esLetra(caracter){
   var codCaracter=caracter.charCodeAt();
   var letra=false;
   if((codCaracter >= 65 && codCaracter <=90) || ( codCaracter >= 97 && codCaracter <=122))
   {
       letra=true;
   }
   

   return letra;

}

function esLetraMayuscula(caracter){
   var codCaracter=caracter.charCodeAt();
   var esMayus=false;

   if(codCaracter >= 65 && codCaracter <=90)
       esMayus=true;

  return esMayus;
}

function consecutivosLetras(elem1,elem2){
/*Ejercicio 8: Comprobar dos letras consecutivas. */
if (elem1.charCodeAt()+1 == elem2.charCodeAt()) {
    return true;
  }
  return false;
}



function mostrarInfoPassword(infoPassword){

   mostrarCantidadesAnalisis(infoPassword);

   var tipoSecuencia=analizarUnTipoSecuencia(infoPassword.cantNum,infoPassword.cantLetras,
       infoPassword.cantCaracteresEspeciales,infoPassword.cantTotalCaracteres);

   mostrarInfoTipoSecuencia(tipoSecuencia);

   var porcentajes=calcularPorcentaje(infoPassword);
   mostrarPorcentaje(porcentajes);

   var escala=determinarSeguridadPassword(calculoSeguridadPassword(infoPassword));
   mostrarSeguridadPassword(escala);
   
}

function mostrarCantidadesAnalisis(infoPassword){

/*Ejercicio 6: Mostrar cantidades. */

}

function analizarUnTipoSecuencia(cantNum,cantLetras,cantEspeciales,cantCaracteres){

   var tipoSecuencia={
       tipoLetras : false,
       tipoNumeros:false,
       tipoEspeciales:false,
   }

   if(cantLetras == cantCaracteres)
   {
       tipoSecuencia.tipoLetras=true;
   }
   else
   {
       if(cantNum == cantCaracteres)
           tipoSecuencia.tipoNumeros=true;
       else
           if(cantEspeciales == cantCaracteres)
           tipoSecuencia.tipoEspeciales=true;
   }

   return tipoSecuencia;

}

function mostrarInfoTipoSecuencia(tipoSecuencia){
   if(tipoSecuencia.tipoNumeros == true)
   document.getElementById("secTipoNums").innerHTML = ("Si");
   else
       document.getElementById("secTipoNums").innerHTML = ("No");
   if(tipoSecuencia.tipoLetras == true)
       document.getElementById("secTipoLetras").innerHTML = ("Si");
   else
       document.getElementById("secTipoLetras").innerHTML = ("No");
   if(tipoSecuencia.tipoEspeciales == true)
       document.getElementById("secTipoEspeciales").innerHTML = ("Si");
   else
       document.getElementById("secTipoEspeciales").innerHTML = ("No");
}

function calcularPorcentaje(infoPassword){

   var porcentajesPassword={
       porcLetras : 0,
       porcNumeros: 0,
       porcEspeciales: 0,
   }

   var cantNums=infoPassword.cantNum,
   cantLetras=infoPassword.cantLetras,
   cantEspeciales=infoPassword.cantCaracteresEspeciales,
   cantCaracteres=infoPassword.cantTotalCaracteres;
   
   porcentajesPassword.porcNumeros=porcentaje(cantNums,cantCaracteres);    
   porcentajesPassword.porcLetras=porcentaje(cantLetras,cantCaracteres);
   porcentajesPassword.porcEspeciales=porcentaje(cantEspeciales,cantCaracteres);

   return porcentajesPassword; 

}

function porcentaje(parcial,total){
 /*Ejercicio 9: Calcular porcentajes.  */
    return parcial*100/total;
}

function mostrarPorcentaje(porcentajes){
  
  /*Ejercicio 9: Mostrar porcentajes.  */ 
  document.getElementsById("porcentajeNums").style.width(porcentajes);

}

function calculoSeguridadPassword(infoPassword){

   var promedio=0;
   /*Ejercicio 10. Calcular contraseña. */
      

   return promedio;
    
}



function determinarSeguridadPassword(promedioPassword){

   var promedio= dejarDosDigitosDecimales(promedioPassword);
    /*Ejercicio 11. Mostrar seguridad. */

   return escalaItensidad;

}

function mostrarSeguridadPassword(escalaItensidad){

   document.getElementById("seguridadPassword").innerHTML=escalaItensidad;

}


function mostrarAclaraciones(){
   document.getElementById('aclaraciones').innerHTML=
   "<p>"+
    "<ol>"+
       "<li>Los cáracteres son los números, letras y simbolos ( ! #  %  & ; , .). Los simbolos son todo aquello "+
       "que no son números y no son letras. </li>"+
       "<li>La cantidad de cáracteres se refiere a la longitud de la contraseña ingresada. </li>"+
       "<li> Los caraceteres especiales son aquellos que definimos previamente como simbolos.</li>"+
       "<li>La cantidad de iguales es la cantidad de veces que se repite un cáracter de forma consecutiva.<br>"+
        " Por ejemplo si ingresamos la siguiente contraseña:<br>aaa  en este caso hay dos cantidades de iguales "+
         "porque entre el primer par de aa es una cantidad de iguales y en el segundo par hay otra cantidad de iguales."+
         " En total hay dos cantidades de iguales.</li>"+
       "<li>La cantidad de distintos son la cantidad de pares de caracteres que son diferentes entre sí.</li>"+
       "<li>La cantidad de consecutivos son la cantidad de pares consecutivos. En el caso de los números, seria los numeros "+
       "consecutivos(no en orden) como por ejemplo 1234 son 3 pares de consecutivos pero 149 no son consecutivos. En el caso"+ 
       "de las letras, seria son letras en orden alfabetico pero teniendo en cuenta "+
       "abc son letras consecutivas pero aez no son consecutivas.</li>"+

   "</ol>"+
   "</p>";
 
}

mostrarAclaraciones();