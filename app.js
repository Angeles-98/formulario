
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
    }
}

const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contSelect = document.querySelector('#select .contenido-select');
const input = document.querySelector('#input-select');

// por cada una de las opciones ejecuta funcion tipo flecha
document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
   // nos dice cual opcion recibe click
   opcion.addEventListener('click', (e) => {
     e.preventDefault();
     // copia codigo de opcion y le pega en contenido select
     contSelect.innerHTML = e.currentTarget.innerHTML;
     select.classList.toggle('active');
     opciones.classList.toggle('active');
     input.value = e.currentTarget.querySelector('.leng').innerText;
     // traduce en texto
     let lang = input.value;
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
   });
});

// funcion tipo flecha, ese ejecuta al hacer click
select.addEventListener('click', () => {
    // accede a lista de clases (toggle)pone o quita la funcion
    select.classList.toggle('active');
    opciones.classList.toggle('active');
});




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
        input.value = e.currentTarget.querySelector('.leng').innerText;
        let lang = input.value;
    if(name.value.length <6){
        if (lang===('ES')) {
            warnings += `Nombre no valido <br>`;
            enviar = true;
        }if (lang===('EN')) {
         warnings += `Invalid name <br>`;
            enviar = true;
       }
    }
    if(!regexEmail.test(email.value)){
        if (lang===('ES')) {
            warnings += `Email no valido <br>`;
            enviar = true;
        }if (lang===('EN')) {
         warnings += `Invalid e-mail <br>`;
            enviar = true;
       }
    }
    if(password.value.length < 8){
        if (lang===('ES')) {
            warnings += `Contraseña no valida <br>`;
            enviar = true;
        }if (lang===('EN')) {
         warnings += `Invalid password <br>`;
            enviar = true;
       }
    }

    if(!document.querySelector("input[name=genero]:checked")){
        if (lang===('ES')) {
            warnings += `Debe seccionar un genero <br>`;
            enviar = true;
        }if (lang===('EN')) {
                 warnings += `You must section a gender <br>`;
            enviar = true;
       }
    }

    if(!aceptar.checked){
        if (lang===('ES')) {
            warnings += `No ha aceptado los terminos <br>`;
            enviar = true;
        }if (lang===('EN')) {
         warnings += `You have not accepted the terms <br>`;
            enviar = true;
       }
    }

    if(enviar){
        parrafo.innerHTML = warnings;
    }else{
        if (lang===('ES')) {
            parrafo.innerHTML = "Envio exitoso";
            enviar = true;
        }if (lang===('EN')) {
         parrafo.innerHTML = "Successful shipping";
            enviar = true;
       }
    }

});


