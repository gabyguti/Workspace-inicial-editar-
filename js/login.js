//Validación Login (Entrega 1, Grupal)
var button = document.getElementById("btn");

button.addEventListener("click", function() {

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario == "") {
        document.getElementById("usuariox").style.display = "block"; //"Complete el campo" tenía hasta ahora style.display="none" en index.html, pero si el usuario es " ", aparece el mensaje
    } else if (contraseña == "") {
        document.getElementById("contrax").style.display = "block";
        document.getElementById("usuariox").style.display = "none";
    } else {
        location.href = "index2.html"; //location.href toma la url actual y redirecciona el navegador a una página nueva
    }
    let data = window.sessionStorage.setItem("username", usuario); // toma los datos ingresados en el form Usuario
});