const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function () {

    window.location.href = "../index.html";

});

const btnRegistro = document.getElementById("btnRegistro");

const btnLogin = document.getElementById("btnLogin");



btnRegistro.addEventListener("click", function () {

    window.location.href = "../Modulos/usuarios.html";

});
btnLogin.addEventListener("click", function () {

    window.location.href = "../Modulos/usuarios.html";

});





function ValidarDatos() {

    let ventas = document.getElementById("ventas").value;
    let fecha_contabilidad = document.getElementById("fecha").value;
    let ingresos = document.getElementById("ingresos").value;
    let egresos = document.getElementById("egresos").value;
    let concepto = document.getElementById("concepto").value;
    let valor = document.getElementById("valor").value;

    if (ventas == "" || fecha_contabilidad == "" || ingresos == "" || egresos == "" || concepto == "" || valor == "") {

        Swal.fire({
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Campos_maluma.png",
            imageWidth: 400,
            imageAlt: "Campos vacíos"
        });

        return;
    }

    if (!/^\d+$/.test(ventas)) {

        Swal.fire({
            title: "Error",
            text: "Las ventas solo pueden contener números.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^\d+$/.test(ingresos)) {

        Swal.fire({
            title: "Error",
            text: "Los ingresos solo pueden contener números.",
            imageUrl: "../programacion_procedimental/Restaurante/imagenes/Bien_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^\d+$/.test(egresos)) {

        Swal.fire({
            title: "Error",
            text: "Los egresos solo pueden contener números.",
            imageUrl: "../programacion_procedimental/Restaurante/imagenes/Bien_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(concepto)) {

        Swal.fire({
            title: "Error",
            text: "El concepto solo puede contener letras.",
            imageUrl: "../programacion_procedimental/Restaurante/imagenes/Bien_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^\d+$/.test(valor)) {

        Swal.fire({
            title: "Error",
            text: "El valor solo puede contener números.",
            imageUrl: "../programacion_procedimental/Restaurante/imagenes/Bien_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    Swal.fire({
        title: "¡Correcto!",
        text: "El registro contable fue guardado correctamente.",
        imageUrl: "/programacion_procedimental/Restaurante/imagenes/Bien_maluma.png",
        imageWidth: 400,
        imageAlt: "Todo está bien",
        confirmButtonText: "Aceptar"
    });

}

document.getElementById("btnEnviar").onclick = ValidarDatos;