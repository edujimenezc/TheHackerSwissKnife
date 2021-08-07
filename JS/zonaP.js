let clicks = 0;
window.onload = function(){
    escribir();
}

function escribir() {
    document.getElementById('nombreDelUsuario').innerHTML = "Hola "+localStorage.getItem("usuarioNombre")+"!" ;

}



function cambiarFondo() {

    clicks += 1
    console.log(clicks);
    if (clicks == 1) {
        document.body.style.backgroundImage = "url('../SOURCES/imagenes/fondoAzul.jpg')";

        console.log(clicks);
    }
    if (clicks == 2) {
        document.body.style.backgroundImage = "url('../SOURCES/imagenes/fondoMetalBarras.jpg')";

        console.log(clicks);
    }
    if (clicks == 3) {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "red";

        console.log(clicks);
    }
    if (clicks == 4) {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "black";
        
    }
    if (clicks == 5) {
        document.body.style.backgroundImage = "url('../SOURCES/imagenes/fondoRaro.jpeg')";
        document.body.style.backgroundColor = "yellow";
        
    }
    if (clicks == 6) {
        document.body.style.backgroundImage = "url('../SOURCES/imagenes/fondoRojo.png')";
        document.body.style.backgroundColor = "black";
        clicks = 0;
    }
}
