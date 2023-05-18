<?php
include 'databaseFunctions.php';

$connessione = openConnection();

//createTable($connessione, 'anagrafica', 'clienti');

//insertIntoAnagrafica($connessione, "mario", "rossi", 34, true);

/*$nome="Mario";
$rows=selectAnagrafica($connessione,$nome,true);
foreach($rows as $row){
   echo $row ["nome"].'|'.$row["cognome"].'|'.$row["eta"]."\n";
}*/

$nome="Mario";
$id = 1;
updateAnagrafica($connessione,$nome,$id);
mysqli_close($connessione);