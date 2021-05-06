


var getNombre = function() {
	
	var name = document.getElementById("usuario").value;
	
	
	
	return name;
	
	
	
	
}

var getPass = function() {
	
	
	var pass = document.getElementById("contrasenia").value;
	
	
	
	return pass;
	
	
	
}
var getData = function(){
	getNombre();
	getPass();
	validarXML()
}

let registrados = [];
let nombre = getNombre();
let pass = getPass();

function validarXML() {
  console.log("Qui empieza la funcion del boni");
  // lee desde aquí.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		console.log("Qui empieza la funcion del boni2222");
      miFuncion(this);
    }
  };
  xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados.xml", true);
  xhr.send();
}

function miFuncion(xml) {
  var i;
  var usrNom;
  var usrPsw;
  var usuario = [];
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("usuario");
  var logueado = false;
  
  //var tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
  for (i = 0; i <x.length; i++) { 
	// leo las etiquetas que me interesan del objeto
	usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
	usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
    
	console.log(usrNom+" "+usrPsw);
	// actualizo la tabla de visualización
	
	if (usrNom == getNombre() && usrPsw == getPass()) {
      console.log("USUARIO CORRECTO");
	  logueado=true;
		alert("Usuario y contraseña correctos");
		window.open("../index.html","_self");
	  break;
    }else{
		console.log("USUARIO INCORRECTO");
		
	}
	
	// actualizo el array bidimensional con los usuarios registrados
	usuario = [usrNom,usrPsw];
	registrados.push(usuario);
	
  }
  
 // document.getElementById("contenidoXML").innerHTML = tabla;
  
  // muestro en consola el array de usuarios registrados
	registrados.forEach((usuario) => {
		usuario.forEach((datos) => {
			console.log(datos);
		});
	});
	if (logueado == false){
		alert("Usuario y contraseña incorrectos");
		
	}
		
}


