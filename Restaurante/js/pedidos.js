const boton = document.getElementById("btnEnviar");

boton.addEventListener("click", function () {

    alert("Registro guardado con éxito ");

    location.reload();

});


const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function () {

    window.location.href = "../index.html";

});


let producto = document.getElementById("producto").value;
let direccion = document.getElementById("direccion").value;
let nombre_usuario = document.getElementById("nombre_usuario").value;
let cantidad = document.getElementById("cantidad").value;
let metodo = document.getElementById("metodo").value;
let telefono = document.getElementById("telefono").value;

function ValidarDatos() {
    if (producto == "" || direccion == "" || nombre_usuario == "" || cantidad =="" || metodo == "" || telefono == "") {
        console.log("Los datos no pueden estar vacios")
    }
    else {
        if (producto != /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (nombre_usuario != /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (cantidad == /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (metodo == /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
        if (telefono == /[a-zA-Z]/) {
            console.log("Los datos son incorrectos")
        }
    }
}

