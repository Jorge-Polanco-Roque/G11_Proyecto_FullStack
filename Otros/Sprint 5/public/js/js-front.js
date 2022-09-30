
//console.log("Soy un JS que está desde el front");
//console.log("Me mudé a un archivo js por aparte!");

//let p_css = document.querySelector('p');
//console.log(p_css);

//en consola: window.document.bgColor = "green"

//let losparrafos = document.querySelectorAll('p');

//for (const unParrafor of losparrafos) {
//    console.log(unParrafor);
//}

//window.onload = function(){}

//let confirmarCambios = confirm('¿Te gusta el verde?');

//if (confirmarCambios) {

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Este es un título muy <i>poderoso</i>';
//console.log(titulo.innerHTML);

//titulo.style.backgroundColor = 'green';
//titulo.style.fontSize = '100 px';
//}

//titulo.classList.add('algo');
//titulo.classList.remove('algo');
//titulo.classList.toggle('algo'); //si existe, agregar!

window.addEventListener("load", function(){
    let titulo = document.querySelector("h1");
    let imagen = document.querySelector("img.img");
    let texto = document.querySelectorAll("p");
    let formulario = document.querySelector("form-container");
    //let nombre = prompt("¿Cuál es tu nombre?");


    titulo.addEventListener("mouseover", function(){
        let confirmarCambios = confirm('¿Puedes guardar un secreto');

        if(confirmarCambios){
            let alerta = alert("Prefiero el logo en verde :D")
            titulo.style.backgroundColor = 'green';
        }
    })

    imagen.addEventListener("click", function(){
        imagen.style.backgroundColor = prompt("Dime tu color favorito (in inglish pliz) :D")
    })

    for (let i = 0; i < texto.length; i++){
        texto[i].addEventListener("click", function(){
            this.style.color = "Purple"
        })
    }

    window.addEventListener("keypress", function(e){
        if (e.key == "Enter") {
            alert("Ouch!")
        }
    })

    imagen.addEventListener("focus", function(){
        imagen.style.backgroundColor = prompt("Dime tu color favorito (in inglish pliz) :D")
    })

    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        
        let campoNombre = document.querySelector("input.product_creation")

        if (campoNombre.value == "") {
            alert("Se quiere llenar este campo")
        }
        else {
            console.log("OK")
        }
    })

    //document.querySelector(".bienvenida").innerHTML = "Hola" + nombre;
    


})


