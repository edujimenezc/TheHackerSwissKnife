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
$("#nVeces").text('Has cargado '+sessionStorage.clickcount+' veces '+'  la página del sitio');
}}



function migasI() {
$('#this_title').html('<strong>' + 'Inicio' + '</strong>')}
function migasP() {
$('#this_title').html('<strong>' + 'Project Spanish Vector' + '</strong>')}
function migasB() {
$('#this_title').html('<strong>' + 'Blog' + '</strong>')}
function migasC() {
$('#this_title').html('<strong>' + 'Contacto' + '</strong>')} 
