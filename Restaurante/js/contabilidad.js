    const boton = document.getElementById("btnEnviar");

            boton.addEventListener("click", function(){

                alert("Registro guardado con éxito ");

                location.reload();

            });


const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function(){

    window.location.href = "../index.html";

});

const btnRegistro = document.getElementById("btnRegistro");

const btnLogin = document.getElementById("btnLogin");



btnRegistro.addEventListener("click", function(){

    window.location.href = "../Modulos/usuarios.html";

});



btnLogin.addEventListener("click", function(){

    window.location.href = "../Modulos/usuarios.html";

});

let ventas=document.getElementById("ventas").value;
let fecha_contabilidad=document.getElementById("fecha").value;
let ingresos=document.getElementById("ingresos").value;
let egresos=document.getElementById("egresos").value;
let concepto=document.getElementById("concepto").value;
let valor=document.getElementById("valor").value;

function ValidarDatos(){
    if (ventas== "" ||fecha== "" ||ingresos== "" ||egresos== "" ||concepto== "" ||valor== "" ){
    console.log("Los campos no pueden estar vacios")
    }
    else{
            if(ventas ==/[a-zA-Z]/){
                console.log("Los datos son incorrectos")
            }
            if(ingresos ==/[a-zA-Z]/){
                console.log("Los datos son incorrectos")
            if(egresos ==/[a-zA-Z]/){
                console.log("Los datos son incorrectos")
            }
            if(valor ==/[a-zA-Z]/){
                console.log("Los datos son incorrectos")
            }



        }
    }
}
