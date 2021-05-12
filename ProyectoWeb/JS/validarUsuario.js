let usuarioRegistrado;
let zona;
let menu; 
let botonISesion;
let botonCSesion;
let width = $(window).width();
let heigth = $(window).height();



function abrirIniciarSesion(){
    window.open("../ProyectoWeb/HTML/inicio-sesion.html", "_self")
}

function cerrarSesion() {
    localStorage.removeItem('usuarioNombre');
    localStorage.removeItem('usuarioPass');
    localStorage.removeItem('usuario');
    location.reload();
}

var ajuste = function () {
    
    menu.setAttribute("style","position:static;margin-left:37%;overflow: hidden;background-color: #333;width:36%;" ); 
}

var ComprobacionInicio = function () {
    menu = document.getElementById("nvar");
    zona = document.getElementById("zonaUsuario");
    botonISesion = document.getElementById("botonInicioSesion");
    botonCSesion = document.getElementById("botonCerrarSesion");
    zona.style.display = 'none';
    botonISesion.style.display = 'inline';
    botonCSesion.style.display = 'none';

   if (localStorage.getItem("usuarioNombre") != null) {
       zona.style.display = 'inline';
       //aqui para ajustar a movil o no
       if (width > 750) {
       menu.setAttribute("style","position:static;margin-left:30%;overflow: hidden;background-color: #333;width:47%;");
       }
       if (width <= 750) {
           menu.setAttribute("style", "position:static;margin-left: 0.5%;overflow: hidden;background-color: #333;width: 85 %;");
       }
       botonISesion.style.display = 'none';
       botonCSesion.style.display = 'inline';
        
        
       
        

   } else {
       ajuste();
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




