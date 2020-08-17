var usuario = document.getElementById("usuario");
var contraseña = document.getElementById("contraseña");

var button = document.getElementById("btn");

button.addEventListener("click", function() {

    if (usuario.value == "") {
        alert("Ingrese el usuario");
    } else if (contraseña.value == "") {
        alert("Ingrese la contraseña");
    } else {
        localStorage.setItem("dato1", usuario.value);
        localStorage.setItem("dato2", contraseña.value);
        location.href = "index2.html"; //location.href toma la url actual y redirecciona el navegador a una página nueva

    }
});