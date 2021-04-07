/* 
JavaScript / jQuery
web o pagina:
autor:Eduardo Jiménez Cobos
fecha: Marzo 2021
resumen:
*/


function clickCounter(){
  if(typeof(Storage) !== "undefined") {
	  
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.setItem("clickcount",1);
    }
$("#nVeces").text('Has cargado '+sessionStorage.clickcount+' veces la página del sitio');
}}



function migasI() {
$('#this_title').html('<strong>' + 'Inicio' + '</strong>')}
function migasA() {
$('#this_title').html('<strong>' + 'Actualidad' + '</strong>')}
 /*var href = $(location).attr('href');
 var actualidad = href.substring(href.indexOf("actualidad")+1);
 if(href.indexOf("index")!==-1){
	  $('#this_title').html('<strong>' + 'Inicio' + '</strong>')
 }else if(href.indexOf("actualidad")!==-1){
 $('#this_title').html('<strong>' + actualidad + '</strong>')
	 
 }

**/