   const boton = document.getElementById("btnEnviar");

        boton.addEventListener("click", function(){

            alert("Registro guardado con éxito ");

            location.reload();

        });


const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function(){

    window.location.href = "../index.html";

});
