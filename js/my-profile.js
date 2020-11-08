var datosJson;
var objeto = {};

function guardar() {

    var nombreApellido = document.getElementById("nombreApellido").value;
    var edad = document.getElementById("edad").value;
    var mail = document.getElementById("mail").value;
    var contacto = document.getElementById("contacto").value;

    document.getElementById("show1").innerHTML = nombreApellido;
    document.getElementById("show2").innerHTML = edad;
    document.getElementById("show3").innerHTML = mail;
    document.getElementById("show4").innerHTML = contacto;

    objeto.apellido = nombreApellido;
    objeto.edad = edad;
    objeto.mail = mail;
    objeto.contacto = contacto;

    datosJson = JSON.stringify(objeto);
    localStorage.setItem("datos", datosJson);
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    var datosPerfil = JSON.parse(localStorage.getItem("datos"));
    document.getElementById("nombreApellido").innerHTML = datosPerfil.nombreApellido;
    document.getElementById("edad").innerHTML = datosPerfil.edad;
    document.getElementById("mail").innerHTML = datosPerfil.mail;
    document.getElementById("contacto").innerHTML = datosPerfil.contacto;
});