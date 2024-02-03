
var textarea=document.getElementById("textarea");

var muestraTexto=document.getElementById("textarea2");



function encriptar(){
   var texto2= textarea.value
   var tex= texto2.toLowerCase()
   .replaceAll("e","enter")
   .replaceAll("i","imes")
   .replaceAll("a","ai")
   .replaceAll("o","ober")
   .replaceAll("u","ufat")
   
   muestraTexto.value =tex
   muestraTexto.style.backgroundImage = "none"
   textarea.value="";
   
   return (tex)

}


function  desencriptar(){
    var texto2= textarea.value
    var tex= texto2
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")
   
    muestraTexto.value = tex
    muestraTexto.style.backgroundImage = "none"
    textarea.value="";
    return (tex)

}


function copiar(){
    muestraTexto.select();  //selecciona todo lo que hay en muestratexto .select() es una funcion definida en js (propio de js)
    navigator.clipboard.writeText(muestraTexto.value)
    muestraTexto.value=""   //cuando copia deja vacio el textarea2 
    textarea.focus();  //vuelvo el foco al textarea1 para que sea mas facil pegar
    muestraTexto.style.backgroundImage="url('Munieco.png')" //tuve que poner comillas dobles y adentro simples
    return Swal.fire({
        title: 'Copiado',
        text: 'Texto copiado con exito!',
        icon: 'success',
        confirmButtonText: 'Bien'
      })
}  

function pegarTexto() {
 // Accede al portapapeles
 navigator.clipboard.readText().then(texto => {
    textarea.value=texto
  })
}

//Defino variables con los elementos html para luego agregar funciones
var button= document.getElementById("encriptar"); 
button.onclick= encriptar; // recordar no poner parentesis al final de la funcion.

var button2= document.getElementById("desencriptar");
button2.onclick=desencriptar;

var Copiar=document.getElementById("Copiar");
Copiar.onclick=copiar; 

var Pegar=document.getElementById("pegar");
Pegar.onclick= pegarTexto;