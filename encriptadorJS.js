

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
    //document.execCommand('copy');//lo copia, es propio de js (ya no se debe usar esto! )
    navigator.clipboard.writeText(muestraTexto.value)
    muestraTexto.value=""   //cuando copia deja vacio el textarea2 
    textarea.focus();  //vuelvo el foco al textarea para que sea mas facil pegar
    muestraTexto.style.backgroundImage="url('muñeco.png')" //tuve que poner comillas dobles y adentro simples
    return Swal.fire({
        title: 'Copiado',
        text: 'Texto copiado con exito!',
        icon: 'success',
        confirmButtonText: 'Bien'
      })
}  

var button= document.getElementById("encriptar"); // la var button tiene como valor el boton de html con el Id "encriptar"
button.onclick= encriptar; //NOMBRE DE FUNCION A  LA QUE VA A ENTRAR PARA ENCRIPTAR recordar no poner parentesis al final del nombre.

var button2= document.getElementById("desencriptar");
button2.onclick=desencriptar; //NOMBRE DE FUNCION A  LA QUE VA A ENTRAR PARA DESENCRIPTAR

var Copiar=document.getElementById("Copiar");
Copiar.onclick=copiar;   //la funcion que va a copiar 


