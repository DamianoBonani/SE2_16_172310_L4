/***************
javascript server
***************/

var listaDipendenti = new Array(); // array dei dipendenti

/*
* Inizializa un elemento base per l'array listaDipendenti
* @return dipendente 
*/
var init = function(){
	var dipendente = {
		id: "",
		name: "",
		surname: "",
		salary: "",
		level: ""
	};
	return dipendente;
};
