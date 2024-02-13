function encriptar(){
    var texto = document.getElementById("encr_txt").value.toLocaleLowerCase();

    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("txt_des").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("encr_txt").value.toLocaleLowerCase();

    var textoEncriptado = texto.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("txt_des").innerHTML = textoEncriptado;
}

function copiar(){
    var contenido = document.querySelector("#txt_des");
    contenido.select();
    document.execCommand("copy");
}

function redireccion(){
    window.location = "encriptador.html";
    escribir=document.querySelector("#encr_txt");
    escribir.select()
}