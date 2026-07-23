const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function () {

    window.location.href = "../index.html";

});

function ValidarDatos() {

    let nombre_usuarios = document.getElementById("nombre_usuarios").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.querySelector('input[name="tipo_documento"]:checked');
    let documento = document.getElementById("documento").value;
    let telefono_usuarios = document.getElementById("telefono_usuarios").value;
    let email = document.getElementById("email").value;
    let genero = document.getElementById("genero").value;
    let cargo = document.getElementById("cargo").value;
    let password = document.getElementById("password").value;
    let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;

    if (
        nombre_usuarios == "" ||
        apellido == "" ||
        tipoDocumento == null ||
        documento == "" ||
        telefono_usuarios == "" ||
        email == "" ||
        genero == "" ||
        cargo == "" ||
        password == "" ||
        fecha_nacimiento == ""
    ) {

        Swal.fire({
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Campos_maluma.png",
            imageWidth: 400,
            imageAlt: "Campos vacíos"
        });

        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre_usuarios)) {

        Swal.fire({
            title: "Error",
            text: "El nombre solo puede contener letras.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(apellido)) {

        Swal.fire({
            title: "Error",
            text: "El apellido solo puede contener letras.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^\d+$/.test(documento)) {

        Swal.fire({
            title: "Error",
            text: "El documento solo puede contener números.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (documento.length > 10) {

        Swal.fire({
            title: "Error",
            text: "El documento no puede tener más de 10 dígitos.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^\d+$/.test(telefono_usuarios)) {

        Swal.fire({
            title: "Error",
            text: "El teléfono solo puede contener números.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (telefono_usuarios.length != 10) {

        Swal.fire({
            title: "Error",
            text: "El teléfono debe contener exactamente 10 dígitos.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        Swal.fire({
            title: "Error",
            text: "Ingrese un correo electrónico válido.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    if (!/^[a-zA-Z\s]+$/.test(cargo)) {

        Swal.fire({
            title: "Error",
            text: "El cargo solo puede contener letras.",
            imageUrl: "/programacion_procedimental/Restaurante/imagenes/Mal_maluma.png",
            imageWidth: 400,
            imageAlt: "Error",
            confirmButtonText: "Aceptar"
        });

        return;
    }

    Swal.fire({
        title: "¡Correcto!",
        text: "El usuario fue registrado correctamente.",
        imageUrl: "/programacion_procedimental/Restaurante/imagenes/Bien_maluma.png",
        imageWidth: 400,
        imageAlt: "Correcto",
        confirmButtonText: "Aceptar"
    });

}

document.getElementById("btnGuardar").onclick = ValidarDatos;