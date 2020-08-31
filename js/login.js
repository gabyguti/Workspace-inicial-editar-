var button = document.getElementById("btn");

button.addEventListener("click", function() {

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario == "") {
        alert("Ingrese el usuario");
    } else if (contraseña == "") {
        alert("Ingrese la contraseña");
    } else {
        location.href = "index2.html"; //location.href toma la url actual y redirecciona el navegador a una página nueva
    }

    let data = sessionStorage.setItem('username', usuario); // toma los datos ingresados en el form Usuario
});