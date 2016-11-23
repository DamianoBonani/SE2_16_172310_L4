# SE2_16_172310_L4
progetto 2

Per testare il progetto è necessario eseguire il comando node index.js a treminale all'interno della directory del compito.

Una volta avviato si presenta una pagina composta da 3 parti:
	1. Parte per cercare un dipendente in base all'id
	2. Parte per eliminare un dipendente in base all'id
	3. Parte per inserire un dipendente

PARTE 1 (cerca)
Per testare questa funzionalità è necessario inserire un numero all'interno del campo di input e premere il bottone search.
Se l'operazione di ricercca trova un dipendete con il corrispondente id mostra i suoi dati, in caso contrario presenta il form per inserire un nuovo dipendente.
Se il campo di input non è valido viene mostrato un alert con un messaggio di errore. 

PARTE 2 (elimina)
Per testare questa funzionalità è necessario inserire un numero all'interno del campo di input e premere il bottone delete.
Se l'operazione di rimozione trova un dipendete con il corrispondente id lo elimina, in caso contrario non esegue alcuna operazione.
Se il campo di input non è valido viene mostrato un alert con un messaggio di errore. 

PARTE 3 (inserimento)
Per testare questa funzionalità è necessario compilare i vari campi di input e premere il bottone search.
Se l'operazione di inserimento trova un dipendete con il corrispondente id ne modifica le informazioni, in caso contrario memorizza il nuovo dipendente.
Se il campo di input dell'id è vuoto, il dipendente sarà memorizzato con un id assegnato via server.
Se i campi di input non sono validi viene mostrato un alert con un messaggio di errore. 


COMPOSIZIONE REPOSITORY

index.js: parte di server

/tpl/home.tpl: template per creare la pagina

/public/css/style.css: foglio di stile

/public/js/script.js: javascript con i controlli da fare lato client

/lib/lib.js: javascript con i controlli da fare lato server
