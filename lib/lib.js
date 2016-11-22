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
