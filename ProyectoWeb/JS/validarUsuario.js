let validado;
let comp = false;
function guardar_localStorage(comp2) {

    localStorage.setItem("comp", comp2);
}

function obtener_localStorage() {

    return localStorage.getItem("comp");
}




var inicioSesionONo = function () {

    guardar_localStorage(comp);
    validado = obtener_localStorage();

    console.log(validado);
    if (validado == "false") {
        alerta();

    } else {
        console.log("la sesion está iniciada ")
        console.log(nombre);
    }//ahora mostrar la parte oculta

}




var alerta = function () {

    swal({
        title: "¡Biemvenido!",
        text: "¿Deseas iniciar sesión o seguir navegando como invitado?",

        buttons: {
            //con go me lleva a iniciar sesión ,sino se cierra el alert
            go: {
                text: "Iniciar sesión",
                value: "go",
            },
            cancel: "Continuar como invitado",
        }
    })
        .then((value) => {
            switch (value) {

                case "go":
                    window.open("../ProyectoWeb/HTML/inicio-sesion.html", "_self")
                    break;


            }
        });


}




