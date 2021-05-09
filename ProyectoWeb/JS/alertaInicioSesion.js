let usuario = [];

var getNombre = function () {

	var name = document.getElementById("usuario").value;



	return name;




}

var getPass = function () {


	var pass = document.getElementById("contrasenia").value;



	return pass;



}
var getData = function () {
	getNombre();
	getPass();
	validarXML()
}

let registrados = [];
let nombre = getNombre();
let pass = getPass();

function validarXML() {
	
	
	// lee desde aquí.
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			 miFuncion(this);
		
		}
	};
	xhr.open("GET", "https://github.com/edujimenezc/Publico/blob/main/ProyectoWeb/XML/registrados.xml", true);
	xhr.send();
}

function miFuncion(xml) {
	var i;
	var usrNom;
	var usrPsw;
	
	var xmlDoc = xml.responseXML;
	var x = xmlDoc.getElementsByTagName("usuario");
	
	
	
	//var tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
	for (i = 0; i < x.length; i++) {
		// leo las etiquetas que me interesan del objeto
		usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
		usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

		console.log(usrNom + " " + usrPsw);
		// actualizo la tabla de visualización

		if (usrNom == getNombre() && usrPsw == getPass()) {
			usuario[0] = usrNom;
			usuario[1]= usrPsw;
			localStorage.setItem("usuario", usuario);
			usuarioRegistrado = localStorage.getItem("usuario");
			console.log("USUARIO CORRECTO");
			localStorage.setItem("usuarioNombre", usuario[0]);
			 
			localStorage.setItem("usuarioPass", usuario[1]);
			  
			
			alert("Usuario y contraseña correctos");
			
			
			
			
			window.open("../index.html", "_self")
		
			
						
			break;
		} else {
			/*alert("USUARIO INCORRECTO");
			console.log("USUARIO INCORRECTO");
			break;*/

		}

		// actualizo el array bidimensional con los usuarios registrados
		usuario = [usrNom, usrPsw];
		registrados.push(usuario);

	}

	// document.getElementById("contenidoXML").innerHTML = tabla;

	// muestro en consola el array de usuarios registrados
	registrados.forEach((usuario) => {
		usuario.forEach((datos) => {
			console.log(datos);
		});
	});
	
}


