


let lenguaje ={
    "ES":{
        "regis":"Registro",
        "name":"Nombre",
        "email":"Email",
        "pass":"Contraseña",
        "genero":"Genero",
        "fem":"Femenino",
        "mas":"Masculino",
        "terminos":"Acepto los Terminos y Condiciones de la Política de proteccion de datos.",
        "boton":"Registrarte"
    },
    "EN":{
        "regis":"Registry",
        "name":"Name",
        "email":"E-mail",
        "pass":"Password",
        "genero":"Gender",
        "fem":"Female",
        "mas":"Male",
        "terminos":"I accept the Terms and Conditions of the Data Protection Policy.",
        "boton":"Sing up"
    },
    "FR":{
        "regis":"Registry",
        "name":"Name",
        "email":"E-mail",
        "pass":"Password",
        "genero":"Gender",
        "fem":"Female",
        "mas":"Male",
        "terminos":"I accept the Terms and Conditions of the Data Protection Policy.",
        "boton":"Sing up"
    }
}

$('.idioma').click(function(){
        let lang = $(this).val();
        console.log(lang);
      $('.traduce').each(function(index,value){
        $(this).text(lenguaje[lang][$(this).attr('key')]);
      });//fin each
      $('.text').each(function(index,value){
        $(this).text(lenguaje[lang][$(this).attr('key')]);
      });//fin each
      $('.gen-m').each(function(index,value){
        $(this).text(lenguaje[lang][$(this).attr('key')]);
      });//fin each
      $('.gen-f').each(function(index,value){
        $(this).text(lenguaje[lang][$(this).attr('key')]);
      });//fin each
    });//fin click





const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const aceptar = document.getElementById("aceptar");
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

    if(!document.querySelector("input[name=genero]:checked")){
        warnings += `Debe seccionar un genero <br>`;
        enviar = true;
    }

    if(!aceptar.checked){
        warnings += `No ha aceptado los terminos <br>`;
        enviar = true;
    }

    if(enviar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Envio exitoso";
    }

});


