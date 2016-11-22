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

/*
* Cerca un appropriato id se non è stato inserito in fase di compilazione del form
* @return id 
*/
var setId = function(){
	var id=0;
	for (var i=0; i < listaDipendenti.length; i++) {
        if (listaDipendenti[i].id > id) {
            id = listaDipendenti[i].id;
        }
    }
	id++;
	return id; 
}

/*
* Inserisce un elemento dipendente nell'array listaDipendenti
* @param {Object} dipendente che contiene i valori da mettere nell'array
*/
var aggiungiDipendente = function(dipendente){
	listaDipendenti.push(dipendente);
};

/*
* Modifica un elemento dipendente nell'array listaDipendenti
* @param {Object} dipendente che contiene i valori da modificare nell'array
* @param {Integer} posizione indica la posizione del dipendente da modificare
*/
var modificaDipendente = function(dipendente,posizione){
	listaDipendenti[posizione] = dipendente;
};

/*
* Cerca una elemento nell'array listaDipendenti
* @param {Integer} id da cercare
* @return pos indica la posizione in cui è presente
* @ return -1 se non è presente
*/
var cercaDipendente = function(id){
	var pos = -1;
	for (var i=0; i < listaDipendenti.length; i++) {
		if (listaDipendenti[i].id == id) {
		    pos = i;
		}
    }
	return pos;
};
