let clicks = 0;
window.onload = function(){
    escribir();
}

function escribir() {
    document.getElementById('nombreDelUsuario').innerHTML = "Bienvenido " + localStorage.getItem("usuarioNombre") + " !";

}



function cambiarFondo() {

    clicks += 1
    console.log(clicks);
    if (clicks == 1) {
        document.body.style.backgroundColor = "blue";

        console.log(clicks);
    }
    if (clicks == 2) {
        document.body.style.backgroundColor = "green";

        console.log(clicks);
    }
    if (clicks == 3) {
        document.body.style.backgroundColor = "red";

        console.log(clicks);
    }
    if (clicks == 4) {
        document.body.style.backgroundColor = "black";
        clicks = 0;
    }
}
