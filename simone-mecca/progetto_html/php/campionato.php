<!DOCTYPE html>
<html lang="it">
<html>

<head>
    <link rel="stylesheet" href="../css/progetto.css">
    <title>Campionato</title>
    <?php include 'phpfunctions.php' ?>
    <link rel="icon" type="image/x-icon" href="../immagini/favicon.ico">
    <h3 id="titolo">Campionato</h3>
</head>
<script src="../javascript/javascript.js"></script>

<body>
    <a href="../html/homepage.html"><button class="bottoninavigazione">Homepage</button></a> <br>
    <a href="../php/elenco_squadre.php"><button class="bottoninavigazione">Elenco squadre</button></a><br>
    <a href="../php/campionato2.php"><button class="bottoninavigazione">Vedi campionato</button></a><br>
    <form id="myForm3" name="myForm3" method="post">
        <div>
            <input type="submit" name="submit" class="bottoninavigazione" style="white-space: normal;" value="Comincia campionato">
            <input type="submit" name="termina" class="bottoninavigazione" style="white-space: normal;" value="Elimina campionato">
        </div><br>
        <div>
            <?php
            $conn = connessione();
            $sql = "SELECT nome FROM squadre";
            $result = mysqli_query($conn, $sql);
            $sql2 = "SELECT count(nome) FROM squadre";
            $result2 = mysqli_query($conn, $sql2);
            $sql3 = "SELECT start FROM campionato";
            $result3 = mysqli_query($conn, $sql3);
            $row = mysqli_fetch_row($result3);
            if ($row[0] == "1") {
                echo "<script>campionatoOn()</script>";
            }
            $nomi = array();
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $nomi[] = $row['nome'];
                }
            }
            for ($i = 1; $i <= 4; $i++) {
                echo "<select name='menu_$i' id='menu_$i'>";
                foreach ($nomi as $nome) {
                    echo "<option value='$nome'>$nome</option>";
                }
                echo "</select>";
            }


            if (array_key_exists('submit', $_POST)) {
                invioSquadra($conn);
            }
            if (array_key_exists('termina', $_POST)) {
                terminacampionato($conn);
            }
            //FUNZIONE PER TERMINARE IL CAMPIONATO
            function terminacampionato($conn)
            {
                $sql = "SELECT `start` FROM `campionato`";
                $risultato = mysqli_fetch_column(mysqli_query($conn, $sql));
                if ($risultato == 0) {
                    echo "Nessun campionato é in corso!";
                    return;
                } else {
                    $sql2 = "UPDATE `campionato` SET `squadraA`='',`squadraB`='',`squadraC`='',`squadraD`='',`start`=0";
                    try {
                        $rs = mysqli_query($conn, $sql2);
                    } catch (Exception $e) {
                        echo " Eccezione trovata";
                    }
                    if ($rs) {
                        $sql2 = "DELETE FROM `progetto`.`classifica`";
                        $sql = "DELETE FROM `progetto`.`giornate`";
                        $rs = mysqli_query($conn, $sql);
                        $rs = mysqli_query($conn, $sql2);
                        echo "Campionato terminato correttamente";
                    }
                    return;
                }
            }
            //FUNZIONE PER CONTROLLARE E INVIARE LE SQUADRE AL DATABASE 
            function invioSquadra($conn)
            {
                $sql = "SELECT `start` FROM `campionato`";
                $risultato = mysqli_fetch_column(mysqli_query($conn, $sql));
                $squadraA = $_POST['menu_1'];
                $squadraB = $_POST['menu_2'];
                $squadraC = $_POST['menu_3'];
                $squadraD = $_POST['menu_4'];
                if ($risultato != 0) {
                    echo ("E' giá in corso un campionato!");
                    return;
                } else if (($squadraA == $squadraB) || ($squadraA == $squadraC) || ($squadraA == $squadraD) || ($squadraB == $squadraC) || ($squadraB == $squadraD) || ($squadraC == $squadraD)) {
                    echo ("Seleziona quattro squadre diverse!");
                    return;
                } else {
                    $sqlUPDATE = "UPDATE `campionato` SET `squadraA`='$squadraA',`squadraB`='$squadraB',`squadraC`='$squadraC',`squadraD`='$squadraD',`start`='1'";
                    try {
                        $rs = mysqli_query($conn, $sqlUPDATE);
                    } catch (Exception $e) {
                        echo " Eccezione trovata";
                    }
                    if ($rs) {
                        $arraysquadre = array(null, $squadraA, $squadraB, $squadraC, $squadraD);
                        $arrayGiornata_1 = array($squadraA, $squadraB, $squadraC, $squadraD);
                        shuffle($arrayGiornata_1);
                        $arrayGiornata_2 = array($squadraA, $squadraB, $squadraC, $squadraD);
                        shuffle($arrayGiornata_2);
                        $arrayGiornata_3 = array($squadraA, $squadraB, $squadraC, $squadraD);
                        shuffle($arrayGiornata_3);
                        $arrayGiornata_4 = array($squadraA, $squadraB, $squadraC, $squadraD);
                        shuffle($arrayGiornata_4);
                        $arrayGiornata_5 = array($squadraA, $squadraB, $squadraC, $squadraD);
                        shuffle($arrayGiornata_5);
                        $arrayGiornata_6 = array($squadraA, $squadraB, $squadraC, $squadraD);
                        shuffle($arrayGiornata_6);
                        for ($i = 1; $i <= 6; $i++) {
                            $array_name = "arrayGiornata_" . $i;
                            $sqlinserimento = "INSERT INTO `giornate`(`giornata`, `squadraA`, `squadraB`, `squadraC`, `squadraD`) VALUES ('$i',('" . ${$array_name}[0] . "'),('" . ${$array_name}[1] . "'),('" . ${$array_name}[2] . "'),('" . ${$array_name}[3] . "'))";
                            try {
                                $rs = mysqli_query($conn, $sqlinserimento);
                            } catch (Exception $e) {
                                echo " Eccezione trovata";
                            }
                        }
                        for ($i = 1; $i < 5; $i++) {
                            $sqlinserimento = "INSERT INTO `classifica`(`pos`, `nome`, `vittorie`, `sconfitte`, `punti`) VALUES ('$i','$arraysquadre[$i]','0','0','0')";
                            try {
                                $rs = mysqli_query($conn, $sqlinserimento);
                            } catch (Exception $e) {
                                echo " Eccezione trovata";
                            }
                        }
                        echo "Campionato creato!";
                    }
                }
            }
            ?>
        </div>
</body>

</html>