/*******************
javascipt
*******************/

var cerca_ok; // indica la validita del campo iIDSearch
var elimina_ok; // indica la validita del campo iIDDelete
var name_ok; // indica la validita del campo iName
var surname_ok; // indica la validita del campo iSurname
var level_ok; // indica la validita del campo iLevel
var salary_ok; // indica la validita del campo iSalary
var visibile; // indica se la parte di input è visibile

/**
* Inizializza le variabili e proprieta di base
* @param {Boolean} param che indica true (form visibile) oppure false (form onvisibile) 
*/
function init(param){
	visibile = param;
	if(visibile)
		document.getElementById("campiInserimento").className = "visibile"; //rendo visibile
	else
		document.getElementById("campiInserimento").className = "invisibile"; // rendo invisibile

	cerca_ok = false;
	elimina_ok = false;
	controlloName("iName");
	controlloSurname("iSurname");
	controlloLevel("iLevel");
	controlloSalary("iSalary");		
}

/**
* Funzione per la gestione della comparsa e scomparsa dei campi di input
*/
function controlloUploader(){
	resetta();
	if(visibile)
		document.getElementById("campiInserimento").className = "invisibile"; //rendo invisibile
	else
		document.getElementById("campiInserimento").className = "visibile"; // rendo visibile
	visibile=!visibile;
}
