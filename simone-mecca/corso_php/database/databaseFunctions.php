<?php

function openConnection($dbname = 'clienti')
{

    $host = "localhost";

    $username = "root";

    $password = "13591359";

    $connection = mysqli_connect($host, $username, $password, $dbname);

    if (false === $connection) {

        exit("Errore: impossibile stabilire una connessione " . mysqli_connect_error());
    }

    echo "Connesso: " . mysqli_get_host_info($connection);
    return $connection;
}

function createDB($connection, $dbname, $close = true)
{

    $sql = "CREATE DATABASE $dbname";
    return executeQuery($connection, $sql, $close);
}

function executeQuery($connection, $sql, $close = true)
{

    if (false === mysqli_query($connection, $sql)) {
        echo 'ERRORE: impossibile eseguire la query' . mysqli_error($connection);
        return false;
    }

    if ($close) {
        mysqli_close($connection);
    }

    return true;
}
function createTable($connection, $tableName, $dbname, $close = true)
{

    $sql = "CREATE TABLE $dbname.$tableName (
 
    id INT(11) NOT NULL AUTO_INCREMENT,
 
    nome VARCHAR(255) NOT NULL,
 
    cognome VARCHAR(255) NOT NULL,
 
    eta SMALLINT(3) NOT NULL,
 
    PRIMARY KEY (`id`)
 
    ) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;";

    executeQuery($connection, $sql, $close);
}

function insertIntoAnagrafica($connection, $nome, $cognome, $eta, $close = true)
{
    $sql = "INSERT INTO clienti.anagrafica (nome, cognome, eta) VALUES('$nome', '$cognome', $eta);";
    echo $sql;
    return executeQuery($connection, $sql, $close);
}

function selectQuery($connessione, $sql, $close = true)
{
    $result = mysqli_query($connessione, $sql);
    if ($result === false) {
        exit("Errore: impossibile eseguire la query."
            . mysqli_error($connessione));
    }

    $rows = array();

    while ($row = mysqli_fetch_array($result)) {
        $rows[] = $row;
    }

    mysqli_free_result($result);
    if ($close) {
        mysqli_close($connessione);
    }

    return $rows;
}

function selectAnagrafica($connessione, $nome, $close = true)
{

    $sql = "SELECT nome,cognome,eta FROM anagrafica WHERE nome='$nome'";

    return selectQuery($connessione, $sql, $close);
}

function update($connessione, $sql)
{
    $result = mysqli_query($connessione, $sql);
    if ($result === false) {
        exit("Errore: impossibile eseguire la query."
            . mysqli_error($connessione));
        return false;
    } else {
        echo "query eseguita correttamente";
        return mysqli_affected_rows($connessione);
    }
}

function updateAnagrafica($connessione)
{
    $sql = "UPDATE anagrafica SET nome= 'Carlo' WHERE id =1";
    return update($connessione, $sql, true);
}

function delete($connessione, $sql, $close)
{
    
    echo "query eseguita correttamente";
    return mysqli_affected_rows($connessione);
}

function deleteAnagrafica($connessione, $sql)
{
    $sql = "DELETE FROM anagrafica  WHERE id =1";
    return delete($connessione, $sql, true);
}
