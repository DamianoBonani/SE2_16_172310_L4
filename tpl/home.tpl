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
    
    <hr>
	<button onclick="controlloUploader()" id="mostraPulsanti">Insert Employee </button>
	 
    <div id="campiInserimento" class="">
        <form id="insert" action="/insert" method="post">
            <div>
                <label for="iID">ID</label>
                <br>
                <input type="number" id="iID" name="iID" placeholder="Insert an ID" value="(:id:)">
            </div>
            <div>
                <label for="iName">Name</label>
                <br>
                <input type="text" id="iName" name="iName" placeholder="Insert a name" value="(:name:)">
            </div>
            <div>
                <label for="iSurname">Surname</label>
                <br>
                <input type="text" id="iSurname" name="iSurname" placeholder="Insert a surname"  value="(:surname:)">
            </div>
            <div>
                <label for="iLevel">Level</label>
                <br>
                <input type="number" id="iLevel" name="iLevel" placeholder="Insert a level"  value="(:level:)">
            </div>
            <div>
                <label for="iSalary">Salary</label>
                <br>
                <input type="number" id="iSalary" name="iSalary" placeholder="Insert a salary" value="(:salary:)">
            </div>
            <br>
            <input type="button" id="btnSubmit" onclick="controlloInvia()" value="Submit">
            <input type="button" id="btnReset" value="Reset" onclick="resetta()">
        </form>
	</div>


</body>
    
</html>
