const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function () {

    window.location.href = "../index.html";

});




function ValidarDatos() {

    let producto = document.getElementById("producto").value;
    let direccion = document.getElementById("direccion").value;
    let nombre_usuario = document.getElementById("nombre_usuario").value;
    let cantidad = document.getElementById("cantidad").value;
    let metodo = document.getElementById("metodo").value;
    let telefono = document.getElementById("telefono").value;


    if (producto == "" || direccion == "" || nombre_usuario == "" || cantidad == "" || metodo == "" || telefono == "") {
        Swal.fire({
            imageUrl: "../Campos_maluma.png",
            imageWidth: 400,
            imageAlt: "Campos vacíos"
        });

        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(producto)) {
        Swal.fire({
            title: "Error",
            text: "El nombre del producto solo puede contener letras.",
            imageUrl: "../Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre_usuario)) {
        Swal.fire({
            title: "Error",
            text: "El nombre del usuario solo puede contener letras.",
            imageUrl: "../Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }
    if (!/^\d+$/.test(cantidad)) {

        Swal.fire({
            title: "Error",
            text: "La cantidad del producto solo puede contener números.",
            imageUrl: "../Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(metodo)) {
        Swal.fire({
            title: "Error",
            text: "El nombre del usuario solo puede contener letras.",
            imageUrl: "../Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }
    if (!/^\d+$/.test(telefono)) {

        Swal.fire({
            title: "Error",
            text: "El telefono del usuario solo puede contener números.",
            imageUrl: "../Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }
    Swal.fire({
        title: "¡Correcto!",
        text: "Todos los datos fueron ingresados correctamente.",
        imageUrl: "../Bien_maluma.png",
        imageWidth: 400,
        imageAlt: "Todo está bien",
        confirmButtonText: "Aceptar"
    });


}
document.getElementById("btnEnviar").onclick = ValidarDatos;
