<?php // FUNZIONE PER CONNETTERSI AL DATABASE, CAMBIARE PASSWORD E HOST IN BASE ALLE ESIGENZE
function connessione()
{
    $host = "localhost";
    $username = "root";
    $password = "13591359";
    $dbname = "progetto";
    $conn = new mysqli($host, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connessione fallita: " . $conn->connect_error);
    }
    return $conn;
}
