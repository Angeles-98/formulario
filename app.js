const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings"); 


form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let enviar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if(name.value.length <6){
        warnings += `Nombre no valido <br>`;
        enviar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `Email no valido <br>`;
        enviar = true;
    }
    if(password.value.length < 8){
        warnings += `Contraseña no valida <br>`;
        enviar = true;
    }

    if(enviar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Envio exitoso";
    }
})