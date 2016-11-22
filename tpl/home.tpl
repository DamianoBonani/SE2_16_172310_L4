<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title> Progetto 2 </title>

</head>
<body >
 
    <center>
	<h2><b>Progetto 2</b></h2>
    </center>
    
    <div id="campoRicerca">
    	<form id="search" action="/search" method="post">
        	<label for="iIDSearch">Search by ID</label>
            	<input type="number" id="iIDSearch" name="iIDSearch" placeholder="Insert an ID" value="(:id_search:)">
        	<input type="button" id="btnSearch" value="Search" onclick="controlloCerca()">
            <input type="button" value="Reset" onclick="resetta()">
        </form>
    </div>
    
    <br>
    <div id="campoElimina">
    	<form id="delete" action="/delete" method="post">
        	<label for="iIDDelete">Delete by ID</label>
            	<input type="number" id="iIDDelete" name="iIDDelete" placeholder="Insert an ID" value="(:id_delete:)">
        	<input type="button" id="btnDelete" value="Delete" onclick="controlloElimina()">
            <input type="button" value="Reset" onclick="resetta()">
        </form>
    </div>


</body>
    
</html>
