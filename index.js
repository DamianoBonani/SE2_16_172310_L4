/*******************
server
*******************/

//express lib
var express = require('express');
//inspect
var util = require('util');
//instantiate express
var app = express();
//POST
var bodyParser = require('body-parser');
//for templates
var bind = require('bind');

var miomodulo = require('./lib/lib.js');
app.use(express.static(__dirname + '/public')); // serve per far funzionare il collegamento dei js e css

/******************************************************************************************************
CREAZIONE TEMPLATE
******************************************************************************************************/
//listen in a specific port
app.set('port', (process.env.PORT || 1337));
//create a server
app.get('/', function(req, res) {
	//bind to template
	bind.toFile('tpl/home.tpl', {
        //set up parameters
		visibile : false,
		id_search: '',
		id_delete: '',
        id: '',
        name: '',
		surname: '',
		level: '',
		salary: ''

    }, 
    function(data){
        //write response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

