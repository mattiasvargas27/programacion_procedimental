const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function () {

    window.location.href = "../index.html";

});



function ValidarDatos() {

    let codigo = document.getElementById("codigo").value;
    let nombre_producto = document.getElementById("nombre_producto").value;
    let cantidad_inventario = document.getElementById("cantidad_inventario").value;
    let marca = document.getElementById("marca").value;

    if (codigo == "" || nombre_producto == "" || cantidad_inventario == "" || marca == "") {

        Swal.fire({
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Campos_maluma.png",
            imageWidth: 400,
            imageAlt: "Campos vacíos"
        });

        return;
    }

    if (!/^\d+$/.test(codigo)) {

        Swal.fire({
            title: "Error",
            text: "El código del producto solo puede contener números.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre_producto)) {

        Swal.fire({
            title: "Error",
            text: "El nombre del producto solo puede contener letras.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^\d+$/.test(cantidad_inventario)) {

        Swal.fire({
            title: "Error",
            text: "La cantidad del producto solo puede contener números.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(marca)) {

        Swal.fire({
            title: "Error",
            text: "La marca del producto solo puede contener letras.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Algo está mal",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    Swal.fire({
        title: "¡Correcto!",
        text: "Todos los datos fueron ingresados correctamente.",
        imageUrl: "/programacion_procedimental/Restaurante/imagenes/Bien_maluma.png",
        imageWidth: 400,
        imageAlt: "Todo está bien",
        confirmButtonText: "Aceptar"
    });

}

document.getElementById("btnEnviar").onclick = ValidarDatos;