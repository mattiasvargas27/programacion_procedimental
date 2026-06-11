const boton = document.getElementById("btnEnviar");

    boton.addEventListener("click", function() {
        alert(" Inventario Registrado con éxito");
        location.reload();
    });


const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function(){

    window.location.href = "../index.html";

});

let codigo=document.getElementById("codigo").value;
let nombre_producto=document.getElementById("nombre_producto").value;
let cantidad_inventario=document.getElementById("cantidad_inventario").value;
let marca=document.getElementById("marca").value;


function ValidarDatos(){
    if (codigo=="" || nombre_producto=="" || cantidad_inventario=="" || marca==""){
        console.log("Los datos no pueden estar vacios")
    }
    else{
        if(codigo ==/[a-zA-Z]/){
            console.log("Los datos son incorrectos")
        }
        if(nombre_producto != /[a-zA-Z]/){
            console.log("Los datos son incorrectos")
        }
        if(cantidad_inventario==/[a-zA-Z]/){
            console.log("Los datos son incorrectos")
        }
        if(marca != /[a-zA-Z]/){
            console.log("Los datos son incorrectos")
        }        
    }
    }

