const botonInicio = document.getElementById("btnInicio");

botonInicio.addEventListener("click", function(){

    window.location.href = "../index.html";

});

let nombre_usuarios=document.getElementById("nombre_usuarios").value;
let apellido=document.getElementById("apellido").value;
let TI=document.querySelector('input[name="TI"]:checked').value;
let CC=document.querySelector('input[name="CC"]:checked').value;
let documento=document.getElementById("documento").value;
let telefono_usuarios=document.getElementById("telefono_usuarios").value;
let email=document.getElementById("email").value;
let genero=document.getElementById("genero").value;
let cargo=document.getElementById("cargo").value;
let password = document.getElementById("password").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;



if (nombre_usuarios== "" ||apellido== "" ||documento== "" ||telefono_usuarios== "" ||email== "" ||cargo== "" || password== "" ){
    console.log("Los campos no pueden estar vacios")
}
else{
    if(nombre_usuarios != /[a-zA-Z]/){
        console.log("Los datos son incorrectos")
    }
    if(apellido != /[a-zA-Z]/){
        console.log("Los datos son incorrectos")
    }

    if(documento.length() >=10){
        console.log("Los datos son incorrectos")
    }
    if(telefono_usuarios.length() >=10){
        console.log("Los datos son incorrectos")
    }
    if(email != /[@]/){
        console.log("Los datos son incorrectos")
    }
    if(cargo != /[a-zA-Z]/){
        console.log("Los datos son incorrectos")
    }
    if(cargo != /[a-zA-Z]/){
        console.log("Los datos son incorrectos")
    }
    
}