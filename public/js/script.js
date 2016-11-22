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

/**
* Resetta le variabili necessari per la validazione dei campi di input
*/
function resetta(){

	document.getElementById("iIDSearch").value="";
	document.getElementById("iIDDelete").value="";	
	document.getElementById("iID").value="";
	document.getElementById("iName").value="";
	document.getElementById("iSurname").value="";
	document.getElementById("iLevel").value="";
	document.getElementById("iSalary").value="";
	cerca_ok = false;
	elimina_ok = false;
	name_ok = false;
	surname_ok = false;
	level_ok = false;
	salary_ok = false;
}

/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloElimina(){
	elimina_ok = controlloValidita("iIDDelete");
	var ok =elimina_ok;
	
	if(ok)
		document.getElementById("delete").submit();
	else
		alert("Form incomplete");	
}

/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloCerca(){
	cerca_ok = controlloValidita("iIDSearch");
	var ok = cerca_ok;
	if(ok)
		document.getElementById("search").submit();
	else
		alert("Form incomplete");	
}

/**
* Controlla se fare il submit del form oppure da un messaggio di errore
*/
function controlloInvia(){
	controlloName("iName");
	controlloSurname("iSurname");
	controlloLevel("iLevel");
	controlloSalary("iSalary");
	var ok = name_ok && surname_ok && level_ok && salary_ok;
	if(ok)
		document.getElementById("insert").submit();
	else
		alert("Form incomplete");	
}

/**
* Controlla se il campo di input è valido
* @param {String} id che indica il rispettivo campo di input
* @return true se è valido
* @return false se non è valido
*/
function controlloValidita(id){
	oggetto=document.getElementById(id);
	if(oggetto.value!="")
		return true;
	else
		return false;
			
}
