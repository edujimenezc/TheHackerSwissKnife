let usuarioRegistrado;

var ComprobacionInicio = function () {
    console.log(localStorage.getItem("usuarioNombre"));
    if (localStorage.getItem("usuarioNombre") != null) {
        
        alert("Sesión iniciada correctamente");
    } else {
        alerta();
    }
}





var alerta = function () {

    swal({
        title: "¡Bienvenido!",
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




