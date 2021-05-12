let usuario = [];

function registrarse() {

	alert("Esto es una version de prueba, tus datos se guardarán en LocalStorage por lo que si cierras sesión deberás registrarte de nuevo")
	
	
	
	usuario[0] = document.getElementById("usuarioR").value;
	usuario[1] = document.getElementById("contraseniaR").value;
	localStorage.setItem("usuarioNombre", usuario[0]);
	localStorage.setItem("usuarioPass", usuario[1]);
	localStorage.setItem("usuario", usuario);
	localStorage.getItem("usuario");
	if (localStorage.getItem("usuario") != null) {
		window.open("../index.html", "_self");
	}
	
	
}